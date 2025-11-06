import React, { useState } from "react";
import { predictDisease, predictPrice, predictRisk } from "../api";

export default function MLDemo() {
  const [symptoms, setSymptoms] = useState("");
  const [diseaseResult, setDiseaseResult] = useState(null);

  const handleDiseasePredict = async () => {
    const sympArray = symptoms.split(",").map(s => s.trim());
    const result = await predictDisease(sympArray);
    setDiseaseResult(result);
  };

  return (
    <div className="p-6 text-white bg-blue-900 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">🩺 AI Medical Assistant</h1>

      <div className="mb-4">
        <label>Enter symptoms (comma separated): </label>
        <input
          type="text"
          className="text-black p-2 rounded w-full"
          value={symptoms}
          onChange={e => setSymptoms(e.target.value)}
        />
        <button
          onClick={handleDiseasePredict}
          className="mt-3 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
        >
          Predict Disease
        </button>
      </div>

      {diseaseResult && (
        <div className="bg-white text-black p-3 rounded-lg mt-4">
          <h3><b>Predicted Disease:</b> {diseaseResult.predicted_disease}</h3>
          <p><b>Confidence:</b> {diseaseResult.confidence}%</p>
        </div>
      )}
    </div>
  );
}
