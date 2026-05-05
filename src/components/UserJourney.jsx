import React, { useState, useEffect } from "react";

const UserJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    { step: "1", title: "Visit", desc: "Landing on our high-speed gateway" },
    { step: "2", title: "Explore", desc: "Discovering modules tailored to you" },
    { step: "3", title: "Learn", desc: "Interactive guides and documentation" },
    { step: "4", title: "Take Action", desc: "Full integration and deployment" },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prevStep) => (prevStep + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const goToStep = (index) => {
    setActiveStep(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-indigo-950/20 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          The User Journey
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-2 sm:gap-3 cursor-pointer transition-all duration-500 ${
                activeStep === index
                  ? "scale-100 sm:scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => goToStep(index)}
            >
              {/* Step Circle */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl transition-all duration-500 ${
                  activeStep === index
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg scale-110"
                    : activeStep > index
                      ? "bg-green-500/20 border-2 border-green-500/50"
                      : "glass-card border-2 border-indigo-500/50"
                }`}
              >
                {activeStep > index ? "✓" : item.step}
              </div>

              {/* Title */}
              <h4
                className={`text-sm sm:text-base md:text-lg font-bold transition-all duration-500 ${
                  activeStep === index
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"
                    : "text-white"
                }`}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p className="hidden sm:block text-xs sm:text-sm text-slate-400 max-w-[150px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile description */}
        <div className="block sm:hidden text-center mt-8">
          <p className="text-sm text-slate-300 px-4">
            {steps[activeStep].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;