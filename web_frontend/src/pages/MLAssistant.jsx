import React, { useState } from "react";
import { predictDisease, predictPrice, predictRisk } from "../api";

export default function MLAssistant() {
  const [symptoms, setSymptoms] = useState("");
  const [diseaseResult, setDiseaseResult] = useState(null);

  const [medicine, setMedicine] = useState("");
  const [quantity, setQuantity] = useState("");
  const [priceResult, setPriceResult] = useState(null);

  const [patient, setPatient] = useState({
    age: "",
    bmi: "",
    bp: "",
    cholesterol: "",
    glucose: "",
  });
  const [riskResult, setRiskResult] = useState(null);

  // ---------------- Disease Prediction ----------------
  const handleDiseasePredict = async () => {
    const sympArray = symptoms.split(",").map((s) => s.trim());
    const result = await predictDisease(sympArray);
    setDiseaseResult(result);
  };

  // ---------------- Medicine Price Prediction ----------------
  const handlePricePredict = async () => {
    const result = await predictPrice(medicine, parseInt(quantity));
    setPriceResult(result);
  };

  // ---------------- Health Risk Prediction (ANN) ----------------
  const handleRiskPredict = async () => {
    const result = await predictRisk({
      age: parseFloat(patient.age),
      bmi: parseFloat(patient.bmi),
      bp: parseFloat(patient.bp),
      cholesterol: parseFloat(patient.cholesterol),
      glucose: parseFloat(patient.glucose),
    });
    setRiskResult(result);
  };

  return (
    <div className="text-white p-8 bg-gradient-to-br from-blue-900 to-black rounded-2xl shadow-2xl max-w-3xl mx-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🧠 AI & ML Health Assistant
      </h1>

      {/* --- Disease Predictor --- */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Disease Predictor</h2>
        <input
          type="text"
          placeholder="Enter symptoms (comma separated)"
          className="w-full p-2 rounded text-black"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <button
          onClick={handleDiseasePredict}
          className="mt-3 px-4 py-2 bg-green-600 rounded hover:bg-green-700"
        >
          Predict Disease
        </button>

        {diseaseResult && (
          <div className="bg-white text-black p-3 rounded mt-3">
            <p><b>Disease:</b> {diseaseResult.predicted_disease}</p>
            <p><b>Confidence:</b> {diseaseResult.confidence}%</p>
          </div>
        )}
      </div>

      {/* --- Medicine Price Predictor --- */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Medicine Price Predictor</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Medicine Name"
            className="p-2 rounded text-black flex-1"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="p-2 rounded text-black w-24"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button
          onClick={handlePricePredict}
          className="mt-3 px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600"
        >
          Predict Price
        </button>

        {priceResult && (
          <div className="bg-white text-black p-3 rounded mt-3">
            <p><b>Medicine:</b> {priceResult.medicine_name}</p>
            <p><b>Predicted Price:</b> ₹{priceResult.predicted_price}</p>
          </div>
        )}
      </div>

      {/* --- Health Risk Predictor (Neural Network) --- */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Health Risk Predictor</h2>
        <div className="grid grid-cols-2 gap-3">
          {Object.keys(patient).map((key) => (
            <input
              key={key}
              type="number"
              placeholder={key.toUpperCase()}
              className="p-2 rounded text-black"
              value={patient[key]}
              onChange={(e) =>
                setPatient({ ...patient, [key]: e.target.value })
              }
            />
          ))}
        </div>
        <button
          onClick={handleRiskPredict}
          className="mt-3 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Predict Health Risk
        </button>

        {riskResult && (
          <div className="bg-white text-black p-3 rounded mt-3">
            <p>
              <b>Predicted Health Risk:</b>{" "}
              {(riskResult.predicted_risk * 100).toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
