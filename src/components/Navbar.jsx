import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import iLearnLogo from "../assets/iLearnjustlogo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonClasses =
     "px-3 py-1.5 rounded-md " +
  "bg-gradient-to-b from-[#0a2a55] to-[#021124] " +   // ✔ solid darker background
  "border border-[#0b4cff80] " +
  "text-gray-200 text-sm font-medium " +
  "shadow-[inset_0_0_6px_rgba(0,115,255,0.25)] " +     // ✔ subtle inner glow even when idle
  "transition-all duration-300 " +
  "hover:bg-gradient-to-b hover:from-[#052042] hover:to-[#001229] " + // ✔ restore old hover style
  "hover:shadow-[0_0_15px_rgba(0,115,255,0.45)] " +    // ✔ bright hover glow
  "hover:text-cyan-400 hover:scale-105";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md
      bg-gradient-to-r from-[#031136] via-[#041b4d] to-[#072866]
      border-b border-blue-500/30 transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/AifNN_darkbluebackground1.png"
            alt="AifNN Logo"
            className="h-10 w-auto"
          />
          <span className="text-sm font-medium text-gray-300">
            AI • ML • Automation • Digitization • Engineering
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-white font-medium items-center space-x-0">

          <a href="/" className={buttonClasses}>Home</a>
          <a href="/#about" className={buttonClasses}>About</a>
          <a href="/#services" className={buttonClasses}>Services</a>
          <a href="/#industries" className={buttonClasses}>Industries</a>
          <div className="flex">
          <a href="/#case-studies" className={buttonClasses}>Case Studies</a>
          <a href="/#Smart-Solutions" className={buttonClasses}>Smart Solutions</a>
          </div>
          <a href="/#staffing" className={buttonClasses}>Staffing</a>

          {/* iLearn Icon as a Button */}
          <a href="/#ilearn" className={buttonClasses + " flex items-center gap-1"}>
            <img src={iLearnLogo} alt="iLearn" className="h-5 w-auto" />
          </a>

          <a href="/#contact" className={buttonClasses}>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#031136]/95 px-6 py-4 space-y-3 text-white font-medium">

          <a href="/#about" className={buttonClasses} onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#services" className={buttonClasses} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#industries" className={buttonClasses} onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="/#case-studies" className={buttonClasses} onClick={() => setMenuOpen(false)}>Case Studies</a>
          <a href="/#Smart-Solutions" className={buttonClasses} onClick={() => setMenuOpen(false)}>Smart Solutions</a>
          <a href="/#staffing" className={buttonClasses} onClick={() => setMenuOpen(false)}>Staffing</a>
          <a href="/#ilearn" className={buttonClasses} onClick={() => setMenuOpen(false)}>iLearn</a>
          <a href="/#contact" className={buttonClasses} onClick={() => setMenuOpen(false)}>Contact</a>

        </div>
      )}
    </nav>
  );
}
