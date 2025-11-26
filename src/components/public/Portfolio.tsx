"use client";

import Image from "next/image";

import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import serviceRazor from "@/assets/service-razor.jpg";

const Portfolio = () => {
  const portfolioItems = [
    { image: serviceHaircut, alt: "Corte moderno com degradê" },
    { image: serviceBeard, alt: "Barba modelada com perfeição" },
    { image: serviceRazor, alt: "Acabamento com navalha clássica" },
    { image: serviceHaircut, alt: "Estilo executivo refinado" },
    { image: serviceBeard, alt: "Barba e bigode clássicos" },
    { image: serviceRazor, alt: "Tratamento premium completo" },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhos realizados com excelência e atenção aos detalhes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Imagem corrigida */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-foreground font-display text-lg text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
