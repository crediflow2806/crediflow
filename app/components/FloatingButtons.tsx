import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/917600057005"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      <a
        href="#"
        className="fixed bottom-24 right-6 bg-yellow-400 text-slate-900 p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <FaArrowUp className="text-xl" />
      </a>
    </>
  );
}