import os

folder = r"C:\Users\rahul\Desktop\PIB\merged_vector_store"

# Total folder size with all files
total_size = 0
print("Files in folder:")
for file in os.listdir(folder):
    file_path = os.path.join(folder, file)
    if os.path.isfile(file_path):
        size_mb = os.path.getsize(file_path) / (1024 * 1024)
        total_size += size_mb
        print(f"  {file}: {size_mb:.2f} MB")

print(f"\nTotal size of merged_vector_store folder: {total_size:.2f} MB")

# Agar FAISS load karke exact documents count chahiye (sabse important)
try:
    from langchain_community.vectorstores import FAISS
    from langchain_openai import OpenAIEmbeddings

    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    vs = FAISS.load_local(folder, embeddings, allow_dangerous_deserialization=True)
    
    num_vectors = len(vs.index_to_docstore_id)   # ye exact number of embeddings/vectors hai
    print(f"\nTotal number of chunks/vectors in store: {num_vectors}")
    
    # Average size per chunk approx
    if num_vectors > 0:
        avg_mb_per_chunk = total_size / num_vectors
        print(f"Average size per chunk (approx): {avg_mb_per_chunk:.4f} MB")
except Exception as e:
    print("\nFAISS is not loaded:", str(e))
    print("only project.")