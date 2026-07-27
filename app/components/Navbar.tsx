"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-10 py-5">

        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-wide">
            CrediFlow
          </h1>

          <p className="text-[10px] md:text-xs text-gray-400">
            by Krisha Consultancy & Financial Services
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium items-center">
          <a
  href="#"
  className="transition duration-300 hover:text-yellow-400 hover:scale-110"
>
  Home
</a>
          <a
  href="#services"
  className="transition duration-300 hover:text-yellow-400 hover:scale-110"
>
  Services
</a>

<a
  href="#about"
  className="transition duration-300 hover:text-yellow-400 hover:scale-110"
>
  About
</a>

<a
  href="#contact"
  className="transition duration-300 hover:text-yellow-400 hover:scale-110"
>
  Contact
</a>
          
        
        </div>

        <a
          href="https://wa.me/917600057005"
          target="_blank"
          className="hidden md:block bg-yellow-400 text-slate-900 px-5 py-2 rounded-xl font-semibold transition duration-300 hover:bg-yellow-300 hover:scale-105"
        >
          Apply Now
        </a>

        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-slate-950 text-gray-300 font-medium">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          <a
            href="https://wa.me/917600057005"
            target="_blank"
            className="bg-yellow-400 text-slate-900 text-center py-3 rounded-xl font-bold"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}