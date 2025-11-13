
import React from "react";
import { motion } from "framer-motion";
import iLearnLogo from "./assets/iLearnjustlogo.png";
import ContactForm from "./components/ContactForm";
import { useState } from "react";
import CaseStudies from "./components/CaseStudies";
import ThankYou from "./pages/ThankYou"; // adjust path if needed
import { Brain, Layers, Bot, Cpu } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



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




function AICompanyWebsite() {
 const [menuOpen, setMenuOpen] = useState(false);
const [showModal, setShowModal] = useState(false);
const [loading, setLoading] = useState(false);
const [emailValid, setEmailValid] = useState(false);
const [checkingDomain, setCheckingDomain] = useState(false);


const [formData, setFormData] = useState({ name: "", email: "", message: "" });
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://www.aifnn.com";
  return (
    <div className="pt-20 min-h-screen  bg-gradient-to-br from-[#0A2342] via-[#0E1E3F] to-black text-white antialiased">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md
             bg-gradient-to-r from-[#031136] via-[#041b4d] to-[#072866]
             border-b border-blue-500/30
             transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <img src="/AifNN_darkbluebackground1.png" alt="AifNN Logo" className="h-10 w-auto" />
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
 <a href="#Smart-Solutions" className="hover:text-cyan-400">Smart Solutions</a> 

          
 <a href="#staffing" className="hover:text-cyan-400">Staffing Solutions</a>
  {/* iLearn with image */}
<a href="#ilearn" className="flex items-center gap-1 hover:text-cyan-400">
  <img src={iLearnLogo} alt="iLearn" className="h-6 w-auto" />
  </a>
<a href="#contact" className="hover:text-cyan-400">Contact</a>
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
 <a href="#Smart-Solutions" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Smart Solutions</a>


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
        className=" min-h-screen absolute inset-0 bg-no-repeat bg-cover bg-fixed bg-center text-white opacity-0.3"
        style={{ 
backgroundImage: "url('/background2.png')" ,
backgroundAttachment: "fixed",
backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 1, // adjust 0.2–0.5 for visibility balance
}}
      />
<div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-800/20 to-cyan-700/30 
                   animate-gradientMove opacity-80 mix-blend-overlay"
      ></div>
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
{/* ABOUT US */}
<section 
  id="about" 
  className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 overflow-hidden"
>
  {/* Subtle blue glow backdrop */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full pointer-events-none "></div>

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
    </motion.div>

    {/* About Feature Boxes */}
    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Brain className="w-8 h-8 text-blue-400" />,
          title: "Innovation at Core",
          desc: "We combine AI and automation to design efficient, future-ready systems.",
        },
        {
          icon: <Layers className="w-8 h-8 text-blue-400" />,
          title: "Customer-Centric Approach",
          desc: "Our focus is on understanding client challenges and creating scalable, tailored solutions.",
        },
        {
          icon: <Cpu className="w-8 h-8 text-blue-400" />,
          title: "Engineering Excellence",
          desc: "Delivering reliable, high-performance systems built to meet evolving business needs.",
        },
      ].map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(37,99,235,0.3)" }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-b from-[#0b1120] to-[#0f172a] border border-[#1e3a8a]/40 shadow-[0_0_20px_rgba(37,99,235,0.15)] p-8 text-left"
        >
          <div className="w-12 h-12 mb-6 flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-900 rounded-md shadow-[inset_0_0_10px_rgba(59,130,246,0.5)]">
            {item.icon}
          </div>
          <h4 className="text-xl font-semibold mb-3 text-white">{item.title}</h4>
          <p className="text-gray-300 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section id="services" className="py-20 bg-[#020617] text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">Our Services</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Brain className="w-10 h-10 text-blue-400" />,
          title: "AI & Machine Learning",
          subtitle: "98%",
          highlight: "Reliable performance",
          desc: "Custom  and consistent AI strategies and ML models ensuring smooth performance to enhance decision-making and unlock new opportunities.",
          //icon: <Brain className="w-8 h-8 text-blue-400" />,
        },
{
          icon: <Layers className="w-10 h-10 text-green-400" />,
          title: "Digitization",
	  subtitle: "100%",
          highlight: "Migrated Projects",

          desc: "Transforming legacy processes into digital-first experiences for agility and innovation.",
        },
        {
          title: "Enterprise Automation",
          subtitle: "Guranted",
          highlight: "Satisfactions",
          desc: "Transforming global enterprises with scalable, automated solutions that enhance productivity and efficiency.",
          icon: <Layers className="w-8 h-8 text-blue-400" />,
        },
        {
          title: "Smart Analytics",
          subtitle: "23+",
          highlight: "Intuitive design",
          desc: "Delivering deep insights through user-centric dashboards and intelligent decision-making tools.",
          icon: <Cpu className="w-8 h-8 text-blue-400" />,
        },
{
  title: "Intelligent Embedded Systems",
  subtitle: "25+",
  highlight: "Smart Devices",
  desc: "Developing intelligent embedded systems with onboard AI, enabling real-time analytics, automation, and edge decision-making for next-generation products.",
  icon: <Cpu className="w-8 h-8 text-blue-400" />,
},

 {
          icon: <Cpu className="w-10 h-10 text-pink-400" />,
	  subtitle: "90%",
          highlight: "Industry Coverage",

          title: "Engineering Services",
          desc: "Robust, scalable engineering support ensuring future-ready, industry-specific solutions.",
        },
      ].map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-[#031136] via-[#041b4d] to-[#072866] p-8 rounded-2xl border border-[#1d4ed8]/30 shadow-[0_0_25px_rgba(37,99,235,0.15)] text-left"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center border border-blue-500/50 rounded-lg bg-blue-950/40">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
            </div>
          </div>

          <div className="text-[2rem] font-bold text-white mb-1">
            {item.subtitle}
            <span className="text-blue-400 ml-1">
              {item.subtitle.includes("%") ? "" : ""}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6">{item.highlight}</p>

          <hr className="border-blue-900/50 mb-6" />

          <p className="text-gray-300 leading-relaxed text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section id="industries" className="py-20 bg-[#020617] text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
 {
          title: "Agriculture",
          desc: "AI solutions for precision farming, crop monitoring, and sustainable agriculture.",
          icon: <FaSeedling className="w-6 h-6 text-blue-400" />,
        },
{
          title: "Aerospace and Defense",
          desc: "AI-powered surveillance, mission planning, and advanced defense automation.",
          icon: <Brain className="w-6 h-6 text-blue-400" />,
        },
 {
          title: "Automotive",
          desc: "AI and embedded systems enabling smarter vehicles, predictive maintenance, and ADAS innovations.",
          icon: <Bot className="w-6 h-6 text-blue-400" />,
        },
{
          title: "Manufacturing",
          desc: "Smart factories leveraging machine learning to boost efficiency, quality, and predictive maintenance.",
          icon: <Cpu className="w-6 h-6 text-blue-400" />,
        },
        {
          title: "Healthcare",
          desc: "AI-driven diagnostics, predictive analytics, and patient management systems for hospitals and clinics.",
          icon: <FaHospital className="w-6 h-6 text-blue-400" />,
        },
        {
          title: "Finance & Banking",
          desc: "Automation and fraud detection powered by AI for smarter, more secure financial operations.",
          icon: <FaMoneyBillWave className="w-6 h-6 text-blue-400" />,
        },
        
        {
          title: "Retail & E-Commerce",
          desc: "Personalized recommendations and demand forecasting powered by AI insights.",
          icon: <Layers className="w-6 h-6 text-blue-400" />,
        },
        
{
          title: "Transportation & Logistics",
          desc: "Autonomous vehicles, route optimization, and predictive logistics solutions.",
          icon: <Layers className="w-6 h-6 text-blue-400" />,
        },
       
      ].map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-[#031136] via-[#041b4d] to-[#072866] p-8 border border-[#1d4ed8]/30 shadow-[0_0_25px_rgba(37,99,235,0.15)] rounded-xl text-left"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <div className="p-3 bg-blue-950/50 border border-blue-600/40 rounded-lg shadow-[0_0_12px_rgba(37,99,235,0.3)]">
              {item.icon}
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<CaseStudies />

      {/* CASE STUDIES */}
{/* CASE STUDIES */}
<section id="Smart-Solutions" className="py-20 bg-[#010a1a] text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Smart <span className="text-blue-400">Solutions</span>
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
      Explore how AifNN solutions are transforming industries through innovation and scale.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
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
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px rgba(37,99,235,0.3)",
          }}
          transition={{ duration: 0.3 }}
          className="
            bg-gradient-to-br from-[#031136] via-[#041b4d] to-[#072866]
            border border-[#1d4ed8]/30
            shadow-[0_0_20px_rgba(37,99,235,0.15)]
            rounded-2xl
            p-8
            text-left
          "
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-300">{c.title}</h3>
          <p className="text-gray-400 mb-6">{c.desc}</p>

          <a
            href="#contact"
            className="
              inline-block px-6 py-2
              bg-gradient-to-b from-[#052042] to-[#001229]
              border border-[#0045ff80]
              rounded-md
              text-white font-medium
              shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
              hover:shadow-[0_0_15px_rgba(0,115,255,0.4)]
              hover:scale-105
              transition-all duration-300
            "
          >
            Know More
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* --- Staffing Solutions Section --- */}
<section
  id="staffing"
  className="relative py-16 bg-[#020617] text-white"
>
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-blue-500 mb-3 tracking-tight">
        Staffing Solutions
      </h2>
      <p className="text-base text-gray-300 max-w-3xl mx-auto">
        We connect businesses with highly skilled professionals across AI, engineering, and digital transformation — delivered through flexible staffing models that match your needs.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "AI & Data Experts",
          desc: "Skilled AI engineers, data scientists, and ML specialists to drive automation and intelligence.",
        },
        {
          title: "Engineering Staffing",
          desc: "Hire top engineering talent — software, hardware, systems, and product engineers tailored to your projects.",
        },
        {
          title: "Digital Transformation Staffing",
          desc: "Experts in cloud, IoT, RPA, cybersecurity, and enterprise digitization to accelerate your growth.",
        },
        {
          title: "Custom Teams",
          desc: "Build dedicated teams aligned with your goals — from small agile squads to enterprise programs.",
        },
        {
          title: "Staffing Models",
          desc: "Flexible engagement models — contract, contract-to-hire, permanent staffing, and on-demand consultants.",
        },
        {
          title: "On-Demand Support",
          desc: "Scale your workforce instantly with rapid access to pre-vetted talent for short or long-term needs.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 25px rgba(0, 180, 255, 0.5)",
          }}
          className="relative overflow-hidden rounded-lg border border-blue-600/50 bg-gradient-to-b from-[#0a1a3a] via-[#010818] to-[#0a1a3a] p-8 transition-all duration-300 shadow-[inset_0_0_25px_rgba(0,0,0,0.7)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/40 to-transparent pointer-events-none"></div>
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              {item.desc}
            </p>
            <button className="w-full py-2 text-blue-200 font-semibold border border-blue-500 rounded-md bg-gradient-to-b from-[#03204e] via-[#000008] to-[#03204e] hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition">
              Know More
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* iLearn SECTION */}
<section
  id="ilearn"
  className="py-20 bg-gradient-to-b from-[#020617] to-[#00010a] text-white"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">
      <span className="text-blue-400">iLearn</span> – AI Training & Upskilling
    </h2>
    <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
      iLearn empowers{" "}
      <span className="text-blue-400 font-semibold">corporates</span> and{" "}
      <span className="text-indigo-400 font-semibold">
        experienced professionals
      </span>{" "}
      with cutting-edge AI knowledge and hands-on expertise to stay ahead in the
      digital era.
    </p>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Corporate Training */}
      <div className="p-8 bg-gradient-to-b from-[#052042] to-[#001229] rounded-3xl shadow-lg border border-[#0045ff80]
 hover:scale-[1.02] hover:shadow-blue-900/40 transition duration-300">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          Corporate Training
        </h3>
        <p className="text-gray-400 mb-6">
          Tailored AI & ML programs designed for enterprises. We help teams
          adopt AI-driven solutions, build digital-first processes, and
          strengthen innovation culture.
        </p>
        <ul className="mt-4 text-sm text-gray-500 space-y-2 text-left">
          <li>✔ AI & ML strategy workshops</li>
          <li>✔ Custom use-case driven training</li>
          <li>✔ Hands-on automation projects</li>
        </ul>
       <button className="
  mt-6 px-8 py-3 
  bg-gradient-to-b from-[#052042] to-[#001229]
  border border-[#0045ff80]
  rounded-md
  text-white font-semibold
  shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
  hover:shadow-[0_0_15px_rgba(0,115,255,0.4)]
  hover:scale-105
  transition-all duration-300
">
  Learn More
</button>



      </div>

      {/* Professionals Training */}
      <div className="p-8 bg-gradient-to-b from-[#052042] to-[#001229] rounded-3xl shadow-lg border border-[#0045ff80]
 hover:scale-[1.02] hover:shadow-indigo-900/40 transition duration-300">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
          Experienced Professionals
        </h3>
        <p className="text-gray-400 mb-6">
          Specialized upskilling for working professionals looking to accelerate
          careers in AI, automation, and digital engineering.
        </p>
        <ul className="mt-4 text-sm text-gray-500 space-y-2 text-left">
          <li>✔ Advanced AI & ML deep-dive courses</li>
          <li>✔ Real-world project mentorship</li>
          <li>✔ Certification & career guidance</li>
        </ul>
        <button className="
  mt-6 px-8 py-3 
  bg-gradient-to-b from-[#052042] to-[#001229]
  border border-[#0045ff80]
  rounded-md
  text-white font-semibold
  shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
  hover:shadow-[0_0_15px_rgba(0,115,255,0.4)]
  hover:scale-105
  transition-all duration-300
">
  Learn More
</button>


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
      <p className="mt-4 text-gray-300">
        Let us know about your project. We’ll respond within 1–2 business days.
      </p>
      <div className="mt-6 space-y-3 text-sm text-gray-400">
        <div>📞 +91 86605 06059</div>
        <div>
          📧 <a href="mailto:shyla.mk@aifnn.com" className="underline text-blue-400">
              shyla.mk@aifnn.com
              </a>
        </div>
        <div>🌐 www.aifnn.com</div>
      </div>
    </div>


    <div className="mt-6">
      <ContactForm />
    </div>

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

      <h2 className="text-2xl font-bold text-white mb-4">
        Get Started with AifNN
      </h2>

      <ContactForm />
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
// ✅ Final export with router integration
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main site */}
        <Route path="/" element={<AICompanyWebsite />} />

        {/* Thank You Page */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}