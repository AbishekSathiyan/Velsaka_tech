// src/auth/AuthContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const TOKEN_KEY = "adminToken";

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simple init check
    setLoading(false);
  }, []);

  const login = (jwt) => {
    localStorage.setItem(TOKEN_KEY, jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  // optional: auto logout when token missing/invalid can be added here

  return (
    <AuthContext.Provider value={{ token, isAuth: !!token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}