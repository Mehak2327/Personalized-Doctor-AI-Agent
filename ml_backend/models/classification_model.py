import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import MultiLabelBinarizer
import random

def train_and_predict_disease(symptoms_list):
    # Example mini dataset (you can expand later)
    data = {
        "symptoms": [
            ["fever", "cough", "fatigue"],
            ["itching", "skin_rash"],
            ["headache", "vomiting"],
            ["chest_pain", "breathlessness"],
            ["joint_pain", "fatigue"]
        ],
        "disease": [
            "Flu",
            "Allergy",
            "Migraine",
            "Heart Disease",
            "Arthritis"
        ]
    }

    df = pd.DataFrame(data)
    mlb = MultiLabelBinarizer()
    X = mlb.fit_transform(df["symptoms"])
    y = df["disease"]

    model = DecisionTreeClassifier()
    model.fit(X, y)

    # Prepare user input
    input_vector = mlb.transform([symptoms_list])
    prediction = model.predict(input_vector)[0]

    # Dummy probability (for display)
    prob = random.uniform(0.7, 0.99)

    return prediction, prob