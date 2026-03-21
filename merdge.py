from langchain_community.vectorstores import FAISS
# embeddings wahi use kar jo tune pehle use kiya tha
from langchain_openai import OpenAIEmbeddings      # ya HuggingFaceEmbeddings, etc.


# embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
from dotenv import load_dotenv
import os
load_dotenv()

# -------------------------
# LOAD ENV
# -------------------------

embeddings = OpenAIEmbeddings()   # ← yahan apna embeddings daal

# Apne folder paths change kar
vs1 = FAISS.load_local(
    "my_vector_db", 
    embeddings, 
    allow_dangerous_deserialization=True
)

vs2 = FAISS.load_local(
    "vector_store_new", 
    embeddings, 
    allow_dangerous_deserialization=True
)

#  Merge magic
vs1.merge_from(vs2)

# Naya merged folder bana
vs1.save_local("merged_vector_store")

print(" merdging complete!")