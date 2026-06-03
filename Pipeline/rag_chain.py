from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough, RunnableLambda

from Retriever import retriever

from dotenv import load_dotenv
load_dotenv()


# LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3
)

# Prompt
prompt = ChatPromptTemplate.from_template("""
You are an AI investigation assistant specialized in the Epstein Files.

Use the provided context when available.

If the context contains relevant information, incorporate it into the answer.

If the context is incomplete or does not directly answer the question, use your general knowledge and reasoning about the Epstein Files investigation to provide the best possible answer.

Questions about Jeffrey Epstein, Ghislaine Maxwell, flight logs, associates, victims, politicians, celebrities, financial connections, intelligence links, court records, timelines, and related investigations should always be treated as relevant.

Only respond:

"Please ask investigation-related questions about the Epstein Files only."

when the question is clearly unrelated to the Epstein Files investigation.

Do not explain whether information came from documents or general knowledge.

Write detailed investigative-style answers.
Start every answer with:

KEY FINDING:
<one sentence containing the most important finding>

Detailed Analysis:
<full answer>

The KEY FINDING should be short, clear, and highlight the most important information first.



Context:
{context}

Question:
{question}
""")

#  PURE LangChain formatter 
format_docs = RunnableLambda(
    lambda docs: "\n\n".join(
        doc.page_content
        for doc in docs
    )
)

#  FINAL LCEL CHAIN
rag_chain = (
    {
        "context": retriever | format_docs,
        "question": RunnablePassthrough()
    }
    | prompt
    | llm
    | StrOutputParser()
)
