import requests

url = "http://127.0.0.1:5000/predict_price"
data = {"medicine_name": "Paracetamol", "quantity": 8}
res = requests.post(url, json=data)
print(res.json())
