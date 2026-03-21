from datasets import load_dataset

def get_dataset():
    dataset = load_dataset("svetfm/epstein-files-nov11-25-house-post-ocr-embeddings")
    return dataset["train"]