// src/Pages/UnderDevelopment.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/VelSAKA_Logo.jpeg";

export default function UnderDevelopment() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);
  const [quantumParticles, setQuantumParticles] = useState([]);
  const [dnaNodes, setDnaNodes] = useState([]);
  const [vortexAngle, setVortexAngle] = useState(0);
  const [blackHoleScale, setBlackHoleScale] = useState(1);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Quantum Particle System
  useEffect(() => {
    const particles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      angle: (Math.PI * 2 * i) / 60,
      radius: Math.random() * 100 + 50,
      speed: Math.random() * 0.5 + 0.3,
      size: Math.random() * 3 + 1,
      color: ['#8b5cf6', '#06b6d4', '#ec4899', '#f59e0b', '#10b981'][Math.floor(Math.random() * 5)],
      z: Math.random() * 200 - 100,
      rotationSpeed: Math.random() * 2 + 1,
      oscillationSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));
    setQuantumParticles(particles);
  }, []);

  // DNA Helix Nodes
  useEffect(() => {
    const nodes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      y: (i / 30) * 100,
      phase: (i / 30) * Math.PI * 4,
      color: i % 2 === 0 ? '#8b5cf6' : '#06b6d4',
      size: i % 3 === 0 ? 4 : 2,
    }));
    setDnaNodes(nodes);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setCounter(prev => prev + 1);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Vortex animation
  useEffect(() => {
    const interval = setInterval(() => {
      setVortexAngle(prev => (prev + 0.5) % 360);
      setBlackHoleScale(prev => 1 + Math.sin(Date.now() / 2000) * 0.1);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // 3D Cube vertices
  const cubeVertices = [
    [-40, -40, -40], [40, -40, -40], [40, 40, -40], [-40, 40, -40],
    [-40, -40, 40], [40, -40, 40], [40, 40, 40], [-40, 40, 40]
  ];

  const cubeEdges = [
    [0,1], [1,2], [2,3], [3,0],
    [4,5], [5,6], [6,7], [7,4],
    [0,4], [1,5], [2,6], [3,7]
  ];

  // Animated icons with complex paths
  const animatedIcons = [
    {
      draw: (progress) => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Pulsing star */}
          <motion.path
            d="M50 10 L58 40 L90 40 L63 60 L72 90 L50 72 L28 90 L37 60 L10 40 L42 40 Z"
            fill="none"
            stroke="url(#starGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ 
              pathLength: 1,
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              pathLength: { duration: 2, repeat: Infinity },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          />
          {/* Orbiting dots */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.circle
              key={i}
              r="3"
              fill="#8b5cf6"
              initial={{ cx: 50, cy: 50 }}
              animate={{
                cx: 50 + Math.cos((angle + i * 30) * Math.PI / 180) * 35,
                cy: 50 + Math.sin((angle + i * 30) * Math.PI / 180) * 35,
                opacity: [0.3, 1, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>
      )
    },
    {
      draw: (progress) => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Spinning galaxy */}
          {[0, 1, 2, 3].map((arm) => (
            <motion.path
              key={arm}
              d={`M50 50 Q${60 + arm * 10} 20, ${70 + arm * 5} 50 T50 80`}
              fill="none"
              stroke={`hsl(${260 + arm * 30}, 80%, 60%)`}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{
                rotate: [0, 360],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: arm * 0.5 }}
            />
          ))}
          <motion.circle
            cx="50" cy="50" r="8"
            fill="#8b5cf6"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>
      )
    },
    {
      draw: (progress) => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Lightning bolt */}
          <motion.path
            d="M55 10 L35 45 L50 45 L30 90 L65 50 L50 50 L70 10 Z"
            fill="none"
            stroke="url(#lightningGradient)"
            strokeWidth="3"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Electricity particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.circle
              key={i}
              r="2"
              fill="#f59e0b"
              initial={{ cx: 50, cy: 50 }}
              animate={{
                cx: [50, 30 + Math.random() * 40, 50],
                cy: [10, 90, 10],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </svg>
      )
    },
    {
      draw: (progress) => (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Atom model */}
          <motion.ellipse
            cx="50" cy="50" rx="40" ry="15"
            fill="none" stroke="#8b5cf6" strokeWidth="2"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 50%" }}
          />
          <motion.ellipse
            cx="50" cy="50" rx="40" ry="15"
            fill="none" stroke="#06b6d4" strokeWidth="2"
            animate={{ rotate: [120, 480] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 50%" }}
          />
          <motion.ellipse
            cx="50" cy="50" rx="40" ry="15"
            fill="none" stroke="#ec4899" strokeWidth="2"
            animate={{ rotate: [240, 600] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 50%" }}
          />
          <motion.circle
            cx="50" cy="50" r="10"
            fill="#a855f7"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      )
    },
  ];

  // Floating 3D shapes
  const shapes3D = [
    { type: 'cube', size: 40, color: '#8b5cf6', speed: 12 },
    { type: 'pyramid', size: 35, color: '#06b6d4', speed: 15 },
    { type: 'octahedron', size: 30, color: '#ec4899', speed: 10 },
    { type: 'torus', size: 45, color: '#f59e0b', speed: 18 },
    { type: 'cone', size: 38, color: '#10b981', speed: 14 },
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#000000] flex items-center justify-center p-4 relative overflow-hidden cursor-none"
    >
      {/* BLACK HOLE / VORTEX CENTER */}
      <div className="fixed top-1/2 left-1/2 pointer-events-none z-0" style={{ transform: 'translate(-50%, -50%)' }}>
        {/* Accretion disk */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            background: 'conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.2), transparent, rgba(6, 182, 212, 0.2), transparent)',
            marginLeft: -200,
            marginTop: -200,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            background: 'conic-gradient(from 180deg, transparent, rgba(236, 72, 153, 0.2), transparent, rgba(245, 158, 11, 0.2), transparent)',
            marginLeft: -150,
            marginTop: -150,
          }}
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        {/* Event horizon */}
        <motion.div
          className="absolute rounded-full bg-black"
          style={{
            width: 150,
            height: 150,
            marginLeft: -75,
            marginTop: -75,
            boxShadow: '0 0 80px 30px rgba(139, 92, 246, 0.2)',
          }}
          animate={{ scale: blackHoleScale }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* DNA HELIX */}
      <div className="fixed left-8 top-0 h-full pointer-events-none z-0" style={{ width: 60 }}>
        <motion.div
          animate={{ rotateY: vortexAngle }}
          transition={{ duration: 0.1 }}
          className="relative h-full preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {dnaNodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute rounded-full"
              style={{
                left: `${50 + Math.sin(node.phase + vortexAngle * 0.05) * 20}%`,
                top: `${node.y}%`,
                width: node.size * 2,
                height: node.size * 2,
                backgroundColor: node.color,
                boxShadow: `0 0 ${node.size * 5}px ${node.color}`,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: node.id * 0.05 }}
            />
          ))}
          {/* DNA strands */}
          <svg className="absolute inset-0 w-full h-full">
            {dnaNodes.slice(0, -1).map((node, i) => (
              <motion.line
                key={i}
                x1={`${50 + Math.sin(node.phase + vortexAngle * 0.05) * 20}%`}
                y1={`${node.y}%`}
                x2={`${50 + Math.sin(dnaNodes[i + 1].phase + vortexAngle * 0.05) * 20}%`}
                y2={`${dnaNodes[i + 1].y}%`}
                stroke={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
                strokeWidth="1"
                opacity="0.5"
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* QUANTUM PARTICLES */}
      {quantumParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed pointer-events-none z-0 rounded-full"
          style={{
            width: particle.size * 3,
            height: particle.size * 3,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
          }}
          animate={{
            x: [
              Math.cos(particle.angle) * particle.radius,
              Math.cos(particle.angle + Math.PI) * particle.radius,
              Math.cos(particle.angle) * particle.radius,
            ],
            y: [
              Math.sin(particle.angle) * particle.radius,
              Math.sin(particle.angle + Math.PI) * particle.radius,
              Math.sin(particle.angle) * particle.radius,
            ],
            z: particle.z,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.speed * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.phase,
          }}
        />
      ))}

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-12 h-12 pointer-events-none z-[999]"
        animate={{ 
          x: mousePos.x - 24, 
          y: mousePos.y - 24,
        }}
        transition={{ 
          x: { type: "spring", damping: 10, stiffness: 100 },
          y: { type: "spring", damping: 10, stiffness: 100 },
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full border-2 border-violet-400"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
        >
          <motion.div 
            className="absolute inset-2 rounded-full bg-violet-500/50"
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.div>
        {/* Cursor trail */}
        <motion.div
          className="absolute inset-0 rounded-full bg-violet-400/20 blur-xl"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* SVG Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content */}
      <div className="max-w-6xl w-full relative z-10">
        {/* Logo Section */}
        <motion.div className="text-center mb-8">
          <motion.div
            className="inline-block relative"
            animate={{
              rotateY: [0, 360],
              y: [0, -20, 0],
            }}
            transition={{
              rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ perspective: 1000 }}
          >
            <img 
              src={Logo} 
              alt="VelSAKA" 
              className="h-16 sm:h-20 w-auto relative z-10 rounded-xl"
            />
          </motion.div>
        </motion.div>

        {/* Title with Morphing Effect */}
        <motion.div className="text-center mb-8">
          <motion.h1 
            className="text-7xl sm:text-9xl font-black relative inline-block"
            animate={{
              scale: [1, 1.05, 1],
              filter: [
                'drop-shadow(0 0 20px rgba(139,92,246,0.5))',
                'drop-shadow(0 0 40px rgba(6,182,212,0.5))',
                'drop-shadow(0 0 20px rgba(139,92,246,0.5))',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              VELSAKA
            </span>
          </motion.h1>
        </motion.div>

        {/* Animated SVG Icons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {animatedIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ 
                scale: 1.2,
                rotateY: 360,
                transition: { duration: 0.8 }
              }}
              className="relative preserve-3d cursor-pointer"
              style={{ transformStyle: "preserve-3d", minHeight: 200 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex items-center justify-center overflow-hidden group">
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `repeating-conic-gradient(from 0deg, #8b5cf6 0deg 10deg, transparent 10deg 20deg)`,
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10 w-24 h-24">
                  {icon.draw(1)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Wireframe Shapes */}
        <div className="hidden lg:flex justify-center gap-8 mb-12">
          {shapes3D.map((shape, index) => (
            <motion.div
              key={index}
              className="preserve-3d"
              style={{ 
                transformStyle: "preserve-3d",
                width: shape.size * 3,
                height: shape.size * 3,
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                y: [0, -30, 0],
              }}
              transition={{
                duration: shape.speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg viewBox="-50 -50 100 100" className="w-full h-full">
                {/* 3D Cube wireframe */}
                {shape.type === 'cube' && cubeEdges.map(([start, end], i) => (
                  <motion.line
                    key={i}
                    x1={cubeVertices[start][0]}
                    y1={cubeVertices[start][1]}
                    x2={cubeVertices[end][0]}
                    y2={cubeVertices[end][1]}
                    stroke={shape.color}
                    strokeWidth="2"
                    opacity="0.6"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Counter with Matrix Effect */}
        <motion.div className="text-center mb-8">
          <div className="inline-flex gap-2 text-5xl sm:text-6xl font-mono font-black">
            {String(counter).padStart(5, '0').split('').map((digit, i) => (
              <motion.span
                key={i}
                className="inline-block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              >
                {digit}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/"
              className="relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black rounded-2xl inline-flex items-center gap-3 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span>🏠</span>
              <span className="relative z-10">GO HOME</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="relative px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-violet-500/50 text-white font-black rounded-2xl inline-flex items-center gap-3">
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-violet-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
              <span className="relative z-10">NOTIFY ME</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        * {
          cursor: none !important;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}