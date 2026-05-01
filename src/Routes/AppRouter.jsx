import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProductsPage from "../Pages/ProductsPage";
import ServicesPage from "../Pages/ServicesPage";
import PricingPage from "../Pages/PricingPage";

import ContactPage from "../Pages/ContactPage";
import NotFoundPage from "../Pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage />} />

      {/* ✅ 404 fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
