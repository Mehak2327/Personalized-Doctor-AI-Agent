import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
import numpy as np

def train_and_predict_price(medicine_name, quantity):
    # ------------------ SAMPLE DATASET ------------------
    data = {
        "medicine_name": [
            "Paracetamol", "Paracetamol", "Ibuprofen", "Amoxicillin",
            "Cetrizine", "Dolo650", "Cough Syrup", "Crocin", "Azithromycin", "Panadol"
        ],
        "base_price": [25, 30, 50, 80, 20, 35, 60, 28, 100, 40],
        "quantity": [5, 10, 5, 10, 5, 10, 5, 10, 5, 10],
        "total_price": [125, 300, 250, 800, 100, 350, 300, 280, 500, 400]
    }

    df = pd.DataFrame(data)

    # ------------------ PREPROCESSING ------------------
    le = LabelEncoder()
    df["medicine_encoded"] = le.fit_transform(df["medicine_name"])

    X = df[["medicine_encoded", "quantity"]]
    y = df["total_price"]

    # ------------------ MODEL TRAINING ------------------
    model = LinearRegression()
    model.fit(X, y)

    # ------------------ PREDICTION ------------------
    if medicine_name not in le.classes_:
        # Unknown medicine, use average price estimate
        pred_price = float(np.mean(y))
    else:
        med_encoded = le.transform([medicine_name])[0]
        pred_price = model.predict([[med_encoded, quantity]])[0]

    return round(pred_price, 2)
