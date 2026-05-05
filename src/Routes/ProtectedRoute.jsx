// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  
  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // If token exists, render the protected component
  return children;
};

export default ProtectedRoute;