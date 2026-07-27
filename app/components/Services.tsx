"use client";

import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaWallet,
  FaPhoneAlt,
  FaWhatsapp,
  FaSyncAlt,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
          <span className="text-yellow-400 font-semibold tracking-widest uppercase">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Financial Solutions for Everyone
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            CrediFlow provides fast, secure and reliable financial services
            with professional support and complete transparency.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
{/* EMI Card to Cash */}

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-xl">

  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-3xl">
    <FaMoneyBillWave />
  </div>

  <h3 className="text-3xl font-bold text-white mt-6">
    EMI Card to Cash
  </h3>

  <p className="text-gray-400 mt-4">
    Convert your EMI Card Limit into Cash quickly with a secure,
    transparent and hassle-free process.
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔️ Fast Processing</li>
    <li>✔️ Secure Transaction</li>
    <li>✔️ Instant Support</li>
    <li>✔️ Trusted Service</li>
  </ul>

  <div className="grid grid-cols-3 gap-3 mt-8">

    <a
      href="#contact"
      className="bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Apply
    </a>

    <a
      href="tel:+917600057005"
      className="bg-blue-700 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
    >
      <FaPhoneAlt />
    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-500 transition"
    >
      <FaWhatsapp />
    </a>

  </div>

</div>{/* Credit Card Bank Transfer */}

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-xl">

  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-3xl">
    <FaWallet />
  </div>

  <h3 className="text-3xl font-bold text-white mt-6">
    Credit Card Bank Transfer
  </h3>

  <p className="text-gray-400 mt-4">
    Transfer your Credit Card Limit directly to your Bank Account with a secure, fast and reliable process.
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔️ Direct Bank Transfer</li>
    <li>✔️ Safe & Secure</li>
    <li>✔️ Fast Processing</li>
    <li>✔️ Professional Support</li>
  </ul>

  <div className="grid grid-cols-3 gap-3 mt-8">

    <a
      href="#contact"
      className="bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Apply
    </a>

    <a
      href="tel:+917600057005"
      className="bg-blue-700 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
    >
      <FaPhoneAlt />
    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-500 transition"
    >
      <FaWhatsapp />
    </a>

  </div>

</div>{/* Credit Card Bill Rotation Service */}

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-xl">

  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-3xl">
    <FaSyncAlt />
  </div>

  <h3 className="text-3xl font-bold text-white mt-6">
    Credit Card Bill Rotation
  </h3>

  <p className="text-gray-400 mt-4">
    Rotate your Credit Card Bills smartly to maintain better cash flow with secure and reliable assistance.
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔️ Smart Bill Management</li>
    <li>✔️ Better Cash Flow</li>
    <li>✔️ Secure Process</li>
    <li>✔️ Professional Support</li>
  </ul>

  <div className="grid grid-cols-3 gap-3 mt-8">

    <a
      href="#contact"
      className="bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Apply
    </a>

    <a
      href="tel:+917600057005"
      className="bg-blue-700 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
    >
      <FaPhoneAlt />
    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-500 transition"
    >
      <FaWhatsapp />
    </a>

  </div>

</div>{/* Reward Points Redeem */}

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-xl">

  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-3xl">
    <FaWallet />
  </div>

  <h3 className="text-3xl font-bold text-white mt-6">
    Reward Points Redeem
  </h3>

  <p className="text-gray-400 mt-4">
    Convert your Credit Card Reward Points into valuable benefits with a quick, secure and hassle-free redemption process.
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔️ Maximum Reward Value</li>
    <li>✔️ Instant Redemption</li>
    <li>✔️ Secure Process</li>
    <li>✔️ Expert Assistance</li>
  </ul>

  <div className="grid grid-cols-3 gap-3 mt-8">

    <a
      href="#contact"
      className="bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Apply
    </a>

    <a
      href="tel:+917600057005"
      className="bg-blue-700 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
    >
      <FaPhoneAlt />
    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-500 transition"
    >
      <FaWhatsapp />
    </a>

  </div>

</div>{/* Loan Services */}

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-xl">

  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-3xl">
    <FaMoneyBillWave />
  </div>

  <h3 className="text-3xl font-bold text-white mt-6">
    Loan Services
  </h3>

  <p className="text-gray-400 mt-4">
    Get the right loan solution with quick approval, minimum documentation and professional guidance for all your financial needs.
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔️ Personal Loan</li>
    <li>✔️ Business Loan</li>
    <li>✔️ Home Loan</li>
    <li>✔️ Mortgage Loan</li>
  </ul>

  <div className="grid grid-cols-3 gap-3 mt-8">

    <a
      href="#contact"
      className="bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Apply
    </a>

    <a
      href="tel:+917600057005"
      className="bg-blue-700 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
    >
      <FaPhoneAlt />
    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-500 transition"
    >
      <FaWhatsapp />
    </a>

  </div>

</div>{/* Utility Bill Services */}

<div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-xl">

  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-3xl">
    <FaWallet />
  </div>

  <h3 className="text-3xl font-bold text-white mt-6">
    Utility Bill Services
  </h3>

  <p className="text-gray-400 mt-4">
    Pay your utility bills quickly and securely with reliable assistance and hassle-free service.
  </p>

  <ul className="mt-6 space-y-3 text-gray-300">
    <li>✔️ Electricity Bill</li>
    <li>✔️ Gas Bill</li>
    <li>✔️ Water Bill</li>
    <li>✔️ Mobile & DTH Recharge</li>
    <li>✔️ Credit Card Bill Payment</li>
    <li>✔️ Loan Repayment</li>
  </ul>

  <div className="grid grid-cols-3 gap-3 mt-8">

    <a
      href="#contact"
      className="bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
    >
      Apply
    </a>

    <a
      href="tel:+917600057005"
      className="bg-blue-700 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
    >
      <FaPhoneAlt />
    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-500 transition"
    >
      <FaWhatsapp />
    </a>

  </div>

</div>
        </div>

      </div>
    </section>
  );
}