export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-semibold">
            About CrediFlow
          </span>

          <h2 className="text-5xl font-extrabold text-white mt-6">
            Trusted Financial{" "}
            <span className="text-yellow-400">Partner</span>
          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-8">
            CrediFlow by Krisha Consultancy & Financial Services helps
            customers with Credit Cards, EMI Card to Cash, Personal Loans,
            Business Loans, Credit Card Bill Rotation, Credit Card to Bank
            Transfer, Reward Point Redeem and many other financial services.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-yellow-400">1000+</h3>
              <p className="text-gray-300 mt-2">Happy Customers</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-yellow-400">8+</h3>
              <p className="text-gray-300 mt-2">Financial Services</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-950 rounded-3xl p-10">
          <h3 className="text-4xl font-bold text-yellow-400 mb-8">
            Why Choose Us?
          </h3>

          <ul className="space-y-5 text-white text-lg">
            <li>✅ Trusted Consultancy</li>
            <li>✅ Fast Approval</li>
            <li>✅ Transparent Process</li>
            <li>✅ Minimum Documentation</li>
            <li>✅ Customer First Approach</li>
            <li>✅ Secure & Confidential</li>
          </ul>
        </div>

      </div>
    </section>
  );
}