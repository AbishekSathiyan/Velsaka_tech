import React from 'react';
import { RocketLaunch, People, CenterFocusStrong, BarChart } from '@mui/icons-material';

const FeatureCards = () => {
  const features = [
    {
      Icon: RocketLaunch,
      title: 'Core Purpose',
      description: 'Revolutionizing the way enterprises interact with cloud-native infrastructure.'
    },
    {
      Icon: People,
      title: 'Target Audience',
      description: 'Built for tech-forward teams and visionary digital architects.'
    },
    {
      Icon: CenterFocusStrong,
      title: 'Key Goals',
      description: '100% uptime, zero-latency integration, and seamless user adoption.'
    },
    {
      Icon: BarChart,
      title: 'Success Metrics',
      description: 'Quantifiable growth through advanced data analytics and reporting.'
    }
  ];

  return (
    <section className="px-8 max-w-[1440px] mx-auto py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="glass-card p-6 rounded-lg glow-border transition-all space-y-4 hover:translate-y-[-5px] cursor-pointer group">
            {/* Icon container with background and glow */}
            <div className="w-14 h-14 flex items-center justify-center bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 group-hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all duration-300">
              <feature.Icon 
                className="text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                style={{ fontSize: '32px' }}
              />
            </div>
            <h3 className="text-2xl font-semibold text-white font-['Space_Grotesk'] group-hover:text-indigo-300 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;