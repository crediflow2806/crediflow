"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#08152F]/80 backdrop-blur-2xl shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

          {/* Brand */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black tracking-wide text-[#D4AF37]">
              CrediFlow
            </h1>

            <p className="text-[11px] md:text-xs text-gray-300">
              by Krisha Consultancy & Financial Services
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-200">

            <a
              href="#"
              className="transition-all duration-300 hover:text-[#D4AF37]"
            >
              Home
            </a>

            <a
              href="#services"
              className="transition-all duration-300 hover:text-[#D4AF37]"
            >
              Services
            </a>

            <a
              href="#about"
              className="transition-all duration-300 hover:text-[#D4AF37]"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition-all duration-300 hover:text-[#D4AF37]"
            >
              Contact
            </a>
          </div>

          {/* Desktop WhatsApp Button */}
          <a
            href="https://wa.me/917600057005"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#08152F] transition-all duration-300 hover:scale-105 hover:bg-[#E5C04A] shadow-lg"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-[#D4AF37]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#08152F]/95 backdrop-blur-2xl px-6 py-6">

          <div className="flex flex-col gap-5 text-gray-200 font-medium">

            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="https://wa.me/917600057005"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-[#D4AF37] py-3 text-center font-semibold text-[#08152F] transition-all duration-300"
            >
              WhatsApp
            </a>

          </div>
        </div>
      )}
    </nav>
    </>
  );
}