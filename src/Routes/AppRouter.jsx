import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProductsPage from "../Pages/ProductsPage";
import ServicesPage from "../Pages/ServicesPage";
import PricingPage from "../Pages/PricingPage";
import ContactPage from "../Pages/ContactPage";
import NotFoundPage from "../Pages/NotFound";

import AdminWaitlist from "../Pages/AdminWaitList";
import AdminLogin from "../Pages/AdminLogin";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage />} />

      {/* 🔐 Admin Auth */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* 🔒 Protected Admin Route */}
      <Route
        path="/admin/waitlist"
        element={
          <ProtectedRoute>
            <AdminWaitlist />
          </ProtectedRoute>
        }
      />

      {/* ❌ 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;