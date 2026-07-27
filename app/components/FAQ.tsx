export default function FAQ() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-yellow-400 text-center font-semibold uppercase">
          FAQ
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-yellow-400">
              How long does approval take?
            </h3>

            <p className="text-gray-400 mt-3">
              Most applications are processed within 24 to 48 hours.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-yellow-400">
              Is my information secure?
            </h3>

            <p className="text-gray-400 mt-3">
              Yes. We follow secure and confidential verification processes.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-yellow-400">
              Which services do you provide?
            </h3>

            <p className="text-gray-400 mt-3">
              Credit Cards, Personal Loans, Business Loans, EMI Card to Cash and Financial Solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}