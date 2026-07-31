import {
  FaTrain,
  FaIdCard,
  FaShieldAlt,
  FaAddressCard,
  FaPassport,
  FaBuilding,
  FaFileInvoice,
  FaMobileAlt,
} from "react-icons/fa";

export default function MoreServices() {
  const services = [
    { icon: <FaTrain className="text-yellow-400" />, name: "Railway Ticket Booking" },
    { icon: <FaIdCard className="text-yellow-400" />, name: "PAN Card Apply" },
    { icon: <FaShieldAlt className="text-yellow-400" />, name: "Insurance Services" },
    { icon: <FaAddressCard className="text-yellow-400" />, name: "Aadhaar Services" },
    { icon: <FaPassport className="text-yellow-400" />, name: "Passport Assistance" },
    { icon: <FaBuilding className="text-yellow-400" />, name: "MSME Registration" },
    { icon: <FaFileInvoice className="text-yellow-400" />, name: "GST Registration" },
    { icon: <FaMobileAlt className="text-yellow-400" />, name: "Recharge & Bill Payment" },
  ];

  return (
    <section className="py-4 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white">
            More Services
          </h2>
          <p className="text-bold-gray-400 mt-3">
            We also provide many additional financial and utility services.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-10 py-3 rounded-full bg-slate-900 border border-slate-800 text-gray-200 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300"
            >
              {service.icon}
              <span>{service.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}