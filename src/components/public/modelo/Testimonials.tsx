import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      text: "Melhor barbearia que já frequentei! Atendimento impecável e resultado sempre perfeito. Recomendo muito!",
      rating: 5,
    },
    {
      name: "Marcos Vinícius",
      text: "Profissionais extremamente qualificados. O ambiente é top e o cuidado com os detalhes é impressionante.",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      text: "Já sou cliente há 3 anos e não troco por nada. Qualidade excepcional em todos os serviços!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de quem confia no nosso trabalho
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="bg-card border border-border transition-all duration-300 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  “{item.text}”
                </p>

                {/* Nome */}
                <p className="font-display text-lg font-semibold text-foreground">
                  {item.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
