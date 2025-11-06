import requests

url = "http://127.0.0.1:5000/association_rules"
data = {
    "transactions": [
        ["Flu", "Paracetamol"],
        ["Allergy", "Cetrizine"],
        ["Flu", "Cough Syrup"],
        ["Flu", "Paracetamol", "Cough Syrup"],
        ["Allergy", "Cetrizine"],
        ["Fever", "Paracetamol"]
    ]
}

res = requests.post(url, json=data)
print(res.json())
