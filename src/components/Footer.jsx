import React from 'react';
import Logo from '../assets/VelSAKA_Logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 w-full border-t border-white/10 py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-6">
        {/* Logo & Company Name */}
        <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 sm:p-1.5 group-hover:shadow-[0_0_12px_rgba(108,99,255,0.3)] transition-all duration-300">
            <img 
              alt="VELSAKA TECH Logo" 
              className="h-6 sm:h-7 md:h-8 w-auto object-contain brightness-125 contrast-125"
              src={Logo}
              style={{ 
                filter: 'brightness(1.3) contrast(1.2) drop-shadow(0 0 4px rgba(108, 99, 255, 0.3))'
              }}
            />
          </div>
          <span className="text-white font-bold text-sm sm:text-base md:text-lg font-['Space_Grotesk'] group-hover:text-indigo-400 transition-colors duration-300">
            VELSAKA TECH
          </span>
        </div>

        {/* Copyright with Dynamic Year */}
        <div className="text-slate-400 text-[11px] sm:text-xs md:text-sm order-3 sm:order-none">
          © {currentYear} VELSAKA TECH. Empowering innovation.
        </div>

        {/* Links */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
          <a 
            className="text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-[11px] sm:text-xs md:text-sm cursor-pointer" 
            href="#"
          >
            Privacy
          </a>
          <a 
            className="text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-[11px] sm:text-xs md:text-sm cursor-pointer" 
            href="#"
          >
            Terms
          </a>
          <a 
            className="text-slate-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-[11px] sm:text-xs md:text-sm cursor-pointer" 
            href="#"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;