import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DevicesIcon from '@mui/icons-material/Devices';
import BoltIcon from '@mui/icons-material/Bolt';
import SecurityIcon from '@mui/icons-material/Security';

const CoreFeatures = () => {
  const features = [
    { num: '01', title: 'Dynamic Homepage', desc: 'High-conversion landing pages with real-time data streaming.' },
    { num: '02', title: 'Unified Dashboard', desc: 'Control center for all your integrated VELSAKA modules.' },
    { num: '03', title: 'Integrated CMS', desc: 'Headless content management built for scale and speed.' }
  ];

  const techs = [
    { Icon: SearchIcon, label: 'SEO Optimized' },
    { Icon: DevicesIcon, label: 'Responsive' },
    { Icon: BoltIcon, label: 'Lighthouse 100' },
    { Icon: SecurityIcon, label: 'Hardened Security' }
  ];

  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto py-8 sm:py-10 md:py-12 lg:py-16 bg-slate-900/20 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {/* Left Column - Core Site Features */}
        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] text-center md:text-left">
            Core Site Features
          </h2>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 group cursor-pointer hover:translate-x-1 sm:hover:translate-x-2 transition-transform duration-300">
                <span className="text-indigo-500 text-2xl sm:text-3xl md:text-4xl font-bold opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  {feature.num}
                </span>
                <div>
                  <h4 className="font-bold text-white text-lg sm:text-xl group-hover:text-indigo-300 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Technical Excellence */}
        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] text-center md:text-left">
            Technical Excellence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {techs.map((tech, index) => (
              <div key={index} className="glass-card p-3 sm:p-4 rounded-lg flex items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 cursor-pointer group border border-white/10 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-indigo-500/10 rounded-lg border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                  <tech.Icon 
                    className="text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontSize: '18px' }}
                  />
                </div>
                <span className="font-bold text-xs sm:text-sm text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;