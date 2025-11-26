import Header from "@/components/public/Header";
import Hero from "@/components/public/Hero";
import Team from "@/components/public/Team";
import About from "@/components/public/About";
import Professional from "@/components/public/Professional";
import App from "@/components/public/App";
import Booking from "@/components/public/Booking";
import Testimonials from "@/components/public/Testimonials";
import Services from "@/components/public/Services";

export default function Home() {
  // TODO: Desenvolver home
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
        <Booking />
      </main>

      {/* TODO: Footer */}
    </div>
  );
}
