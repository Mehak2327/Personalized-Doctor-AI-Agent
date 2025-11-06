import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from sklearn.preprocessing import StandardScaler

def train_and_predict_risk(patient_data):
    """
    patient_data: dict like
    {
        "age": 45,
        "bmi": 27.3,
        "bp": 135,
        "cholesterol": 210,
        "glucose": 105
    }
    Returns a health risk probability between 0 and 1.
    """

    # ---------------- SAMPLE TRAINING DATA ----------------
    np.random.seed(42)
    n = 200
    df = pd.DataFrame({
        "age": np.random.randint(20, 70, n),
        "bmi": np.random.uniform(18, 35, n),
        "bp": np.random.randint(100, 160, n),
        "cholesterol": np.random.randint(150, 250, n),
        "glucose": np.random.randint(80, 180, n)
    })
    df["risk"] = ((df["age"] > 50) | (df["bp"] > 140) |
                  (df["cholesterol"] > 220) | (df["glucose"] > 140)).astype(int)

    # ---------------- PREPROCESS ----------------
    X = df[["age", "bmi", "bp", "cholesterol", "glucose"]]
    y = df["risk"]
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # ---------------- BUILD ANN ----------------
    model = Sequential([
        Dense(16, activation="relu", input_dim=5),
        Dense(8, activation="relu"),
        Dense(1, activation="sigmoid")
    ])
    model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

    # ---------------- TRAIN MODEL ----------------
    model.fit(X_scaled, y, epochs=20, batch_size=16, verbose=0)

    # ---------------- PREDICT ----------------
    input_values = np.array([[patient_data["age"],
                              patient_data["bmi"],
                              patient_data["bp"],
                              patient_data["cholesterol"],
                              patient_data["glucose"]]])
    input_scaled = scaler.transform(input_values)
    prediction = float(model.predict(input_scaled)[0][0])

    return round(prediction, 3)
