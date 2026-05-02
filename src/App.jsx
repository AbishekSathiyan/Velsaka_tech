// src/App.jsx ✅
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/AppRouter";
import AuthProvider from "./auth/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}