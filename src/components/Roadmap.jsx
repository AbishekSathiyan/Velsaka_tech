import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 01',
      title: 'Foundation',
      items: ['Architecture Setup', 'Security Protocol', 'Base UI Kit'],
      active: true,
      completed: true
    },
    {
      phase: 'Phase 02',
      title: 'Core Pages',
      items: ['Main Dashboard', 'User Accounts', 'Real-time Feed'],
      active: true,
      completed: false
    },
    {
      phase: 'Phase 03',
      title: 'CMS Integration',
      items: ['Content API', 'Dynamic Routing', 'Media Manager'],
      active: false,
      completed: false
    },
    {
      phase: 'Phase 04',
      title: 'Optimization',
      items: ['Global Edge', 'Performance Audit', 'AI Insights'],
      active: false,
      completed: false
    }
  ];

  return (
    <section className="px-8 max-w-[1440px] mx-auto py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-['Space_Grotesk']">
        Product Roadmap
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => (
          <div 
            key={index} 
            className={`glass-card p-6 rounded-xl border-l-4 transition-all duration-300 cursor-pointer group hover:-translate-y-2 ${
              phase.active 
                ? 'border-l-indigo-500 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] hover:border-l-indigo-400' 
                : 'border-l-slate-700 hover:border-l-slate-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]'
            }`}
          >
            {/* Phase Badge & Status */}
            <div className="flex items-center justify-between mb-3">
              <span className={`font-bold text-xs uppercase tracking-widest ${
                phase.active ? 'text-indigo-400' : 'text-slate-500'
              }`}>
                {phase.phase}
              </span>
              {phase.completed && (
                <CheckCircleIcon 
                  className="text-green-400"
                  style={{ fontSize: '18px' }}
                />
              )}
            </div>
            
            {/* Title */}
            <h4 className="font-bold text-white text-xl mb-4 group-hover:text-indigo-300 transition-colors duration-300 font-['Space_Grotesk']">
              {phase.title}
            </h4>
            
            {/* Items List */}
            <ul className="space-y-2 mb-4">
              {phase.items.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center gap-2 text-sm"
                >
                  <ArrowForwardIcon 
                    className={`${
                      phase.active ? 'text-indigo-400' : 'text-slate-600'
                    } group-hover:translate-x-1 transition-transform duration-300`}
                    style={{ fontSize: '14px' }}
                  />
                  <span className={`${
                    phase.active ? 'text-slate-200' : 'text-slate-500'
                  } group-hover:text-slate-300 transition-colors duration-300`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Progress Indicator */}
            <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  phase.completed 
                    ? 'bg-gradient-to-r from-green-400 to-green-500 w-full' 
                    : phase.active 
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-500 w-1/3' 
                      : 'bg-slate-700 w-0'
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;