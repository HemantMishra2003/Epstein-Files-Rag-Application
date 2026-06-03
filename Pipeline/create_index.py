from dotenv import load_dotenv
import os

from Load_data import get_dataset

# LangChain imports
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

# load env
load_dotenv()

# load data
data = get_dataset()
texts = data["text"]

# convert to LangChain Documents
documents = []
for text in texts:
    documents.append(Document(page_content=text))


# we should  have added this portion too 


splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)


# embeddings
embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small"
)

# create FAISS vector store (automatic batching handled)
vector_store = FAISS.from_documents(
    documents,
    embeddings
)

# save
vector_store.save_local("my_vector_db")

print("LangChain FAISS index created and saved!")



# User Query
#        ↓
# Query Embedding (vector)
#        ↓
# FAISS Index → top-k similar vector IDs (e.g. 47, 12, 89)
#        ↓
# Docstore / Metadata Store → IDs  match → full Documents (text + source + page etc.)
#        ↓
# Retrieved Chunks →  send llm in context format

 

    #   better method just two lines for embeddings 


        # from langchain.vectorstores import FAISS

        # db = FAISS.from_texts(texts, embeddings)