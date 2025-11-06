import requests

url = "http://127.0.0.1:5000/cluster_patients"
data = {
    "patients": [
        {"age": 25, "bmi": 21.5, "bp": 120, "cholesterol": 160},
        {"age": 35, "bmi": 23.8, "bp": 130, "cholesterol": 180},
        {"age": 58, "bmi": 27.8, "bp": 145, "cholesterol": 220},
        {"age": 45, "bmi": 25.5, "bp": 135, "cholesterol": 200}
    ],
    "num_clusters": 2
}
res = requests.post(url, json=data)
print(res.json())
