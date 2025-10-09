import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black bg-opacity-40 backdrop-blur-md fixed w-full z-50">
  <div className="flex items-center gap-2">
    <img src={Logo} alt="AifNN Logo" className="h-10 w-auto" />
    <span className="text-white font-bold text-xl">AifNN</span>
  </div>
  <div className="flex gap-6 text-white">
    <a href="#about" className="hover:text-blue-400">About</a>
    <a href="#services" className="hover:text-blue-400">Services</a>
    <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
    <a href="#contact" className="hover:text-blue-400">Contact</a>
  </div>
</nav>

  );
}
