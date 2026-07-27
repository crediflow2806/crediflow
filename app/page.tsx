import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MoreServices from "./components/MoreServices";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import FAQ from "./components/FAQ";
import PartnerBanks from "./components/PartnerBanks";
import CTA from "./components/CTA";
import HowItWorks from "./components/HowItWorks";
import {
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white">

      

     <Navbar />

      <Hero />

      <Services />
      <MoreServices />
      <HowItWorks />
      <About />
      <Contact />
      <Testimonials />
      <WhyChoose />
      <PartnerBanks />
      <FAQ />
      <CTA />
      <Footer />   
      <FloatingButtons />
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917600057005"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-4xl" />
      </a>

      {/* Back To Top */}
      <a
        href="#"
        className="fixed bottom-24 right-6 bg-yellow-400 text-slate-900 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        title="Back to Top"
      >
        <FaArrowUp className="text-xl" />
      </a>

    </main>
  );
}