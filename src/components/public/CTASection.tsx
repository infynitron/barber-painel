"use client";

import { ArrowRightIcon, SparklesIcon, CheckCircle2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-primary">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-foreground/20 backdrop-blur-xl border border-primary-foreground/30 rounded-full mb-8 shadow-2xl">
            <SparklesIcon className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground font-bold">
              14 DIAS GRÁTIS - SEM CARTÃO
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black text-primary-foreground mb-8 leading-tight">
            Pronto para revolucionar
            <br />
            seu negócio?
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Junte-se a mais de 50.000 empresas que já transformaram seus
            agendamentos. Começe gratuitamente hoje mesmo!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="group px-12 py-8 text-xl font-black bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-2xl shadow-2xl hover:shadow-primary-foreground/50 transition-all duration-300 hover:scale-110"
            >
              Começar Agora Grátis
              <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-12 py-8 text-xl font-black text-primary-foreground border-2 border-primary-foreground/50 hover:bg-primary-foreground/10 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105"
            >
              Agendar Demonstração
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <CheckCircle2Icon className="w-5 h-5" />
              <span className="font-semibold">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2Icon className="w-5 h-5" />
              <span className="font-semibold">Configuração em 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2Icon className="w-5 h-5" />
              <span className="font-semibold">Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
