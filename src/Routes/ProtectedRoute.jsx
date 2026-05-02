import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuth, loading } = useAuth();
  const location = useLocation();

  // ⏳ wait for auth init
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">
        Checking access...
      </div>
    );
  }

  // ❌ not logged in
  if (!isAuth) {
    return (
      <Navigate
        to="/admin/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // ✅ authorized
  return children;
}