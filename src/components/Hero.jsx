import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <h1>AI & Digital Transformation Services</h1>
      <p>Empowering your business with intelligent, automated, and scalable solutions.</p>
      <a href="#contact"><button>Get Started</button></a>
    </section>
  );
}

export default Hero;

// Hero.jsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background AI image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/background2.png')" }}
      />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C3C]/60 to-[#081529]/90" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Powering the Future with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Innovative AI · ML · Automation solutions for industries worldwide.
        </p>
        <a
          href="#solutions"
          className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold shadow-lg 
                     hover:shadow-red-500/50 hover:-translate-y-1 transition duration-300"
        >
          Explore Solutions
        </a>
      </div>
    </section>
  );
}

