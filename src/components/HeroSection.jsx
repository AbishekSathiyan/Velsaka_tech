import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/VelSAKA_Logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center w-full px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left space-y-6">

            {/* Heading */}
            <h1 className="font-bold text-white leading-tight 
              text-[clamp(2.5rem,6vw,5rem)] font-['Space_Grotesk']">
              
              Building{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Products
              </span>{" "}
              That Empower People
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 max-w-xl mx-auto lg:mx-0
              text-[clamp(0.95rem,1.2vw,1.2rem)] leading-relaxed">
              
              Next-generation technology solutions designed for enterprise
              excellence. Built for scale, performance, and innovation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link
                to="/products"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 
                px-6 py-3 rounded-lg font-semibold text-white
                hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Our Products
              </Link>

              <Link
                to="/about"
                className="border border-white/20 px-6 py-3 rounded-lg 
                text-white hover:bg-white/10 transition-all duration-300"
              >
                About Us
              </Link>

            </div>
          </div>

          {/* RIGHT - Circle size same, only logo larger */}
          <div className="flex justify-center">

            <div className="relative w-[min(80vw,400px)] aspect-square">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 
                rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Circle - Same size */}
              <div className="relative w-full h-full rounded-full 
                flex items-center justify-center
                border border-white/20 backdrop-blur-md">

                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full border-2 
                  border-transparent border-t-indigo-500 border-r-blue-500 
                  animate-spin-slow"></div>

                {/* Inner Circle - Same size */}
                <div className="w-[70%] h-[70%] rounded-full flex items-center justify-center 
                  border border-indigo-400/40 bg-indigo-500/10">

                  {/* Logo Container - Larger padding, but circle same */}
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur">
                    <img
                      src={Logo}
                      alt="VELSAKA TECH Logo"
                      className="w-32 sm:w-40 md:w-48 lg:w-56 object-contain rounded-full 
                        hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                </div>
              </div>

              {/* Particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>

            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;