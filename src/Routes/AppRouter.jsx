// src/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "../Routes/ProtectedRoute";

/* =========================
   PUBLIC PAGES
========================= */
import Home from "../Pages/HomePage";
import About from "../Pages/AboutPage";
import Services from "../Pages/ServicesPage";
import Contact from "../Pages/ContactPage";
import Products from "../Pages/ProductsPage";
//import Careers from "../Pages/CareersPage"; // ✅ FIXED
import NotFound from "../Pages/NotFound";
import UnderDevelopment from "../Pages/UnderDevelopment";

/* =========================
   ADMIN PAGES
========================= */
import AdminLogin from "../Pages/AdminLogin";
import AdminPage from "../Pages/AdminPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
            PUBLIC ROUTES
        ========================= */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<UnderDevelopment />} />

        {/* =========================
            ADMIN ROUTES
        ========================= */}

        {/* Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        {/* Redirect /admin → dashboard */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        {/* =========================
            404 PAGE
        ========================= */}
        <Route path="/404" element={<NotFound />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
