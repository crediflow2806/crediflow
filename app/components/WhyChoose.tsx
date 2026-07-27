import {
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaHandshake,
  FaCheckCircle,
  FaHome,
} from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
      title: "Trusted Financial Partner",
      description:
        "Professional and transparent financial services you can rely on.",
    },
    {
      icon: <FaBolt className="text-4xl text-yellow-400" />,
      title: "Fast Approval",
      description:
        "Quick processing with minimum documentation and faster approvals.",
    },
    {
      icon: <FaHeadset className="text-4xl text-yellow-400" />,
      title: "Expert Support",
      description:
        "Our experienced team is always ready to guide and support you.",
    },
    {
      icon: <FaHandshake className="text-4xl text-yellow-400" />,
      title: "Transparent Process",
      description:
        "No hidden charges. Honest guidance at every step.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-yellow-400" />,
      title: "High Success Rate",
      description:
        "Helping customers get the best financial solutions with confidence.",
    },
    {
      icon: <FaHome className="text-4xl text-yellow-400" />,
      title: "Doorstep Service",
      description:
        "Convenient doorstep assistance for eligible services.",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
            Why Choose CrediFlow
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Your Trusted Financial Partner
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We provide secure, transparent and customer-focused financial
            solutions with fast service and professional guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}