export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
      <div>
        <h1 className="text-3xl font-bold text-yellow-400">
          CrediFlow
        </h1>

        <p className="text-xs text-gray-400">
          by Krisha Consultancy & Financial Services
        </p>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <a
        href="https://wa.me/917600057005"
        target="_blank"
        className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300"
      >
        Apply Now
      </a>
    </nav>
  );
}