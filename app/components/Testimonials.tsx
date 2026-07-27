export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-400 font-semibold uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold mt-4">
          What Our Customers Say
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Thousands of customers trust CrediFlow for fast approvals,
          transparent service and professional financial guidance.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300">
              Amazing service. My credit card process was completed
              within one day.
            </p>

            <h3 className="mt-6 text-xl font-bold">
              Rahul Patel
            </h3>

            <p className="text-gray-500">
              Ahmedabad
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300">
              Professional guidance and excellent support throughout the process.
            </p>

            <h3 className="mt-6 text-xl font-bold">
              Neha Shah
            </h3>

            <p className="text-gray-500">
              Surat
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-yellow-400 transition">
            <div className="text-yellow-400 text-2xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300">
              Highly recommended for Personal Loan and Business Loan services.
            </p>

            <h3 className="mt-6 text-xl font-bold">
              Amit Mehta
            </h3>

            <p className="text-gray-500">
              Rajkot
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}