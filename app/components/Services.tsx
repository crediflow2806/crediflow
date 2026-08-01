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
    <section className="py-6 bg-slate-950">
      <div className="max-w-7xl mx-auto px-2">

        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-center mb-8"
>
          <span className="text-yellow-400 font-semibold tracking-widest uppercase">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Financial Solutions for Everyone
          </h2>

          <p className="text-gray-400 mt-2 max-w-5xl mx-auto">
            CrediFlow provides fast,secure and reliable financial services
            with professional support and complete transparency.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
{/* EMI Card to Cash */}

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/70 to-blue-950/80 backdrop-blur-xl p-6 min-h-[280px] flex flex-col justify-between shadow-[0_10px_35px_rgba(15,23,42,0.45)] hover:border-yellow-400/70 hover:bg-gradient-to-br hover:from-white/15 hover:to-blue-900/90 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_20px_45px_rgba(250,204,21,0.18)] transition-all duration-300 active:scale-95
active:-translate-y-1
active:shadow-2xl
active:shadow-yellow-400/40">
  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-900 text-2xl shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-all duration-300">
    <FaMoneyBillWave />
  </div>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-1000"></div>
  <h3 className="text-xl font-bold text-white mt-5">
  EMI Card to Cash
</h3>

  <p className="text-gray-400 text-sm mt-3">
  Fast & Secure Service
</p>

  <div className="flex items-center justify-between mt-6">

  <button className="group flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-all duration-300">
  Know More
  <span className="group-hover:translate-x-1 transition-transform duration-300">
   →
  </span>
</button>

<div className="flex gap-2 relative">
    <a
      href="tel:+917600057005"
      className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 premium-pulse"
    >
      <FaPhoneAlt />
<span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 premium-pulse"
    >
      <FaWhatsapp />
<span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>
      
    </a>

  </div>

</div>

</div>{/* Credit Card To Bank Transfer */}

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/70 to-blue-950/80 backdrop-blur-xl p-6 min-h-[280px] flex flex-col justify-between shadow-[0_10px_35px_rgba(15,23,42,0.45)] hover:border-yellow-400/70 hover:bg-gradient-to-br hover:from-white/15 hover:to-blue-900/90 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_20px_45px_rgba(250,204,21,0.18)] transition-all duration-300 active:scale-95
active:-translate-y-1
active:shadow-2xl
active:shadow-yellow-400/40">
<div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-900 text-2xl shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-all duration-300">
    <FaWallet />
  </div>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-1000"></div>
  <h3 className="text-xl font-bold text-white mt-5">
  Credit Card To Bank Transfer
</h3>

  <p className="text-gray-400 text-sm mt-3">
  Instant Bank Transfer
</p>

  <div className="flex items-center justify-between mt-6">

  <button className="group flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-all duration-300">
  Know More
  <span className="group-hover:translate-x-1 transition-transform duration-300">
   →
  </span>
</button>

<div className="flex gap-2 relative">
    <a
      href="tel:+917600057005"
      className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 premium-pulse"
    >
      <FaPhoneAlt />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 premium-pulse"
    >
      <FaWhatsapp />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

  </div>

</div>

</div>{/* Credit Card Bill Rotation Service */}

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/70 to-blue-950/80 backdrop-blur-xl p-6 min-h-[280px] flex flex-col justify-between shadow-[0_10px_35px_rgba(15,23,42,0.45)] hover:border-yellow-400/70 hover:bg-gradient-to-br hover:from-white/15 hover:to-blue-900/90 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_20px_45px_rgba(250,204,21,0.18)] transition-all duration-300 active:scale-95
active:-translate-y-1
active:shadow-2xl
active:shadow-yellow-400/40">
<div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-900 text-2xl shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-all duration-300">
    <FaSyncAlt />
  </div>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-1000"></div>
  <h3 className="text-xl font-bold text-white mt-5">
  Credit Card Bill Rotation
</h3>

  <p className="text-gray-400 text-sm mt-3">
  Smart Bill Management
</p>

  <div className="flex items-center justify-between mt-6">

  <button className="group flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-all duration-300">
  Know More
  <span className="group-hover:translate-x-1 transition-transform duration-300">
   →
  </span>
</button>

<div className="flex gap-2 relative">
    <a
      href="tel:+917600057005"
      className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 premium-pulse"
    >
      <FaPhoneAlt />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 premium-pulse"
    >
      <FaWhatsapp />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

  </div>

</div>

</div>{/* Reward Points Redeem */}

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/70 to-blue-950/80 backdrop-blur-xl p-6 min-h-[280px] flex flex-col justify-between shadow-[0_10px_35px_rgba(15,23,42,0.45)] hover:border-yellow-400/70 hover:bg-gradient-to-br hover:from-white/15 hover:to-blue-900/90 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_20px_45px_rgba(250,204,21,0.18)] transition-all duration-300 active:scale-95
active:-translate-y-1
active:shadow-2xl
active:shadow-yellow-400/40">
<div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-900 text-2xl shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-all duration-300">
    <FaWallet />
  </div>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-1000"></div>
  <h3 className="text-xl font-bold text-white mt-5">
  Reward Points Redeem
</h3>

  <p className="text-gray-400 text-sm mt-3">
  Instant Reward Redemption
</p>

  <div className="flex items-center justify-between mt-6">

  <button className="group flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-all duration-300">
  Know More
  <span className="group-hover:translate-x-1 transition-transform duration-300">
   →
  </span>
</button>

<div className="flex gap-2 relative">
    <a
      href="tel:+917600057005"
      className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 premium-pulse"
    >
      <FaPhoneAlt />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 premium-pulse"
    >
      <FaWhatsapp />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

  </div>

</div>

</div>{/* Loan Services */}

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/70 to-blue-950/80 backdrop-blur-xl p-6 min-h-[280px] flex flex-col justify-between shadow-[0_10px_35px_rgba(15,23,42,0.45)] hover:border-yellow-400/70 hover:bg-gradient-to-br hover:from-white/15 hover:to-blue-900/90 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_20px_45px_rgba(250,204,21,0.18)] transition-all duration-300 active:scale-95
active:-translate-y-1
active:shadow-2xl
active:shadow-yellow-400/40">
<div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-900 text-2xl shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-all duration-300">
    <FaMoneyBillWave />
  </div>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-1000"></div>
  <h3 className="text-xl font-bold text-white mt-5">
  Loan Services
</h3>

  <p className="text-gray-400 text-sm mt-3">
  Personal & Business Loans
</p>
  <div className="flex items-center justify-between mt-6">

  <button className="group flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-all duration-300">
  Know More
  <span className="group-hover:translate-x-1 transition-transform duration-300">
   →
  </span>
</button>

<div className="flex gap-2 relative">
    <a
      href="tel:+917600057005"
      className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 premium-pulse"
    >
      <FaPhoneAlt />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 premium-pulse"
    >
      <FaWhatsapp />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

  </div>

</div>

</div>{/* Utility Bill Services */}

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/70 to-blue-950/80 backdrop-blur-xl p-6 min-h-[280px] flex flex-col justify-between shadow-[0_10px_35px_rgba(15,23,42,0.45)] hover:border-yellow-400/70 hover:bg-gradient-to-br hover:from-white/15 hover:to-blue-900/90 hover:-translate-y-2 hover:scale-[1.08] hover:shadow-[0_20px_45px_rgba(250,204,21,0.18)] transition-all duration-300 active:scale-95
active:-translate-y-1
active:shadow-2xl
active:shadow-yellow-400/40">
<div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-500"></div>
  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-900 text-2xl shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-all duration-300">
    <FaWallet />
  </div>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[250%] transition-transform duration-1000"></div>
  <h3 className="text-xl font-bold text-white mt-5">
  Utility Bill Services
</h3>

  <p className="text-gray-400 text-sm mt-3">
  Fast & Secure Bill Payments
</p>
  <div className="flex items-center justify-between mt-6">

  <button className="group flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-all duration-300">
  Know More
  <span className="group-hover:translate-x-1 transition-transform duration-300">
   →
  </span>
</button>

<div className="flex gap-2 relative">
    <a
      href="tel:+917600057005"
      className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 premium-pulse"
    >
      <FaPhoneAlt />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

    <a
      href="https://wa.me/917600057005"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 hover:scale-150 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 premium-pulse"
    >
      <FaWhatsapp />
      <span className="absolute inset-0 rounded-full border border-green-300/40 animate-ping"></span>

    </a>

  </div>

</div>

</div>
        </div>

      </div>
    </section>
  );
}