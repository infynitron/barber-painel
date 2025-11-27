import Header from "@/components/public/modelo/Header";
import Hero from "@/components/public/modelo/Hero";
import About from "@/components/public/modelo/About";
import Team from "@/components/public/modelo/Team";
import Professional from "@/components/public/modelo/Professional";
import App from "@/components/public/modelo/App";
import Testimonials from "@/components/public/modelo/Testimonials";
import Services from "@/components/public/modelo/Services";
import Portfolio from "@/components/public/modelo/Portfolio";
import Booking from "@/components/public/modelo/Booking";
import Footer from "@/components/public/modelo/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <About />
        <Team />
        <Professional />
        <App />
        <Testimonials />
        <Services />
        <Portfolio />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}
