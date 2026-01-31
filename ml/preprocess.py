import pandas as pd

df = pd.read_csv("online_retail.csv").dropna()
print(f"Processed {len(df)} transactions")
