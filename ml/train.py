import pandas as pd
import pickle
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import LabelEncoder

print("Loading data...")
df = pd.read_csv("../data/transactions.csv")

print(f"Processed {len(df)} transactions")

pivot = df.pivot_table(
    index="userId",
    columns="productId",
    values="amount",
    aggfunc="count",
    fill_value=0
)

similarity = cosine_similarity(pivot)

model = {
    "matrix": pivot,
    "similarity": similarity
}

with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained successfully")
