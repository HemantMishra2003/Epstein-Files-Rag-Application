import sys
import os

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PIPELINE_DIR = os.path.join(ROOT_DIR, "Pipeline")

sys.path.insert(0, ROOT_DIR)
sys.path.insert(0, PIPELINE_DIR)

from Retriever import retriever
from rag_chain import rag_chain

from test_questions import test_data

from datasets import Dataset

from ragas import evaluate
from ragas.metrics import (
    Faithfulness,
    AnswerRelevancy,
    ContextPrecision,
    ContextRecall
)

questions = []
answers = []
contexts = []
ground_truths = []

for item in test_data:

    question = item["question"]

    docs = retriever.invoke(question)

    context = [doc.page_content for doc in docs]

    answer = rag_chain.invoke(question)

    print(f"Done: {question}")

    questions.append(question)
    answers.append(answer)
    contexts.append(context)
    ground_truths.append(item["ground_truth"])

dataset = Dataset.from_dict(
    {
        "question": questions,
        "answer": answers,
        "contexts": contexts,
        "ground_truth": ground_truths
    }
)

result = evaluate(
    dataset,
    metrics=[
        Faithfulness(),
        AnswerRelevancy(),
        ContextPrecision(),
        ContextRecall()
    ]
)

print("\n")
print(result)