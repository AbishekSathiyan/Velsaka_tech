import React, { useState, useEffect } from "react";

const UserJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      step: "1",
      title: "Visit",
      desc: "Landing on our high-speed gateway",
      icon: "open_in_new",
    },
    {
      step: "2",
      title: "Explore",
      desc: "Discovering modules tailored to you",
      icon: "explore",
    },
    {
      step: "3",
      title: "Learn",
      desc: "Interactive guides and documentation",
      icon: "school",
    },
    {
      step: "4",
      title: "Take Action",
      desc: "Full integration and deployment",
      icon: "rocket_launch",
    },
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

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  return (
    <section className="px-4 sm:px-8 max-w-[1440px] mx-auto py-12 md:py-16 bg-indigo-950/20 rounded-xl relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-[100px] transition-all duration-1000 ease-in-out"
          style={{
            transform: `translate(-50%, -50%) translateX(${(activeStep - 1.5) * 80}px)`,
          }}
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-['Space_Grotesk']">
          The User Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-1000 ease-in-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-4 cursor-pointer z-10 transition-all duration-500 ${
                activeStep === index
                  ? "transform scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
              onClick={() => goToStep(index)}
            >
              {/* Step Circle */}
              <div className="relative">
                {activeStep === index && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-indigo-500/40" />
                )}

                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 relative z-10 ${
                    activeStep === index
                      ? "bg-gradient-to-r from-indigo-500 to-blue-500 shadow-[0_0_30px_rgba(108,99,255,0.6)] scale-110"
                      : activeStep > index
                        ? "bg-green-500/20 border-2 border-green-500/50"
                        : "glass-card border-2 border-indigo-500/50 group-hover:border-indigo-400"
                  }`}
                >
                  {activeStep > index ? (
                    <span className="material-symbols-outlined">check</span>
                  ) : (
                    <span
                      className={`transition-all duration-500 ${
                        activeStep === index
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      {item.step}
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <div className="flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-indigo-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  <h4
                    className={`text-xl font-bold transition-all duration-500 font-['Space_Grotesk'] ${
                      activeStep === index
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          75%,
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default UserJourney;
