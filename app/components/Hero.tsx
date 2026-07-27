"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.section
  className="flex flex-col items-center justify-center text-center py-28 px-6"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
      <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-400">
  Smart Credit.
</h2>

      <h2 className="text-4xl md:text-6xl font-extrabold mt-2 text-white">
  Simple Growth.
</h2>

      <p className="text-gray-300 max-w-2xl mt-8 text-lg leading-8">
        Premium Credit Card, Personal Loan, Business Loan &
        Financial Services across Gujarat.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 mt-10">
        <a
          href="https://wa.me/917600057005"
          target="_blank"
          className="bg-yellow-400 text-slate-900 w-full sm:w-auto px-8 py-4 rounded-xl font-bold hover:bg-yellow-300"
        >
          Apply Now
        </a>

        <a
          href="tel:+917600057005"
          className="border border-yellow-400 text-yellow-400 w-full sm:w-auto px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-slate-900 transition"
        >
          Call Now
        </a>
      </div>
    </motion.section>
  );
}