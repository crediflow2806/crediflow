import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-wide">
          CrediFlow
        </h1>

        <p className="text-[10px] md:text-xs text-gray-400">
          by Krisha Consultancy & Financial Services
        </p>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300 font-medium">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <a
        href="https://wa.me/917600057005"
        target="_blank"
        className="hidden md:block bg-yellow-400 text-slate-900 px-5 py-2 rounded-xl font-semibold transition duration-300 hover:bg-yellow-300 hover:scale-105"
      >
        Apply Now
      </a>
    </nav>
  );
}