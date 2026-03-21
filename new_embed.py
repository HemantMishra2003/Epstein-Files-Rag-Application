from dotenv import load_dotenv
from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS

# -------------------------------
# LOAD ENV
# -------------------------------
load_dotenv()

# -------------------------------
# LOAD TXT DATA
# -------------------------------
with open(r"C:\Users\rahul\Desktop\PIB\epstein_dataset.txt", "r", encoding="utf-8") as f:
    text = f.read()

# -------------------------------
# CREATE DOCUMENT
# -------------------------------
documents = [Document(page_content=text)]

# -------------------------------
# CHUNKING
# -------------------------------
splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

docs = splitter.split_documents(documents)

# -------------------------------
# EMBEDDING MODEL
# -------------------------------
embedding = OpenAIEmbeddings(
    model="text-embedding-3-small"
)
# -------------------------------
# SAVE UPDATED DB
# -------------------------------

vector_store = FAISS.from_documents(
    docs,
    embedding
)

vector_store.save_local("vector_store_new")

print(" TXT data embedded and added successfully!")