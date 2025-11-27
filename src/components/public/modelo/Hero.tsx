"use client";

import Image from "next/image";

import heroImage from "@/assets/hero-barber.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          src={heroImage}
          alt="Luxury Barber Shop Interior"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-in zoom-in-20">
          Barbearia <span className="text-primary">Profissional</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6 animate-in zoom-in" />
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-in zoom-in">
          Estilo e Precisão em Cada Detalhe
        </p>
        <p className="text-base md:text-lg mb-12 max-w-xl mx-auto animate-in zoom-in">
          Tradição e modernidade se encontram para criar a experiência perfeita
          em cuidados masculinos
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in zoom-in">
          <Button
            size="lg"
            onClick={() => scrollToSection("booking")}
            className="text-lg"
          >
            Agendar Agora
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="text-lg"
          >
            Ver Serviços
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
