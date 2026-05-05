import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PaletteIcon from '@mui/icons-material/Palette';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PsychologyIcon from '@mui/icons-material/Psychology';
import KeyIcon from '@mui/icons-material/Key';

const TechStack = () => {
  const technologies = [
    { name: 'React', Icon: CodeIcon },
    { name: 'Next.js', Icon: JavascriptIcon },
    { name: 'Tailwind', Icon: PaletteIcon },
    { name: 'Node.js', Icon: SettingsInputComponentIcon },
    { name: 'MongoDB', Icon: StorageIcon },
    { name: 'Vercel', Icon: CloudUploadIcon },
    { name: 'AI/ML', Icon: PsychologyIcon },
    { name: 'AI API Keys', Icon: KeyIcon }
  ];

  // Duplicate array for seamless infinite scroll
  const infiniteTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto py-8 sm:py-10 md:py-12 lg:py-16 overflow-x-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-7 md:mb-8 font-['Space_Grotesk'] text-center sm:text-left">
        Modern Tech Stack
      </h2>
      
      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          
          @media (max-width: 640px) {
            .animate-scroll {
              animation-duration: 20s;
            }
          }
        `}</style>
        
        <div className="flex gap-3 sm:gap-4 animate-scroll">
          {infiniteTech.map((tech, index) => (
            <div 
              key={index} 
              className="glass-card p-2 sm:p-3 md:p-4 rounded-xl flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 transition-all duration-300 cursor-pointer group border border-white/10 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] min-w-[90px] sm:min-w-[110px] md:min-w-[130px] lg:min-w-[140px] flex-shrink-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 group-hover:shadow-[0_0_12px_rgba(108,99,255,0.2)] transition-all duration-300">
                <tech.Icon 
                  className="text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 transition-all duration-300"
                  style={{ fontSize: '20px' }}
                />
              </div>
              <span className="font-semibold text-[10px] sm:text-xs md:text-sm text-white group-hover:text-indigo-300 transition-colors duration-300 text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;