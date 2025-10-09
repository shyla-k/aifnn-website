
import React from "react";
import { motion } from "framer-motion";
import iLearnLogo from "./assets/iLearnjustlogo.png";
import { useState } from "react";
import CaseStudies from "./components/CaseStudies";
import Logo from "./assets/AifNN_darkbluebackground1.png";
import { Brain, Layers, Bot, Cpu } from "lucide-react";
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaIndustry, 
  FaShoppingCart, 
  FaTruck, 
  FaFighterJet, 
  FaCar, 
  FaSeedling, 
FaTractor,
FaBars, FaTimes
} from "react-icons/fa";

import Button from "./components/Button";
// Modern dark theme inspired AI company landing page
// Uses TailwindCSS + framer-motion

export default function AICompanyWebsite() {
 const [menuOpen, setMenuOpen] = useState(false);
const [showModal, setShowModal] = useState(false);
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[#0A2342] via-[#0E1E3F] to-black text-white antialiased">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="AifNN Logo" className="h-10 w-auto" />
          <span className="text-sm font-medium text-gray-300">
            AI • ML • Automation • Digitization • Engineering
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 text-white font-medium">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#industries" className="hover:text-cyan-400">Industries</a>
          <a href="#case-studies" className="hover:text-cyan-400">Case Studies</a>
 {<a href="#Smart-Solutions" className="hover:text-cyan-400">Smart Solutions</a> }

          <a href="#contact" className="hover:text-cyan-400">Contact</a>
 <a href="#staffing" className="hover:text-cyan-400">Staffing Solutions</a>
  {/* iLearn with image */}
<a href="#ilearn" className="flex items-center gap-1 hover:text-cyan-400">
  <img src={iLearnLogo} alt="iLearn" className="h-6 w-auto" />
  </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
{menuOpen && (
  <div className="md:hidden bg-gray-900/95 px-6 py-4 space-y-4 text-white font-medium">
    <a href="#about" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#services" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Services</a>
    <a href="#industries" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Industries</a>
    <a href="#staffing" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Staffing</a> {/* ✅ Added */}
    <a href="#case-studies" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Case Studies</a>
    <a href="#contact" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>
)}
    </nav>

     {/* HERO SECTION */}
<section 
  id="hero" 
  className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
>
  {/* glowing blur */}
  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[30rem] h-[30rem] bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

  {/* animated grid background */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute w-[200%] h-[200%] animate-[moveGrid_20s_linear_infinite] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
  </div>

  {/* Hero Content */}

 <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('/background2.png')" }}
      />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C3C]/60 to-[#081529]/90" />
  <div className="relative z-10 text-center px-6">
    <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="text-5xl md:text-6xl font-extrabold text-white"
    >
      Building and Powering the Future with <span className="text-blue-600 px-10 text-5xl md:text-9xl">AI</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
    >
      We empower organizations with intelligent solutions in AI, 
      digitization, automation, and engineering services to thrive 
      in the digital era. Innovative AI · ML · Automation solutions for industries worldwide
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-10 flex flex-wrap gap-4 justify-center"
    >

     {/* <button onClick={() => setShowModal(true)} className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition">
        Get Started
      </button>*/}
<Button onClick={() => setShowModal(true)} variant="primary">
  Get Started
</Button>
     <Button variant="secondary">
        Learn More
      </Button>
    </motion.div>
  </div>

</section>


{/* ABOUT US */}
<section 
  id="about" 
  className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 overflow-hidden"
>
  {/* glowing blue blur */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

  {/* animated grid pattern */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute w-[200%] h-[200%] animate-[moveGrid_15s_linear_infinite] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-3xl font-bold text-white">
        About <span className="text-blue-400">Us</span>
      </h3>
      <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
        At <span className="font-semibold text-blue-300">AifNN</span>, we empower businesses to thrive in the digital era 
        by combining the power of <span className="text-indigo-400">Artificial Intelligence</span>, 
        <span className="text-indigo-400"> Automation</span>, and 
        <span className="text-indigo-400"> Engineering Excellence</span>. 
        Our mission is to transform complex challenges into smart, scalable, and impactful solutions that drive measurable growth.
      </p>
    </motion.div> </div>
</section>
<section id="services" className="py-20 bg-gray-900 text-white">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
      {[
        {
          icon: <Brain className="w-10 h-10 text-blue-400" />,
          title: "AI & Machine Learning",
          desc: "Custom AI strategies and ML models to enhance decision-making and unlock new opportunities.",
        },
        {
          icon: <Layers className="w-10 h-10 text-green-400" />,
          title: "Digitization",
          desc: "Transforming legacy processes into digital-first experiences for agility and innovation.",
        },
        {
          icon: <Bot className="w-10 h-10 text-purple-400" />,
          title: "Automation",
          desc: "Intelligent automation solutions that reduce costs, increase efficiency, and optimize workflows.",
        },
        {
          icon: <Cpu className="w-10 h-10 text-pink-400" />,
          title: "Engineering Services",
          desc: "Robust, scalable engineering support ensuring future-ready, industry-specific solutions.",
        },
      ].map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,128,255,0.3)" }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg transition"
        >
          <div className="mb-4">{item.icon}</div>
          <h4 className="text-lg font-semibold text-indigo-400">{item.title}</h4>
          <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
        </motion.div>
      ))}
</div>
  </div>
</section>








<section id="industries" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12">Industries We Serve</h2>
    <div className="grid md:grid-cols-3 gap-8">

      {/* Agriculture */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaSeedling className="text-teal-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:scale-125 hover:-rotate-6 hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Agriculture</h3>
        <p>AI solutions for precision farming, crop monitoring, and sustainable agriculture.</p>
      </div>

      {/* Aerospace & Defence */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaFighterJet className="text-red-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:translate-x-3 hover:-translate-y-1 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Aerospace & Defence</h3>
        <p>AI-powered surveillance, mission planning, and advanced defense automation.</p>
      </div>

      {/* Automotive */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaCar className="text-orange-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:scale-125 hover:rotate-3 hover:drop-shadow-[0_0_20px_rgba(251,146,60,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Automotive</h3>
        <p>Next-gen autonomous vehicles, connected mobility, and smart transportation systems.</p>
      </div>

      {/* Finance */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaMoneyBillWave className="text-green-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Finance</h3>
        <p>Automation, fraud detection, and intelligent decision-making for banking and fintech.</p>
      </div>

      {/* Healthcare */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaHospital className="text-pink-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:rotate-12 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
        <p>AI-driven solutions for patient care, diagnostics, and personalized medicine.</p>
      </div>

      {/* Manufacturing */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaIndustry className="text-yellow-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:scale-125 hover:rotate-6 hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
        <p>Smart factories with robotics, predictive maintenance, and digital twins.</p>
      </div>

      {/* Retail */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaShoppingCart className="text-purple-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:-translate-y-2 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Retail</h3>
        <p>Personalized shopping experiences, demand forecasting, and supply chain optimization.</p>
      </div>

      {/* Transportation & Logistics */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
        <FaTruck className="text-blue-400 text-6xl mx-auto mb-4 transition-all duration-500 hover:translate-x-2 hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
        <h3 className="text-xl font-semibold mb-2">Transportation & Logistics</h3>
        <p>Autonomous vehicles, route optimization, and predictive logistics solutions.</p>
      </div>

    </div>
  </div>
</section>
<CaseStudies />
      {/* CASE STUDIES */}
      <section id="cases" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-950 to-gray-900 rounded-3xl">
        <h3 className="text-2xl font-bold text-center">Smart Solutions</h3>
        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          Explore how AifNN solutions are transforming industries through innovation and scale.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI in Agriculture",
              desc: "Smart crop monitoring and predictive analytics improved yields by 30%.",
            },
            {
              title: "Defense Surveillance",
              desc: "Deployed battlefield surveillance AI reducing human monitoring load by 60%.",
            },
            {
              title: "Automotive Safety",
              desc: "Enhanced driver-assist with real-time vision AI for accident prevention.",
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)" }}
              className="bg-gray-800 p-6 rounded-xl shadow transition"
            >
              <div className="text-lg font-semibold text-blue-400">{c.title}</div>
              <p className="mt-2 text-sm text-gray-400">{c.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-indigo-400 underline">Learn More</a>
            </motion.div>
          ))}
        </div>
      </section>
{/* --- Staffing Solutions Section --- */}
<section id="staffing" className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    
    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-4">
        Staffing Solutions
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        We connect businesses with highly skilled professionals across AI, engineering, and digital transformation — delivered through flexible staffing models that match your needs.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-3">
      
      {/* AI & Data Experts */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">AI & Data Experts</h3>
        <p className="text-gray-400">
          Skilled AI engineers, data scientists, and ML specialists to drive automation and intelligence.
        </p>
      </div>

      {/* Engineering Staffing */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">Engineering Staffing</h3>
        <p className="text-gray-400">
          Hire top engineering talent — software, hardware, systems, and product engineers tailored to your projects.
        </p>
      </div>

      {/* Digital Transformation Staffing */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">Digital Transformation Staffing</h3>
        <p className="text-gray-400">
          Experts in cloud, IoT, RPA, cybersecurity, and enterprise digitization to accelerate your growth.
        </p>
      </div>

      {/* Custom Teams */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">Custom Teams</h3>
        <p className="text-gray-400">
          Build dedicated teams aligned with your goals — from small agile squads to enterprise programs.
        </p>
      </div>

      {/* Staffing Models */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">Staffing Models</h3>
        <p className="text-gray-400">
          Flexible engagement models — contract, contract-to-hire, permanent staffing, and on-demand consultants.
        </p>
      </div>

      {/* On-Demand Support */}
      <div className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/30 transition">
        <h3 className="text-xl font-semibold mb-4 text-cyan-300">On-Demand Support</h3>
        <p className="text-gray-400">
          Scale your workforce instantly with rapid access to pre-vetted talent for short or long-term needs.
        </p>
      </div>

    </div>
  </div>
</section>
{/* iLearn SECTION */}
<section id="ilearn" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">
      <span className="text-blue-400">iLearn</span> – AI Training & Upskilling
    </h2>
    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
      iLearn empowers <span className="text-blue-400 font-semibold">corporates </span> 
      and <span className="text-indigo-400 font-semibold">experienced professionals </span> 
      with cutting-edge AI knowledge and hands-on expertise to stay ahead in the digital era.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Corporate Training */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">Corporate Training</h3>
        <p className="text-gray-300">
          Tailored AI & ML programs designed for enterprises. 
          We help teams adopt AI-driven solutions, build digital-first processes, 
          and strengthen innovation culture.
        </p>
        <ul className="mt-4 text-sm text-gray-400 space-y-2 text-left">
          <li>✔ AI & ML strategy workshops</li>
          <li>✔ Custom use-case driven training</li>
          <li>✔ Hands-on automation projects</li>
        </ul>
      </div>

      {/* Professionals Training */}
      <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold text-indigo-400 mb-3">Experienced Professionals</h3>
        <p className="text-gray-300">
          Specialized upskilling for working professionals looking to 
          accelerate careers in AI, automation, and digital engineering.
        </p>
        <ul className="mt-4 text-sm text-gray-400 space-y-2 text-left">
          <li>✔ Advanced AI & ML deep-dive courses</li>
          <li>✔ Real-world project mentorship</li>
          <li>✔ Certification & career guidance</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* TEAM */}
     {/* <section id="team" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-950 to-gray-900 rounded-t-3xl">
        <h3 className="text-2xl font-bold text-center">Leadership</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "Shyla MK", title: "Intustry Expert" },
            { name: "Mr. Chirooth G", title: "Head of Research" },
            
          ].map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)" }}
              className="bg-gray-800 p-6 rounded-xl shadow text-center transition"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto flex items-center justify-center text-xl font-bold text-white">
                {p.name[0]}
              </div>
              <div className="mt-4 font-semibold text-white">{p.name}</div>
              <div className="text-sm text-gray-400">{p.title}</div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="mt-4 text-gray-300">Let us know about your project. We’ll respond within 1-2 business days.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <div>📞 +91 86605 06059</div>
              <div>📧 <a href="mailto:shyla.mk@aifnn.com" className="underline text-blue-400">shyla.mk@aifnn.com</a></div>
              <div>🌐 www.aifnn.com</div>
            </div>
          </div>
          <form className="bg-gray-900 p-6 rounded-xl shadow" onSubmit={(e) => { e.preventDefault(); alert('Form submitted (demo)'); }}>
            <label className="block text-sm text-gray-300">Name</label>
            <input className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white" required />
            <label className="block text-sm mt-4 text-gray-300">Email</label>
            <input className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white" type="email" required />
            <label className="block text-sm mt-4 text-gray-300">Message</label>
            <textarea className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white" rows={4} required />
            <button type="submit" className="mt-6 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium">Send Message</button>
          </form>
        </div>
      </section>

      {/* --- MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">Get Started with AifNN</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}





      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} AifNN — All rights reserved</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
