const API_BASE = "http://127.0.0.1:5000";

export async function predictDisease(symptoms) {
  const res = await fetch(`${API_BASE}/predict_disease`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms }),
  });
  return res.json();
}

export async function predictPrice(medicine_name, quantity) {
  const res = await fetch(`${API_BASE}/predict_price`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ medicine_name, quantity }),
  });
  return res.json();
}

export async function clusterPatients(patients, num_clusters) {
  const res = await fetch(`${API_BASE}/cluster_patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ patients, num_clusters }),
  });
  return res.json();
}

export async function findAssociations(transactions) {
  const res = await fetch(`${API_BASE}/association_rules`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transactions }),
  });
  return res.json();
}

export async function predictRisk(patient) {
  const res = await fetch(`${API_BASE}/predict_risk`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ patient }),
  });
  return res.json();
}
