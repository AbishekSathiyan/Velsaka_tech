import React from "react";
import { useNavigate } from "react-router-dom";
import FounderImg from "../assets/AbishekSathiyan.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "Abishek Sathiyan",
      role: "Founder, Chief Architect, Designer & Developer",
      img: FounderImg,
      active: true,
    },
    {
      name: "Position Open",
      role: "AI Developer ",
      img: null,
      active: false,
      status: "Coming Soon",
    },
    {
      name: "Position Open",
      role: "Machine Learning Engineer",
      img: null,
      active: false,
      status: "Coming Soon",
    },
  ];

  const values = [
    {
      icon: "verified",
      title: "Integrity",
      desc: "Core principle driving excellence.",
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      desc: "Pushing boundaries every day.",
    },
    {
      icon: "target",
      title: "Precision",
      desc: "Engineering with exactitude.",
    },
    {
      icon: "language",
      title: "Cosmic Depth",
      desc: "Thinking beyond horizons.",
    },
  ];

  const stats = [
    {
      icon: "business",
      value: "1",
      suffix: "",
      label: "Enterprise Client",
      description: "Trusted partner for innovative solutions",
    },
    {
      icon: "code",
      value: "15+",
      suffix: "",
      label: "Self Projects",
      description: "Full-stack applications & AI integrations",
    },
    {
      icon: "star",
      value: "5.0",
      suffix: "",
      label: "Client Rating",
      description: "Based on project deliverables",
    },
    {
      icon: "psychology",
      value: "10+",
      suffix: "",
      label: "Technologies Mastered",
      description: "MERN, AI, Cloud & more",
    },
  ];

  return (
    <div className="bg-[#0B1120] text-[#e4e1ee] font-['Manrope']">
      {/* HEADER */}
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[700px] flex items-center justify-center px-4 sm:px-8 py-16 text-center">
          <div className="relative z-10">
            <span className="text-indigo-400 uppercase text-sm sm:text-base tracking-widest font-semibold">
              Our Vision
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-['Space_Grotesk']">
              Driven by Innovation, <br />
              Defined by Excellence
            </h1>

            <p className="text-[#c7c4d8] max-w-2xl mx-auto mb-8 text-base sm:text-lg">
              Empowering humanity through next-generation technology.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => navigate("/services")}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] rounded-xl font-bold text-white hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all duration-300 active:scale-95 cursor-pointer font-['Space_Grotesk']"
              >
                Explore Solutions
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://abisheksathiyan-portfolio-front-end.vercel.app/",
                    "_blank",
                  )
                }
                className="px-6 sm:px-8 py-3 border border-white/20 rounded-xl font-bold text-white hover:bg-white/5 transition-all duration-300 cursor-pointer font-['Space_Grotesk']"
              >
                View Our Work
              </button>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-['Space_Grotesk']">
              Our Story
            </h2>

            <p className="text-[#c7c4d8] mb-4 leading-relaxed">
              Founded at the intersection of orbital mechanics and data science,
              <span className="text-indigo-400 font-semibold">
                {" "}
                VELSAKA TECH
              </span>{" "}
              emerged to redefine deep-tech ecosystems.
            </p>

            <p className="text-[#c7c4d8] mb-4 leading-relaxed">
              From prototype to powerhouse — technology should be vast yet
              accessible. We believe that complexity shouldn't come at the cost
              of usability.
            </p>

            <p className="text-[#c7c4d8] leading-relaxed">
              What started as a vision to bridge advanced technology with
              human-centric design has grown into a journey of continuous
              learning and building innovative solutions.
            </p>
          </div>

          <div className="md:col-span-5 rounded-xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              alt="Story"
            />
          </div>
        </section>

        {/* VALUES */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 font-['Space_Grotesk']">
            The VELSAKA Principles
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(108,99,255,0.1)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 mx-auto">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#c7c4d8] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-[#0e0d16] py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 font-['Space_Grotesk']">
              Architects of Tomorrow
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative bg-white/5">
                    {member.active ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
                        <div className="text-center">
                          <span className="material-symbols-outlined text-6xl text-indigo-400 mb-4">
                            hourglass_empty
                          </span>
                          <p className="text-indigo-400 font-semibold text-lg">
                            {member.status}
                          </p>
                          <p className="text-gray-500 text-sm mt-2">
                            Position Opening Soon
                          </p>
                        </div>
                      </div>
                    )}

                    {member.active && member.role.includes("Founder") && (
                      <div className="absolute top-2 left-2 bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] text-white text-xs px-2 py-1 rounded">
                        Founder
                      </div>
                    )}
                  </div>

                  <h4 className="text-lg font-bold">{member.name}</h4>
                  <p className="text-indigo-400 text-sm">{member.role}</p>
                  {!member.active && (
                    <p className="text-gray-500 text-xs mt-1"> Joining Soon</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-['Space_Grotesk']">
              Our Journey in Numbers
            </h2>
            <p className="text-[#c7c4d8] max-w-2xl mx-auto">
              Real metrics from our development journey and project portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(108,99,255,0.1)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">
                    {stat.icon}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm font-semibold text-indigo-400 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#c7c4d8]">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 bg-white/5 inline-block px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-indigo-400 text-sm align-middle mr-1">
                info
              </span>
              Currently serving 1 enterprise client with 15+ self-initiated
              projects and growing
            </p>
          </div>
        </section>

        {/* SKILLS HIGHLIGHT */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 bg-indigo-950/20 rounded-xl mx-4 sm:mx-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-['Space_Grotesk']">
              Technologies We Master
            </h2>
            <p className="text-[#c7c4d8]">
              Building with modern, scalable tech stack
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Firebase",
              "JWT",
              "Razorpay",
              "Cloudinary",
              "OpenAI API",
              "Vercel",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-3 rounded-lg text-center text-sm text-[#e4e1ee] hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
          <div className="bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] p-8 sm:p-12 rounded-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-['Space_Grotesk']">
                Join our Journey
              </h2>
              <p className="mb-6 text-white/80 text-base sm:text-lg">
                Build the future with us. Let's create something extraordinary
                together.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 sm:px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 sm:px-8 py-3 border border-white rounded-xl font-bold text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  Partner with Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
};

export default About;
