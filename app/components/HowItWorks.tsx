import {
  FaClipboardList,
  FaFileAlt,
  FaCheckCircle,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaClipboardList className="text-4xl text-yellow-400" />,
      title: "Apply Online",
      desc: "Share your basic details and choose the financial service you need.",
    },
    {
      icon: <FaFileAlt className="text-4xl text-blue-400" />,
      title: "Document Verification",
      desc: "Our experts verify your documents quickly and securely.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-green-400" />,
      title: "Approval Process",
      desc: "We coordinate with banking partners for the fastest possible approval.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-purple-400" />,
      title: "Get Your Service",
      desc: "Receive your approved financial service with complete transparency.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-2 text-slate-900 font-bold">
            🚀 Simple Process
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
            How <span className="text-yellow-400">CrediFlow</span> Works
          </h2>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto text-lg">
            A simple, transparent and hassle-free process designed to help you
            get the right financial solution quickly.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-blue-800 bg-white/5 backdrop-blur-lg p-8 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>

              <div className="absolute top-5 right-5 text-yellow-400 font-bold text-xl">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-300 leading-7">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}