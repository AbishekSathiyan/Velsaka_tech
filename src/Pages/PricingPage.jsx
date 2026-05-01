import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time through your dashboard. The changes will take effect immediately and will be prorated on your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for our Pro plan, no credit card required. Experience all premium features before making a commitment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency for annual enterprise contracts."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes! We have special pricing for educational institutions and registered non-profit organizations. Please contact our support team."
    }
  ];

  return (
    <div className="bg-background min-h-screen font-body-md">
      <Header />

      <main className="pt-xxl overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative py-12 md:py-xxl px-6 md:px-8 max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[400px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]"></div>
          </div>
          <h1 className="font-h1 text-3xl md:text-h1 text-white mb-md tracking-tight leading-tight font-['Space_Grotesk']">
            Simple & Transparent Pricing
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
            Affordable plans for startups, businesses, and creators. Scale your cosmic vision with precision engineering.
          </p>
        </section>

        {/* Pricing Cards Section */}
        <section className="px-6 md:px-8 py-xl max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-lg items-stretch">
            {/* Basic Plan */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 p-xl rounded-xl flex flex-col hover:-translate-y-2 transition-all duration-300">
              <div className="mb-lg">
                <span className="text-primary font-label-sm uppercase tracking-widest text-xs font-semibold">Basic</span>
                <h2 className="font-h2 text-h2 text-white mt-xs font-['Space_Grotesk'] text-3xl md:text-4xl">
                  ₹3,999<span className="text-lg text-on-surface-variant">/mo</span>
                </h2>
              </div>
              <ul className="space-y-md mb-xxl flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Standard Performance
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  5 Project Capacity
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Email Support
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant opacity-50">
                  <span className="material-symbols-outlined text-[20px]">cancel</span>
                  Custom Domains
                </li>
              </ul>
              <button 
                onClick={() => navigate("/contact")}
                className="w-full py-md border border-white/20 rounded-xl font-label-sm hover:bg-white/5 transition-all text-sm font-semibold"
              >
                Get Started
              </button>
            </div>

            {/* Pro Plan (Most Popular) */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-primary/40 p-xl rounded-xl flex flex-col md:scale-105 z-10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-[0_0_35px_rgba(108,99,255,0.3)]">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-1 rounded-bl-xl text-xs font-semibold shadow-md shadow-indigo-500/30">
  Most Popular
</div>
              <div className="mb-lg">
                <span className="text-primary font-label-sm uppercase tracking-widest text-xs font-semibold">Pro</span>
                <h2 className="font-h2 text-h2 text-white mt-xs font-['Space_Grotesk'] text-3xl md:text-4xl">
                  ₹9,999<span className="text-lg text-on-surface-variant">/mo</span>
                </h2>
              </div>
              <ul className="space-y-md mb-xxl flex-grow">
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Enhanced Throughput
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  20 Project Capacity
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Priority Support (24h)
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Custom Domains
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Advanced Analytics
                </li>
              </ul>
              <button 
                onClick={() => navigate("/contact")}
                className="w-full py-md bg-gradient-to-r from-[#6C63FF] to-[#0566d9] text-white rounded-xl font-label-sm shadow-[0_0_20px_rgba(108,99,255,0.4)] hover:opacity-90 transition-all text-sm font-semibold"
              >
                Go Pro
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 p-xl rounded-xl flex flex-col hover:-translate-y-2 transition-all duration-300">
              <div className="mb-lg">
                <span className="text-primary font-label-sm uppercase tracking-widest text-xs font-semibold">Premium</span>
                <h2 className="font-h2 text-h2 text-white mt-xs font-['Space_Grotesk'] text-3xl md:text-4xl">
                  ₹29,999+<span className="text-lg text-on-surface-variant">/mo</span>
                </h2>
              </div>
              <ul className="space-y-md mb-xxl flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Unlimited Scale
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Dedicated Infrastructure
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  White-glove Onboarding
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  SSO & Enterprise Security
                </li>
              </ul>
              <button 
                onClick={() => navigate("/contact")}
                className="w-full py-md border border-white/20 rounded-xl font-label-sm hover:bg-white/5 transition-all text-sm font-semibold"
              >
                Contact Enterprise
              </button>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="px-6 md:px-8 py-xxl max-w-7xl mx-auto">
          <h3 className="font-h3 text-h3 text-white mb-xl text-center font-['Space_Grotesk'] text-2xl font-semibold">
            Enhance Your Experience
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {[
              { icon: "trending_up", title: "SEO Optimization", desc: "Boost your organic cosmic reach." },
              { icon: "build", title: "Maintenance", desc: "24/7 system health checks." },
              { icon: "cloud_done", title: "Hosting Setup", desc: "Zero-latency global deployment." },
              { icon: "brush", title: "UI Redesign", desc: "Next-gen aesthetic overhaul." },
            ].map((addon, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-[20px] border border-white/10 p-lg rounded-xl hover:bg-white/5 transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-primary mb-md text-2xl">{addon.icon}</span>
                <h4 className="font-bold text-white mb-xs text-base">{addon.title}</h4>
                <p className="text-sm text-slate-400">{addon.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="px-6 md:px-8 py-xxl max-w-7xl mx-auto">
          <h3 className="font-h3 text-h3 text-white mb-xl font-['Space_Grotesk'] text-2xl font-semibold">
            Feature Comparison
          </h3>
          <div className="bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-xl overflow-hidden overflow-x-auto custom-scrollbar">
            <table className="w-full text-left min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-lg font-h3 text-primary font-semibold">Feature</th>
                  <th className="p-lg text-white">Basic</th>
                  <th className="p-lg text-white">Pro</th>
                  <th className="p-lg text-white">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-lg text-on-surface">API Requests / Day</td>
                  <td className="p-lg text-slate-400">10k</td>
                  <td className="p-lg text-white font-medium">100k</td>
                  <td className="p-lg text-primary font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-lg text-on-surface">Storage Capacity</td>
                  <td className="p-lg text-slate-400">5GB</td>
                  <td className="p-lg text-white font-medium">50GB</td>
                  <td className="p-lg text-primary font-bold">1TB+</td>
                </tr>
                <tr>
                  <td className="p-lg text-on-surface">Collaborators</td>
                  <td className="p-lg text-slate-400">2</td>
                  <td className="p-lg text-white font-medium">10</td>
                  <td className="p-lg text-primary font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-lg text-on-surface">Custom Reports</td>
                  <td className="p-lg text-slate-400">
                    <span className="material-symbols-outlined opacity-30 text-base">close</span>
                  </td>
                  <td className="p-lg text-primary">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </td>
                  <td className="p-lg text-primary">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-lg text-on-surface">Dedicated IP</td>
                  <td className="p-lg text-slate-400">
                    <span className="material-symbols-outlined opacity-30 text-base">close</span>
                  </td>
                  <td className="p-lg text-slate-400">
                    <span className="material-symbols-outlined opacity-30 text-base">close</span>
                  </td>
                  <td className="p-lg text-primary">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-8 py-xxl max-w-3xl mx-auto">
          <h3 className="font-h3 text-h3 text-white mb-xl text-center font-['Space_Grotesk'] text-2xl font-semibold">
            Frequently Asked Questions
          </h3>
          <div className="space-y-md">
            {faqs.map((faq, idx) => (
              <details 
                key={idx}
                className="group bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-xl overflow-hidden"
                open={idx === openFaq}
                onClick={() => setOpenFaq(idx === openFaq ? -1 : idx)}
              >
                <summary className="flex justify-between items-center p-lg cursor-pointer list-none">
                  <span className="font-medium text-white">{faq.question}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-lg pb-lg text-slate-400 text-sm md:text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-8 py-xxl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10"></div>
          <div className="max-w-7xl mx-auto py-xl">
            <h3 className="font-h2 text-2xl md:text-h2 text-white mb-md font-['Space_Grotesk'] font-semibold">
              Not sure which plan fits your project?
            </h3>
            <p className="text-on-surface-variant mb-xl max-w-xl mx-auto text-sm md:text-base">
              Our consultants are ready to help you map out the perfect infrastructure for your unique cosmic scale needs.
            </p>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-white text-[#0B1120] px-8 md:px-xl py-4 md:py-lg rounded-xl font-bold hover:bg-primary hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              Contact Us
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;