import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const processSteps = [
    {
      step: "1",
      icon: "forum",
      title: "Discussion",
      desc: "Initial consultation to understand goals, target audience, and project scope.",
      fullDesc:
        "We dive deep into your business requirements, analyze market needs, and define clear project objectives.",
    },
    {
      step: "2",
      icon: "architecture",
      title: "Planning",
      desc: "Architecture design, tech stack selection, and detailed project roadmapping.",
      fullDesc:
        "Our architects design scalable system architecture, choose optimal technologies, and create detailed sprint plans.",
    },
    {
      step: "3",
      icon: "data_object",
      title: "Development",
      desc: "Agile engineering sprints with continuous testing and quality assurance.",
      fullDesc:
        "We build in iterative sprints, conduct regular code reviews, and maintain high testing standards throughout.",
    },
    {
      step: "4",
      icon: "rocket_launch",
      title: "Deployment",
      desc: "Final optimizations and launch on production-ready cloud environments.",
      fullDesc:
        "We ensure smooth deployment, monitor performance metrics, and provide ongoing maintenance support.",
    },
  ];

  const projects = [
    {
      title: "ChatBot-Aura Mind",
      category: "AI/ML",
      tech: ["React", "API", "Puter.JS", "Tailwind CSS"],
      description: "An intelligent AI-powered chatbot web application that provides real-time conversational responses with external JavaScript API integration.",
      link: "https://abisheksathiyan-portfolio-front-end.vercel.app/",
      featured: true
    },
    {
      title: "AS Ecommerce",
      category: "Full Stack",
      tech: ["MongoDB", "Express", "React", "Node.js", "Firebase", "Razorpay"],
      description: "A modern full-stack eCommerce platform with Firebase Authentication, Razorpay payments, and admin dashboard.",
      link: "https://abisheksathiyan-portfolio-front-end.vercel.app/",
      featured: true
    },
    {
      title: "Methalodai Village Community",
      category: "Social Platform",
      tech: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
      description: "Instagram-like community platform for village communication with posts, follows, likes, and comments.",
      link: "https://abisheksathiyan-portfolio-front-end.vercel.app/",
      featured: false
    },
    {
      title: "Campus Lost & Found",
      category: "Utility App",
      tech: ["MongoDB", "Express", "React", "Node.js", "Nodemailer"],
      description: "Campus MERN app for reporting and recovering lost items with image uploads and email notifications.",
      link: "https://abisheksathiyan-portfolio-front-end.vercel.app/",
      featured: false
    },
    {
      title: "FileShare MERN App",
      category: "File Management",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Multer"],
      description: "Secure file-sharing platform with JWT authentication, file preview, and unique sharing links.",
      link: "https://abisheksathiyan-portfolio-front-end.vercel.app/",
      featured: false
    },
    {
      title: "Weather Dashboard",
      category: "API Integration",
      tech: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
      description: "Sleek weather app with real-time temperature, humidity, and conditions using OpenWeatherMap API.",
      link: "https://abisheksathiyan-portfolio-front-end.vercel.app/",
      featured: false
    },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prevStep) => (prevStep + 1) % processSteps.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, processSteps.length]);

  const goToStep = (index) => {
    setActiveStep(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % processSteps.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  const prevStep = () => {
    setActiveStep(
      (prev) => (prev - 1 + processSteps.length) % processSteps.length,
    );
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 5000);
  };

  return (
    <div className="bg-[#0B1120] min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto text-center">
            <span className="text-xs sm:text-sm tracking-widest text-indigo-400 mb-3 sm:mb-4 block font-semibold">
              ENGINEERING THE FUTURE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-['Space_Grotesk']">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-[#c7c4d8] mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              We deliver high-performance digital solutions tailored for the
              enterprise of tomorrow. From AI integration to cloud
              infrastructure, we transform complex challenges into competitive
              advantages.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] text-white px-8 sm:px-10 py-3 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all duration-300 active:scale-95"
            >
              Get a Free Consultation
            </button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "code",
                title: "Web Development",
                desc: "Scalable, high-performance web applications built with modern architectures.",
                points: ["React & Next.js Expertise", "Enterprise Scalability"],
              },
              {
                icon: "smart_toy",
                title: "AI/ML Solutions",
                desc: "Integrating machine learning models to automate and optimize business processes.",
                points: ["Predictive Analytics", "LLM Fine-tuning"],
              },
              {
                icon: "draw",
                title: "UI/UX Design",
                desc: "Precision-crafted interfaces designed for maximum user engagement and retention.",
                points: ["User-Centric Design", "Interactive Prototyping"],
              },
              {
                icon: "smartphone",
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile solutions for iOS and Android devices.",
                points: [
                  "Flutter & React Native",
                  "Offline-First Architecture",
                ],
              },
              {
                icon: "dns",
                title: "Backend Development",
                desc: "Robust server-side logic and database architecture for complex ecosystems.",
                points: ["Microservices Design", "API Orchestration"],
              },
              {
                icon: "cloud_done",
                title: "Cloud & Deployment",
                desc: "Seamless infrastructure management using AWS, Azure, and Google Cloud.",
                points: ["DevOps Automation", "Serverless Frameworks"],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:shadow-[0_0_25px_rgba(108,99,255,0.3)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                  <span className="material-symbols-outlined text-2xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk']">
                  {service.title}
                </h3>
                <p className="text-[#c7c4d8] mb-4 flex-grow text-sm sm:text-base">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm sm:text-base text-[#e4e1ee]"
                    >
                      <span className="material-symbols-outlined text-indigo-400 text-base">
                        check_circle
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full py-2 border border-white/10 rounded-lg text-[#e4e1ee] hover:bg-white/5 transition-colors font-medium"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section with Animated Timeline */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#1b1b24]/30">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-['Space_Grotesk']">
                Our Development Process
              </h2>
              <p className="text-[#c7c4d8] text-base sm:text-lg">
                A systematic approach to engineering excellence.
              </p>
            </div>

            {/* Animated Process Flow - Desktop */}
            <div className="relative px-4 sm:px-8">
              <div className="hidden lg:block relative">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-[100px] transition-all duration-1000 ease-in-out"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${(activeStep - 1.5) * 80}px)`,
                    }}
                  />
                </div>

                {/* Connecting Line */}
                <div className="absolute top-20 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-1000 ease-in-out"
                    style={{
                      width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                    }}
                  />
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center text-center flex-1 cursor-pointer transition-all duration-500 ${
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
                          className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 relative z-10 ${
                            activeStep === index
                              ? "bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] shadow-[0_0_30px_rgba(108,99,255,0.6)] scale-110"
                              : activeStep > index
                                ? "bg-green-500/20 border-2 border-green-500/50"
                                : "bg-white/5 border-2 border-white/20 hover:border-indigo-500/50"
                          }`}
                        >
                          {activeStep > index ? (
                            <span className="material-symbols-outlined text-2xl text-green-400">
                              check
                            </span>
                          ) : (
                            <span className="material-symbols-outlined text-3xl text-white">
                              {step.icon}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-semibold mb-2 font-['Space_Grotesk'] transition-all duration-500">
                        <span
                          className={
                            activeStep === index
                              ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400"
                              : "text-white"
                          }
                        >
                          {step.title}
                        </span>
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-[#c7c4d8] max-w-[200px]">
                        {step.desc}
                      </p>

                      {/* Active Step Indicator */}
                      {activeStep === index && (
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                          <span className="material-symbols-outlined text-indigo-400">
                            arrow_downward
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Active Step Details Panel */}
                <div className="mt-16 p-6 bg-white/5 border border-indigo-500/30 rounded-xl backdrop-blur-lg animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">
                        {processSteps[activeStep].icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
                        {processSteps[activeStep].title} Phase
                      </h4>
                      <p className="text-[#c7c4d8] text-sm leading-relaxed">
                        {processSteps[activeStep].fullDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prevStep}
                    className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center hover:border-indigo-500/50 hover:scale-110 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-indigo-400">chevron_left</span>
                  </button>

                  <button
                    onClick={nextStep}
                    className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center hover:border-indigo-500/50 hover:scale-110 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-indigo-400">chevron_right</span>
                  </button>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-indigo-400 text-sm">
                      {isPlaying ? "pause" : "play_arrow"}
                    </span>
                  </button>
                </div>

                {/* Auto-play indicator */}
                {isPlaying && (
                  <div className="text-center mt-4">
                    <div className="inline-flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Auto-playing process flow
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile/Tablet View - Stacked Layout */}
              <div className="lg:hidden space-y-6">
                {processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`bg-white/5 backdrop-blur-xl border p-6 rounded-xl transition-all duration-300 ${
                      activeStep === idx
                        ? "border-indigo-500/50 shadow-[0_0_20px_rgba(108,99,255,0.2)]"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          activeStep > idx
                            ? "bg-green-500/20 border-2 border-green-500/50"
                            : activeStep === idx
                              ? "bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] shadow-[0_0_20px_rgba(108,99,255,0.4)]"
                              : "bg-white/5 border-2 border-white/20"
                        }`}
                      >
                        {activeStep > idx ? (
                          <span className="material-symbols-outlined text-green-400">
                            check
                          </span>
                        ) : (
                          <span className="material-symbols-outlined text-white text-xl">
                            {step.icon}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white font-['Space_Grotesk']">
                          {step.title}
                        </h4>
                        <p className="text-xs text-indigo-400">
                          Step {step.step} of 4
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#c7c4d8] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-['Space_Grotesk']">
                Why Choose Velsaka Tech
              </h2>
              <p className="text-[#c7c4d8] mb-8 sm:mb-10 text-base sm:text-lg">
                We don't just build software; we build infrastructure that
                sustains growth and fuels innovation. Our engineering standards
                are among the highest in the industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "security",
                    title: "Advanced Security",
                    desc: "Advanced security protocols in every line of code.",
                  },
                  {
                    icon: "bolt",
                    title: "Hyper Fast",
                    desc: "Optimized for sub-second response times.",
                  },
                  {
                    icon: "hub",
                    title: "Scalable Systems",
                    desc: "Infrastructure that grows with your user base.",
                  },
                  {
                    icon: "support_agent",
                    title: "Support",
                    desc: "Direct access to our team.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4">
                    <div className="text-indigo-400">
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">
                        {item.title}
                      </h5>
                      <p className="text-[#c7c4d8] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] blur-3xl opacity-20 rounded-full" />
              <img
                alt="High-tech engineering lab"
                className="relative rounded-lg border border-white/10 shadow-2xl w-full"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              />
            </div>
          </div>
        </section>

        {/* Projects Showcase - Replaced Testimonials */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#1b1b24]/30">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-['Space_Grotesk']">
                Our Projects
              </h2>
              <p className="text-[#c7c4d8] text-base sm:text-lg">
                Showcasing our expertise through real-world applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`bg-white/5 backdrop-blur-xl border p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(108,99,255,0.2)] hover:-translate-y-1 group ${
                    project.featured ? "border-indigo-500/30" : "border-white/10"
                  }`}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        Featured Project
                      </span>
                    </div>
                  )}
                  
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="text-xs text-indigo-400 font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#c7c4d8] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* View Button */}
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="w-full py-2 border border-white/10 rounded-lg text-[#e4e1ee] hover:bg-white/5 hover:border-indigo-500/30 transition-all duration-300 font-medium flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    <span>View Project</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
            
            {/* View More Projects Link */}
            <div className="text-center mt-12">
              <button
                onClick={() => window.open("https://abisheksathiyan-portfolio-front-end.vercel.app/", "_blank")}
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium group"
              >
                <span>View All Projects on Portfolio</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  launch
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-[1440px] mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-xl relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-['Space_Grotesk']">
                Ready to Scale Your Digital Future?
              </h2>
              <p className="text-[#c7c4d8] mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg px-4">
                Let's build something extraordinary together. Our team is ready
                to help you navigate the complexities of modern engineering.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] text-white px-8 sm:px-12 py-3 rounded-full font-semibold hover:shadow-[0_0_40px_rgba(108,99,255,0.5)] transition-all duration-300 active:scale-95"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;