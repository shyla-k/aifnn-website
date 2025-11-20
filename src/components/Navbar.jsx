import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import iLearnLogo from "../assets/iLearnjustlogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const hoverClasses = `
    transition-all duration-300
    hover:bg-gradient-to-b 
    hover:from-[#052042] 
    hover:to-[#001229]
    hover:shadow-[0_0_15px_rgba(0,115,255,0.45)]
    hover:text-cyan-400
  `;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md
      bg-gradient-to-r from-[#031136] via-[#041b4d] to-[#072866]
      border-b border-blue-500/30 transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <img src="/AifNN_darkbluebackground1.png" className="h-10" />
          <span className="text-xs text-gray-300 whitespace-nowrap">
            AI • ML • Automation • Digitization • Engineering
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center font-medium text-white">

          <a href="/" className={hoverClasses + " px-2 py-1"}>Home</a>
          <a href="/#about" className={hoverClasses + " px-2 py-1"}>About</a>
          <a href="/#services" className={hoverClasses + " px-2 py-1"}>Services</a>
          <a href="/#industries" className={hoverClasses + " px-2 py-1"}>Industries</a>

          {/* Case Studies + Smart Solutions in one row */}
          <a href="/#case-studies" className={hoverClasses + " px-2 py-1"}>Case Studies</a>
          <a href="/#Smart-Solutions" className={hoverClasses + " px-2 py-1"}>Smart Solutions</a>

          <a href="/#staffing" className={hoverClasses + " px-2 py-1"}>Staffing</a>

          {/* iLearn button (text with small icon) */}
          <a href="/#ilearn" className={`flex items-center gap-1 ${hoverClasses} px-2 py-1`}>
            <img src={iLearnLogo} className="h-5" />
          </a>

          <a href="/#contact" className={hoverClasses + " px-2 py-1"}>Contact</a>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#031136]/95 px-6 py-4 space-y-3 text-white font-medium">

          <a href="/" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/#about" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#services" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#industries" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="/#case-studies" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>Case Studies</a>
          <a href="/#Smart-Solutions" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>Smart Solutions</a>
          <a href="/#staffing" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>Staffing</a>
          <a href="/#ilearn" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>iLearn</a>
          <a href="/#contact" className="block px-2 py-2 hover:bg-[#052042]" onClick={() => setMenuOpen(false)}>Contact</a>

        </div>
      )}
    </nav>
  );
}
