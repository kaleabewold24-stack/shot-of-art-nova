import Cursor from "../components/Cursor";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Marquee from "../sections/Marquee";
import Experiences from "../sections/Experiences";
import HowItWorks from "../sections/HowItWorks";
import Stats from "../sections/Stats";
import Faq from "../sections/Faq";
import Booking from "../sections/Booking";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f4f2ee]">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Experiences />
        <HowItWorks />
        <Stats />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
