import requests

url = "http://127.0.0.1:5000/predict_risk"
data = {
    "patient": {
        "age": 55,
        "bmi": 29.5,
        "bp": 150,
        "cholesterol": 230,
        "glucose": 150
    }
}
res = requests.post(url, json=data)
print(res.json())