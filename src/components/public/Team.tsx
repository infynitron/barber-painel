"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

const Team = () => {
  const team = [
    {
      name: "Ricardo Silva",
      specialty: "Master Barber",
      description:
        "Especialista em cortes clássicos e modernos com mais de 15 anos de experiência",
      image: barber1,
    },
    {
      name: "Felipe Costa",
      specialty: "Barber Stylist",
      description:
        "Expert em degradês e estilos contemporâneos, certificado internacional",
      image: barber2,
    },
    {
      name: "André Martins",
      specialty: "Senior Barber",
      description:
        "Mestre em barbas e navalha tradicional, referência em cuidados masculinos",
      image: barber3,
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa <span className="text-primary">Equipe</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais altamente qualificados e apaixonados pela arte da
            barbearia
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-gold overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6 text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>

                <p className="text-primary font-semibold mb-3">
                  {member.specialty}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
