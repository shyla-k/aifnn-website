import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import iLearnLogo from "../assets/iLearnjustlogo.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname + location.hash;
  const isActive = (link) => currentPath === link;

  const activeClasses = `
    text-blue-300 font-semibold 
    border-b-2 border-blue-400 
  `;

  const baseLinkClasses = `
    px-2 py-1
    transition-all duration-300
    hover:bg-gradient-to-b 
    hover:from-[#052042] 
    hover:to-[#001229]
    hover:shadow-[0_0_15px_rgba(0,115,255,0.45)]
    hover:text-cyan-400
  `;

  // ⭐ Smart Solutions — instant jump without scroll
  const goToSmartSolutions = () => {
    setMenuOpen(false);
    window.location.href = "/#Smart-Solutions";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md
      bg-gradient-to-r from-[#031136] via-[#041b4d] to-[#072866]
      border-b border-blue-500/30 transition-all duration-500">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/AifNN_darkbluebackground1.png" className="h-10" />
          <span className="text-xs text-gray-300 whitespace-nowrap">
            AI • ML • Automation • Digitization • Engineering
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center font-medium text-white space-x-1">

          <a href="/" className={`${baseLinkClasses} ${isActive("/") ? activeClasses : ""}`}>
            Home
          </a>

          <a href="/#about" className={`${baseLinkClasses} ${isActive("/#about") ? activeClasses : ""}`}>
            About
          </a>

          <a href="/#services" className={`${baseLinkClasses} ${isActive("/#services") ? activeClasses : ""}`}>
            Services
          </a>

          <a href="/#industries" className={`${baseLinkClasses} ${isActive("/#industries") ? activeClasses : ""}`}>
            Industries
          </a>

          <a href="/#case-studies" className={`${baseLinkClasses} ${isActive("/#case-studies") ? activeClasses : ""}`}>
            Case Studies
          </a>

          {/* ⭐ Smart Solutions updated */}
          <button
            onClick={goToSmartSolutions}
            className={`${baseLinkClasses} ${location.hash === "#Smart-Solutions" ? activeClasses : ""}`}
          >
            Smart Solutions
          </button>

          <a href="/#staffing" className={`${baseLinkClasses} ${isActive("/#staffing") ? activeClasses : ""}`}>
            Staffing
          </a>

          <a
            href="/careers"
            className={`${baseLinkClasses} ${isActive("/careers") ? activeClasses : ""}`}
          >
            Careers
          </a>

          <a
            href="/#ilearn"
            className={`flex items-center gap-1 ${baseLinkClasses} ${
              isActive("/#ilearn") ? activeClasses : ""
            }`}
          >
            <img src={iLearnLogo} className="h-5" />
          </a>

          <a href="/#contact" className={`${baseLinkClasses} ${isActive("/#contact") ? activeClasses : ""}`}>
            Contact
          </a>
        </div>

        {/* MOBILE MENU ICON */}
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

          <a href="/" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/#about" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#services" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#industries" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="/#case-studies" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>Case Studies</a>

          <a onClick={goToSmartSolutions} className="block px-2 py-2">
            Smart Solutions
          </a>

          <a href="/#staffing" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>Staffing</a>

          <a
            href="/careers"
            className="block px-2 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </a>

          <a href="/#ilearn" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>iLearn</a>
          <a href="/#contact" className="block px-2 py-2" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
