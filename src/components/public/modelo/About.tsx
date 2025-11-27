import { AwardIcon, ShieldIcon, UsersIcon } from "lucide-react";

import settings from "@/components/public/modelo/data";

const features = [
  {
    icon: AwardIcon,
    title: "Tradição",
    description:
      "Mais de 20 anos de experiência em cuidados masculinos de excelência",
  },
  {
    icon: ShieldIcon,
    title: "Qualidade",
    description:
      "Produtos premium e técnicas modernas para resultados impecáveis",
  },
  {
    icon: UsersIcon,
    title: "Atendimento",
    description: "Profissionais qualificados dedicados à sua satisfação",
  },
];

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">{settings.name}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Fundada com a missão de resgatar a tradição das barbearias
            clássicas, aliando-a às técnicas mais modernas do mercado. Nossa
            paixão é realçar o estilo único de cada cliente, proporcionando uma
            experiência premium em um ambiente sofisticado.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada corte, cada detalhe é executado com precisão e cuidado por
            profissionais apaixonados pela arte da barbearia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all delay-100 duration-300 hover:shadow-primary shadow-2xl animate-in zoom-in group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
