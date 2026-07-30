"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.section
    id="hero"
  className="relative overflow-hidden min-h-[50vh] pt-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[160px] rounded-full -z-10"></div>

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full -z-10"></div>

<h2 className="text-5xl md:text-7xl font-extrabold text-yellow-400">
  Smart Credit.
</h2>

<h2 className="text-5xl md:text-7xl font-extrabold mt-1 text-white">
  Simple Growth.
</h2>

      <p className="text-gray-300 max-w-1xl mt-5 text-base md:text-lg leading-7 md:leading-8 px-2">
        Credit Card Searvice,Personal Loan,Business Loan &
        Financial Services across Gujarat.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 mt-1">
        <a
          href="https://wa.me/917600057005"
          target="_blank"
          className="bg-yellow-400 text-slate-900 w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 duration-300 shadow-xl"
        >
          WhatsApp Now
        </a>

        <a
          href="tel:+917600057005"
          className="border border-yellow-400 text-yellow-400 w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-slate-900 hover:scale-105 duration-300"
        >
          Call Now
        </a>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
  <div className="rounded-full border border-yellow-400/20 bg-white/10 px-4 py-2">
    <span className="font-bold text-yellow-400">1000+</span> Happy Customers
  </div>

  <div className="rounded-full border border-yellow-400/20 bg-white/10 px-4 py-2">
    <span className="font-bold text-yellow-400">25+</span> Bank Partners
  </div>

  <div className="rounded-full border border-yellow-400/20 bg-white/10 px-4 py-2">
    <span className="font-bold text-yellow-400">24×7</span> Customer Support
  </div>
</div>
    </motion.section>
  );
}