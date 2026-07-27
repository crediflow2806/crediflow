import { FaWhatsapp, FaPhoneAlt, FaRocket } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-3xl border border-blue-700/50 bg-white/5 backdrop-blur-xl shadow-2xl">

          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

          <div className="relative z-10 px-8 py-14 md:px-16 md:py-20 text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-slate-900 font-bold shadow-lg">
              <FaRocket />
              <span>Get Started Today</span>
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Ready To Grow With{" "}
              <span className="text-yellow-400">
                CrediFlow?
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
              Get expert guidance for Credit Cards, EMI Card to Cash,
              Personal Loans and Business Loans with fast approvals,
              transparent process and trusted financial support.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">

              <a
                href="https://wa.me/917600057005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
              >
                <FaWhatsapp className="text-2xl" />
                Chat on WhatsApp
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-xl border-2 border-yellow-400 px-8 py-4 text-lg font-bold text-yellow-400 transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-slate-900"
              >
                <FaPhoneAlt />
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}