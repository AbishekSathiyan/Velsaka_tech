import React, { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-950/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10">

        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 h-16 sm:h-20 max-w-[1440px] mx-auto">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={VelSAKA_LOGO} className="h-8 sm:h-10" />
            <span className="text-white font-bold">VELSAKA TECH</span>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive ? "text-yellow-400" : "text-slate-400 hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA (ONLY DESKTOP) */}
          <NavLink
            to="/contact"
            className="hidden md:block bg-indigo-500 px-4 py-2 rounded-full text-white text-sm"
          >
            Get in Touch
          </NavLink>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>

        </div>
      </header>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* RIGHT SIDEBAR MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-950 z-50 transform transition-transform duration-300 border-l border-white/10 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-white text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-yellow-400"
            >
              {link.name}
            </NavLink>
          ))}

          {/* SINGLE CTA ONLY HERE */}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-indigo-500 text-center py-2 rounded-full text-white"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </>
  );
}