// src/api/client.js

// ✅ Production-safe BASE URL with fallback
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000";

console.log("🌐 API BASE URL:", BASE_URL);

export const api = async (path, options = {}) => {
  const token = localStorage.getItem("adminToken");

  // ✅ Normalize path
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // ✅ Ensure no duplicate /admin
  let finalPath = normalizedPath;
  if (finalPath.includes("/admin/admin/")) {
    finalPath = finalPath.replace("/admin/admin/", "/admin/");
  }

  // ✅ Always prefix /api (clean architecture)
  const url = `${BASE_URL}/api${finalPath}`;

  console.log("➡️ API Request:", url);

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
      console.error("❌ JSON Parse Error:", parseError);
      data = { message: "Invalid response from server" };
    }

    if (!res.ok) {
      // 🔐 Handle auth failure
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
    console.error("❌ API Error:", {
      url,
      path,
      message: error.message,
    });

    // 🌐 Network error handling
    if (error.message === "Failed to fetch") {
      throw new Error(
        `Cannot connect to server. Please check backend: ${BASE_URL}`
      );
    }

    throw error;
  }
};