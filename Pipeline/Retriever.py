from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

from dotenv import load_dotenv
import os

# -------------------------
# LOAD ENV
# -------------------------
load_dotenv()

# -------------------------
# EMBEDDINGS
# -------------------------
embedding = OpenAIEmbeddings(
    model="text-embedding-3-small"
)

# -------------------------
# LOAD VECTORSTORE
# -------------------------
# vectorstore = FAISS.load_local(
#     r"C:\Users\rahul\Desktop\PIB\merged_vector_store",
#     embedding,
#     allow_dangerous_deserialization=True
# )

import os

BASE_DIR = os.path.dirname(__file__)


vectorstore = FAISS.load_local(
    os.path.join(BASE_DIR, "vector_store_new"),
    embedding,
    allow_dangerous_deserialization=True
)

# -------------------------
# RETRIEVER
# -------------------------
retriever = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 5,
    }
)

# --
# -------------------------
print("TOTAL VECTORS:", vectorstore.index.ntotal)
if __name__ == "__main__":
    docs = retriever.invoke("trump epstein")
    
    seen = set()

    for doc in docs:
        text = doc.page_content.strip()

        if text not in seen:
            seen.add(text)

            text = text.replace("utm_", "")

            print("\n--- RESULT ---\n")
            print(text)