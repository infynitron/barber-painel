import Header from "@/components/public/Header";
import HeroSection from "@/components/public/HeroSection";
import About from "@/components/public/About";
import App from "@/components/public/App";
import Booking from "@/components/public/Booking";
import Footer from "@/components/public/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <About />
        <App />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}
