import React, { useEffect, useState } from 'react';

const SystemHierarchy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  const modules = [
    { title: 'Product Hub', subtitle: 'Inventory / Sales' },
    { title: 'User Console', subtitle: 'Profiles / Settings' },
    { title: 'Analytics Engine', subtitle: 'Metrics / Insights' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('system-hierarchy');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeouts = modules.map((_, index) => {
        return setTimeout(() => {
          setAnimatedItems(prev => [...prev, index]);
        }, index * 200);
      });
      return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }
  }, [isVisible]);

  return (
    <section 
      id="system-hierarchy" 
      className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 overflow-visible"
    >
      {/* Animated Background Glow - No overflow issues */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-indigo-500/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-['Space_Grotesk']">
          System Hierarchy
        </h2>
        
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Main Gateway */}
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <div className="glass-card px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full border border-indigo-500/50 shadow-[0_0_15px_rgba(108,99,255,0.2)] hover:scale-105 hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                Main Gateway
              </span>
            </div>
          </div>
          
          {/* Animated Vertical Line */}
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="w-0.5 h-8 sm:h-10 md:h-12 lg:h-14 bg-gradient-to-b from-indigo-500 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full animate-ping" />
          </div>
          
          {/* Sub Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center transition-all duration-700 ${
                  animatedItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Module Box */}
                <div className="relative w-full">
                  <div className="glass-card px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-xl border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)] transition-all duration-300 hover:-translate-y-1 text-center">
                    <span className="font-semibold text-white text-sm sm:text-base md:text-lg">
                      {module.title}
                    </span>
                  </div>
                </div>
                
                {/* Vertical Line */}
                <div className="relative">
                  <div className="w-0.5 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-indigo-500/50 to-transparent my-2 sm:my-3"></div>
                  {animatedItems.includes(index) && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                  )}
                </div>
                
                {/* Subtitle */}
                <div className="text-xs sm:text-sm text-slate-400 text-center">
                  {module.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations without scrollbar issues */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>  
  );
};

export default SystemHierarchy;