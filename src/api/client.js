// src/api/client.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const api = async (path, options = {}) => {
  const token = localStorage.getItem("adminToken");

  // Ensure path starts with /api
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Remove duplicate /admin if present
  let finalPath = normalizedPath;
  if (finalPath.includes("/admin/admin/")) {
    finalPath = finalPath.replace("/admin/admin/", "/admin/");
  }

  const url = `${BASE_URL}${finalPath}`;
  console.log("API Request:", url); // Debug log

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
    });

    const text = await res.text();
    let data = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      data = { message: "Invalid response from server" };
    }

    if (!res.ok) {
      if (res.status === 401) {
        localStorage.removeItem("adminToken");
        if (!window.location.pathname.includes("/admin/login")) {
          window.location.href = "/admin/login";
        }
      }
      throw new Error(data?.message || `HTTP ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("API Error:", {
      url,
      path,
      message: error.message,
    });

    // Handle network errors
    if (error.message === "Failed to fetch") {
      throw new Error(
        "Cannot connect to server. Please check if backend is running on " +
          BASE_URL,
      );
    }

    throw error;
  }
};
