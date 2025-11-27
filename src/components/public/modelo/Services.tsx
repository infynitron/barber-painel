"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import serviceHaircut from "@/assets/service-haircut.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import serviceRazor from "@/assets/service-razor.jpg";

const Services = () => {
  const services = [
    {
      name: "Corte Tradicional",
      description: "Corte clássico com acabamento perfeito e design personalizado",
      price: "R$ 80",
      image: serviceHaircut,
    },
    {
      name: "Barba Completa",
      description: "Modelagem, hidratação e finalização com produtos premium",
      price: "R$ 60",
      image: serviceBeard,
    },
    {
      name: "Navalha Clássica",
      description: "Experiência tradicional com navalha, toalha quente e produtos especiais",
      price: "R$ 90",
      image: serviceRazor,
    },
    {
      name: "Pacote Premium",
      description: "Corte + Barba + Navalha + Tratamentos exclusivos",
      price: "R$ 200",
      image: serviceHaircut,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serviços especializados com técnicas modernas e produtos de alta qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-gold overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
