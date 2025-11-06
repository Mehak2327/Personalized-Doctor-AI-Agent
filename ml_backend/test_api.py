import requests

url = "http://127.0.0.1:5000/predict_disease"
data = {"symptoms": ["fever", "fatigue"]}
res = requests.post(url, json=data)
print(res.json())
