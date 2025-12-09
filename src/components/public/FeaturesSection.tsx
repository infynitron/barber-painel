"use client";

import {
  SparklesIcon,
  ZapIcon,
  CreditCardIcon,
  BarChart3Icon,
  UsersIcon,
  ShieldIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { featuresData } from "@/mock";

const iconMap: any = {
  Sparkles: SparklesIcon,
  Zap: ZapIcon,
  CreditCard: CreditCardIcon,
  BarChart3: BarChart3Icon,
  Users: UsersIcon,
  Shield: ShieldIcon,
};

const FeaturesSection = () => {
  return (
<section id="recursos" className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 rounded-full mb-6">
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">
              RECURSOS PODEROSOS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-foreground">Tecnologia que</span>
            <br />
            <span className="text-primary">impulsiona resultados</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cada recurso foi pensado para economizar seu tempo, aumentar suas
            vendas e encantar seus clientes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.icon as any] as any;
            return (
              <Card
                key={index}
                className="group relative bg-card border-2 border-border hover:border-transparent shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>
                <div className="absolute inset-[2px] bg-card rounded-3xl"></div>

                <CardContent className="relative z-10 p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Stats badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted group-hover:bg-primary/20 rounded-full transition-colors">
                    <ZapIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-primary">
                      {feature.stats}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
