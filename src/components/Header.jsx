import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import VelSAKA_LOGO from "../assets/VelSAKA_Logo.jpeg";
import { LogOut, User, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Header({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  // Prevent scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  /**
   * =========================
   * 🔷 MAIN HEADER (NON-ADMIN)
   * =========================
   */
  if (!isAdminPage) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              
              {/* Mobile & Tablet Layout (Below 1024px) */}
              <div className="lg:hidden flex items-center justify-between h-14 sm:h-16">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 flex-shrink-0">
                  <img
                    src={VelSAKA_LOGO}
                    alt="VELSAKA TECH Logo"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                  <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
                    VELSAKA TECH
                  </span>
                </NavLink>

                {/* Menu Button - REMOVED square background */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-0 hover:opacity-80 transition-all duration-200 active:scale-95 bg-transparent border-0 shadow-none"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ) : (
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  )}
                </button>
              </div>

              {/* Desktop Layout (1024px and above) */}
              <div className="hidden lg:flex items-center justify-between h-20">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
                  <img
                    src={VelSAKA_LOGO}
                    alt="VELSAKA TECH Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-white font-bold text-lg tracking-wide">
                    VELSAKA TECH
                  </span>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="flex items-center gap-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                          isActive
                            ? "text-yellow-400"
                            : "text-slate-300 hover:text-yellow-400"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>

                {/* CTA Button */}
                <NavLink
                  to="/contact"
                  className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-indigo-500/30 whitespace-nowrap"
                >
                  Get in Touch
                </NavLink>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
            />

            {/* Sidebar Menu */}
            <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-slate-950 z-50 lg:hidden shadow-2xl border-l border-white/10 transform transition-transform duration-300 translate-x-0 overflow-y-auto">
              {/* Menu Header */}
              <div className="sticky top-0 flex justify-between items-center p-4 border-b border-white/10 bg-slate-950">
                <div className="flex items-center gap-2">
                  <img src={VelSAKA_LOGO} className="h-7 w-auto" alt="Logo" />
                  <span className="text-white font-semibold text-sm">
                    VELSAKA TECH
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="text-white w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-500/20 text-yellow-400 border-l-2 border-yellow-400"
                          : "text-slate-300 hover:bg-white/5 hover:text-yellow-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Divider */}
                <div className="h-px bg-white/10 my-2"></div>

                {/* CTA Button in Menu */}
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 text-center py-3 rounded-lg text-white font-semibold text-base bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all shadow-md active:scale-95"
                >
                  Get in Touch
                </NavLink>
              </div>
            </div>
          </>
        )}

        {/* Spacer for fixed header */}
        <div className="h-14 sm:h-16 lg:h-20" />
      </>
    );
  }

  /**
   * =========================
   * 🔷 ADMIN HEADER (FULLY RESPONSIVE)
   * =========================
   */
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Mobile & Tablet Admin Header */}
            <div className="lg:hidden flex items-center justify-between h-14 sm:h-16">
              <NavLink to="/admin/dashboard" className="flex items-center gap-2">
                <img src={VelSAKA_LOGO} className="h-7 sm:h-8 w-auto" alt="Logo" />
                <span className="text-white font-semibold text-xs sm:text-sm">
                  VELSAKA TECH
                </span>
              </NavLink>

              <span className="text-indigo-400 font-semibold text-sm">
                Admin
              </span>

              <button
                onClick={onLogout}
                className="flex items-center gap-1 px-2 py-1.5 text-xs bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 active:scale-95"
              >
                <LogOut className="w-3 h-3" />
                <span className="hidden xs:inline">Logout</span>
              </button>
            </div>

            {/* Desktop Admin Header */}
            <div className="hidden lg:flex items-center justify-between h-20">
              <NavLink to="/admin/dashboard" className="flex items-center gap-3">
                <img src={VelSAKA_LOGO} className="h-10 w-auto" alt="Logo" />
                <span className="text-white font-semibold text-base">
                  VELSAKA TECH
                </span>
              </NavLink>

              <span className="text-indigo-400 font-semibold text-xl">
                Admin Panel
              </span>

              <div className="flex items-center gap-4">
                {user && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <User className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm text-gray-300">
                      {user.name || user.email}
                    </span>
                  </div>
                )}
                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:text-red-300 transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-14 sm:h-16 lg:h-20" />
    </>
  );
}