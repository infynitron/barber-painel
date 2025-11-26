import Header from "@/components/public/Header";
import Hero from "@/components/public/Hero";
import About from "@/components/public/About";
import Professional from "@/components/public/Professional";
import App from "@/components/public/App";

export default function Home() {
  // TODO: Desenvolver home
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />
        <About />
        <Professional />
        <App />
      </main>

      {/* TODO: Footer */}
    </div>
  );
}
