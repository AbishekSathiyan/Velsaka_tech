// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth.js";

export default function ProtectedRoute({ children }) {
  const { isAuth, loading } = useAuth();

  if (loading) return null;
  if (!isAuth) return <Navigate to="/admin/login" replace />;

  return children;
}