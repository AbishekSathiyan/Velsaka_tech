import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/VelSAKA_Logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] md:min-h-[750px] flex items-center px-4 sm:px-8 max-w-[1440px] mx-auto pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-xxl items-center w-full">

        {/* Left Content */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] font-['Space_Grotesk']">
            Building{" "}
            <span className="bg-gradient-to-r from-[#c4c0ff] to-[#adc6ff] bg-clip-text text-transparent">
              Products
            </span>{" "}
            That <br />
            Empower People
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            Next-generation technology solutions designed for enterprise
            excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            {/* Products */}
            <Link
              to="/products"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 px-6 sm:px-8 py-3 rounded-lg font-bold text-white shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:scale-105 hover:shadow-[0_0_35px_rgba(108,99,255,0.5)] transition-all"
            >
              Our Products
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="glass-card px-6 sm:px-8 py-3 rounded-lg font-bold text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
            >
              About Us
            </Link>

          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-[120px] opacity-30 absolute animate-pulse"></div>

          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full glass-card flex items-center justify-center border border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.4)]">
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-96 md:h-96 rounded-full border border-indigo-500/40 animate-pulse flex items-center justify-center">

              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 sm:p-6 md:p-8 border border-white/20 shadow-[0_0_40px_rgba(108,99,255,0.3)]">
                <img
                  src={Logo}
                  alt="VELSAKA TECH Logo"
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain rounded-full hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;