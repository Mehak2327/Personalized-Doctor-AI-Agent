import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np

def cluster_patients(patients_data, num_clusters=3):
    """
    patients_data: list of dicts like 
    [
        {"age": 25, "bmi": 21.5, "bp": 120, "cholesterol": 160},
        {"age": 58, "bmi": 27.8, "bp": 145, "cholesterol": 220}
    ]
    num_clusters: number of clusters (default=3)
    """
    try:
        # Convert input into DataFrame
        df = pd.DataFrame(patients_data)

        # Check if all required columns are present
        required = ["age", "bmi", "bp", "cholesterol"]
        for col in required:
            if col not in df.columns:
                raise ValueError(f"Missing key: {col}")

        # Scale the data
        scaler = StandardScaler()
        scaled_data = scaler.fit_transform(df)

        # Train KMeans
        kmeans = KMeans(n_clusters=num_clusters, random_state=42)
        clusters = kmeans.fit_predict(scaled_data)

        # Attach cluster labels
        df["cluster"] = clusters

        # Convert results to dict
        return {
            "assigned_clusters": clusters.tolist(),
            "cluster_summary": df.groupby("cluster").mean().to_dict(),
            "model_used": "K-Means Clustering"
        }

    except Exception as e:
        return {"error": str(e)}
