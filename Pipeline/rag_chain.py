from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough, RunnableLambda

from Retriever import retriever

# LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3
)

# Prompt
prompt = ChatPromptTemplate.from_template("""
You are a helpful AI assistant.

Rules:
- Answer strictly ONLY from the provided context
- If answer is not in context, say "I don't know"
- Keep answer long 
- Always include source if available

Context:
{context}

Question:
{question}
""")

#  PURE LangChain formatter (no normal function call outside chain)
format_docs = RunnableLambda(
    lambda docs: "\n\n".join(
        f"{doc.page_content}\n(Source: {doc.metadata.get('source', 'unknown')})"
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

if __name__ == "__main__":
    print("Testing RAG Chain...\n")
    print(rag_chain.invoke("what is trump case?"))