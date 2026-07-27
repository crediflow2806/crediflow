import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            CrediFlow
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            by Krisha Consultancy & Financial Services
          </p>

          <p className="text-gray-400 mt-6 leading-7">
            Smart Credit Solutions with complete transparency,
            trusted support and quick approvals.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-5">
            Our Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Credit Card</li>
            <li>EMI Card to Cash</li>
            <li>Personal Loan</li>
            <li>Business Loan</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-300">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              +91 76000 57005
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              +91 76000 57005
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              connect.crediflow@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              Ahmedabad, Gujarat
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 CrediFlow by Krisha Consultancy & Financial Services.
        All Rights Reserved.
      </div>
    </footer>
  );
}