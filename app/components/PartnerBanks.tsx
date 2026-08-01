export default function PartnerBanks() {
  const banks = [
    "HDFC BANK",
    "ICICI BANK",
    "SBI CARDS",
    "AXIS BANK",
    "IDFC FIRST BANK",
    "AU SMALL FINANCE BANK",
    "INDUSIND BANK",
    "YES BANK",
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            TRUSTED NETWORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Leading Banks We Serve
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We assist customers with credit cards,loans and financial services across leading banks in India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {banks.map((bank) => (
            <div
              key={bank}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-yellow-400 hover:scale-105 transition duration-300"
            >
              <h3 className="text-white font-bold text-lg">{bank}</h3>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-8 max-w-3xl mx-auto">
We assist customers with services related to these banks. CrediFlow is an independent financial consultancy and does not claim official partnership unless specifically stated.
</p>
      </div>
    </section>
  );
}