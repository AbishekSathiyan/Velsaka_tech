import React from "react";
import { NavLink } from "react-router-dom";
import VelSAKA_LOGO from "../assets/VelSAKA_Logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-slate-950/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_0_20px_rgba(108,99,255,0.1)]">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 h-16 sm:h-20 max-w-[1440px] mx-auto">
        {/* Logo + Text with Gold/White styling */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src={VelSAKA_LOGO}
            alt="VELSAKA TECH Logo"
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-heading font-bold text-sm sm:text-base md:text-lg tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]">
              VEL
            </span>
            <span className="text-white">SAKA</span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(234,179,8,0.3)]">
              {" "}TECH
            </span>
          </span>
        </NavLink>

        {/* Desktop Navigation with Gold Center Line */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-space tracking-tight">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-1 py-2 transition-all duration-300 ${
                  isActive
                    ? "text-yellow-500 font-semibold"
                    : "text-slate-400 hover:text-yellow-500/80"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-[0_0_6px_rgba(234,179,8,0.5)]"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          className="hidden sm:block bg-gradient-to-r from-indigo-500 to-blue-500 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-white active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 text-sm sm:text-base hover:scale-105"
        >
          Get in Touch
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 z-50">
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"></span>
        </button>
      </div>
    </header>
  );
}