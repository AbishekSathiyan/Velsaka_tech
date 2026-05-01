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
      { threshold: 0.2 }
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
    <section id="system-hierarchy" className="px-4 sm:px-8 max-w-[1440px] mx-auto py-12 md:py-20 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16 font-['Space_Grotesk'] animate-fade-in-up">
        System Hierarchy
      </h2>
      
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Main Gateway */}
        <div className={`transform transition-all duration-700 ${
          isVisible ? 'animate-float-in opacity-100' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="glass-card px-6 sm:px-8 py-3 rounded-full border border-indigo-500/50 shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:scale-110 hover:shadow-[0_0_35px_rgba(108,99,255,0.4)] transition-all duration-300 cursor-pointer group">
            <span className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Main Gateway
              <span className="material-symbols-outlined text-indigo-400 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                hub
              </span>
            </span>
          </div>
        </div>
        
        {/* Animated Vertical Line */}
        <div className={`relative transition-all duration-700 delay-300 ${
          isVisible ? 'animate-slide-down opacity-100' : 'opacity-0 scale-y-0'
        }`}>
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
          {/* Pulsing dot on line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-ping" />
        </div>
        
        {/* Sub Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 w-full max-w-3xl">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ${
                animatedItems.includes(index) 
                  ? 'animate-slide-up opacity-100' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Module Box */}
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="glass-card px-4 sm:px-6 py-3 rounded-lg border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)] transition-all duration-300 hover:-translate-y-2 relative z-10">
                  <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300 text-sm sm:text-base">
                    {module.title}
                  </span>
                </div>
              </div>
              
              {/* Animated Vertical Line */}
              <div className="relative">
                <div className="w-px h-6 bg-gradient-to-b from-indigo-500/50 to-transparent my-2"></div>
                {animatedItems.includes(index) && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                )}
              </div>
              
              {/* Subtitle */}
              <div className="text-xs text-slate-400 group-hover:text-indigo-400 transition-all duration-300 group-hover:translate-x-0.5">
                {module.subtitle}
              </div>

              {/* Decorative icon that appears on hover */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                <span className="material-symbols-outlined text-indigo-400 text-sm">
                  arrow_downward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }

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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float-in {
          animation: float-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default SystemHierarchy;