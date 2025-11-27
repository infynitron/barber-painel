import Header from "@/components/public/Header";
import Hero from "@/components/public/Hero";
import About from "@/components/public/About";
import App from "@/components/public/App";
import Booking from "@/components/public/Booking";
import Footer from "@/components/public/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <About />
        <App />
        <Booking />
      </main>

      <Footer />
    </div>
  );
}
