// src/api/client.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = async (path, options = {}) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  // handle non-JSON safely
  const text = await res.text();
  let data = {};
  try {
    data = JSON.parse(text);
  } catch {}

  if (!res.ok) {
    throw new Error(data?.message || `HTTP ${res.status}`);
  }
  return data;
};
