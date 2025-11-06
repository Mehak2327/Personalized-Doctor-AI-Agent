# ml_backend/ml_api.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import sys, os
import pandas as pd

# Fix import paths
sys.path.append(os.path.dirname(__file__))

# Import ML model functions
from models.classification_model import train_and_predict_disease
from models.regression_model import train_and_predict_price
from models.clustering_model import cluster_patients
from models.association_rules import find_disease_medicine_patterns
from models.neural_network_model import train_and_predict_risk


# Initialize Flask app
app = Flask(__name__)
CORS(app)

# -------------------- HOME ROUTE --------------------
@app.route('/')
def home():
    return jsonify({"message": "✅ ML Backend is running successfully 🚀"})

# -------------------- DISEASE PREDICTION ENDPOINT --------------------
@app.route('/predict_disease', methods=['POST'])
def predict_disease():
    try:
        data = request.get_json()
        symptoms = data.get('symptoms')

        if not symptoms or not isinstance(symptoms, list):
            return jsonify({"error": "Please provide symptoms as a list"}), 400

        prediction, prob = train_and_predict_disease(symptoms)
        return jsonify({
            "input_symptoms": symptoms,
            "predicted_disease": prediction,
            "confidence": round(prob * 100, 2)
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -------------------- MEDICINE PRICE PREDICTION ENDPOINT --------------------
@app.route('/predict_price', methods=['POST'])
def predict_price():
    try:
        data = request.get_json()
        medicine_name = data.get('medicine_name')
        quantity = data.get('quantity')

        if not medicine_name or quantity is None:
            return jsonify({"error": "Please provide medicine_name and quantity"}), 400

        prediction = train_and_predict_price(medicine_name, quantity)

        return jsonify({
            "medicine_name": medicine_name,
            "quantity": quantity,
            "predicted_price": prediction,
            "model_used": "Linear Regression"
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -------------------- PATIENT CLUSTERING ENDPOINT --------------------
@app.route('/cluster_patients', methods=['POST'])
def cluster_patients_api():
    try:
        data = request.get_json()
        patients = data.get('patients')
        num_clusters = data.get('num_clusters', 3)

        if not patients or not isinstance(patients, list):
            return jsonify({"error": "Please provide 'patients' as a list of patient records"}), 400

        result = cluster_patients(patients, num_clusters)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -------------------- ASSOCIATION RULES ENDPOINT --------------------
@app.route('/association_rules', methods=['POST'])
def association_rules_api():
    try:
        data = request.get_json()
        transactions = data.get('transactions')

        if not transactions or not isinstance(transactions, list):
            return jsonify({"error": "Please provide 'transactions' as a list of lists"}), 400

        result = find_disease_medicine_patterns(transactions)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
# -------------------- NEURAL NETWORK HEALTH RISK ENDPOINT --------------------
@app.route('/predict_risk', methods=['POST'])
def predict_risk():
    try:
        data = request.get_json()
        patient = data.get('patient')

        if not patient or not isinstance(patient, dict):
            return jsonify({"error": "Please provide patient details as a JSON object"}), 400

        prediction = train_and_predict_risk(patient)
        return jsonify({
            "patient": patient,
            "predicted_risk": prediction,
            "model_used": "Artificial Neural Network"
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500



# -------------------- RUN SERVER --------------------
if __name__ == '__main__':
    app.run(debug=True, port=5000)
