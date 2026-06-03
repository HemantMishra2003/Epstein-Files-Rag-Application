
from dotenv import load_dotenv
import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

load_dotenv(os.path.join(BASE_DIR, ".env"))

print("Razorpay Key:", os.getenv("RAZORPAY_KEY_ID"))

 
import razorpay

razorpay_client = razorpay.Client(
    auth=(
        os.getenv("RAZORPAY_KEY_ID"),
        os.getenv("RAZORPAY_KEY_SECRET")
    )
)

from fastapi import FastAPI, Request

from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import asyncio
import time
import traceback

from redis import asyncio as aioredis
from database import SessionLocal
from models import QueryHistory
from rag_chain import rag_chain

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================== REDIS SETUP ==================
redis_client = aioredis.from_url("redis://redis:6379", 
                               encoding="utf-8", 
                               decode_responses=True,
                               socket_connect_timeout=5)  # timeout added

# ================== MODELS ==================
class QueryRequest(BaseModel):
    question: str


async def stream_response(text: str):
    words = str(text).split()
    for word in words:
        yield word + " "
        await asyncio.sleep(0.018)


def custom_cache_key(question: str):
    normalized = question.strip().lower()
    return f"rag:global:{normalized}"


# ================== ASK ENDPOINT ==================

@app.post("/ask")
async def ask_question(request: Request, data: QueryRequest):
    question = data.question.strip()
    user_email = request.headers.get("user-email", "unknown")

    rate_key = f"rate_limit:{user_email}"

    request_count = await redis_client.get(rate_key)

    if request_count and int(request_count) >= 5:

     return StreamingResponse(
        stream_response("Rate limit exceeded. Please wait."),
        media_type="text/event-stream"
    )

    pipe = redis_client.pipeline()

    pipe.incr(rate_key)
    pipe.expire(rate_key, 60)

    await pipe.execute()

    print(f"🔹 Request | Q: {question} | Email: {user_email}")

    cache_key = custom_cache_key(question)

    try:
        # === Redis Check ===
        try:
            cached_response = await redis_client.get(cache_key)
            if cached_response:
                print(f" Cache Hit")
                return StreamingResponse(stream_response(cached_response), media_type="text/event-stream")
        except Exception as redis_err:
            print(f" Redis Error (ignoring for now): {redis_err}")

        # === RAG Call ===
        print(f" Cache Miss → Calling RAG for: {question}")
        start_time = time.time()
        
        response = rag_chain.invoke(question)    
        print("\n========== FINAL RESPONSE ==========")
        print(response)
        print("===================================\n")  # ← yahan error aa sakta hai
        response_text = str(response)
        
        end_time = time.time()
        print(f"RAG Success | Time: {round(end_time-start_time, 2)}s")

        # === Save to Redis (30 days) ===
        try:
            await redis_client.setex(cache_key, 2592000, response_text)  # 30 days
            print(f"Saved to Redis")
        except Exception as redis_err:
            print(f"Redis Save Failed: {redis_err}")

        # === Save to Database ===
        print("DB BLOCK STARTED")
        db = SessionLocal()
        try:
            new_query = QueryHistory(
                question=question,
                answer=response_text,
                user_email=user_email
            )
            db.add(new_query)
            db.commit()
            print(" Saved to DB")
        except Exception as db_err:
            print(f" DB Save Error: {db_err}")
        finally:
            db.close()

        return StreamingResponse(stream_response(response_text), media_type="text/event-stream")

    except Exception as e:
        print("FULL ERROR:")
        print(traceback.format_exc())   # ← Ye line bahut important hai
        return StreamingResponse(
            stream_response(f"Error: {str(e)}"),   # Ab real error dikhega frontend pe
            media_type="text/event-stream"
        )
    
    # HISTORY ENDPOINT
@app.get("/history/{email}")
async def get_history(email: str):

    db = SessionLocal()

    try:
        chats = (
            db.query(QueryHistory)
            .filter(QueryHistory.user_email == email)
            .all()
        )

        result = []

        for chat in chats:
            result.append({
                "question": chat.question,
                "answer": chat.answer,
                "user_email": chat.user_email
            })

        return result

    finally:
        db.close()


from pydantic import BaseModel

class PaymentRequest(BaseModel):
    amount: int



@app.post("/create-order")
async def create_order(data: PaymentRequest):

    order = razorpay_client.order.create({
        "amount": data.amount * 100,
        "currency": "INR",
        "payment_capture": 1
    })

    return {
        "order_id": order["id"]
    }