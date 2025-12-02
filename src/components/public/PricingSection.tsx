"use client";

import React from "react";
import { Check, Zap, Crown } from "lucide-react";
import { pricingData } from "@/mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section
      className="py-32 bg-gradient-to-br from-background to-card relative overflow-hidden"
      id="planos"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 rounded-full mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">
              PREÇOS TRANSPARENTES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-foreground">Planos que cabem</span>
            <br />
            <span className="text-primary">no seu bolso</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sem taxa de setup. Sem fidelidade. Cancele quando quiser. Teste
            grátis por 14 dias.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className={`relative group overflow-hidden transition-all duration-500 ${
                plan.highlighted
                  ? "bg-primary border-none shadow-2xl shadow-primary/50 scale-105 md:scale-110"
                  : "bg-card border-2 border-border hover:border-primary hover:shadow-xl hover:-translate-y-2"
              } rounded-3xl`}
            >
              {plan.highlighted && (
                <div className="absolute top-6 right-6 bg-primary-foreground text-primary px-4 py-2 rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                  <Zap className="w-3 h-3" />
                  POPULAR
                </div>
              )}

              <CardContent className="p-10">
                {/* Plan name */}
                <h3
                  className={`text-2xl font-black mb-2 ${
                    plan.highlighted
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-8 ${
                    plan.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  {plan.price === "Custom" ? (
                    <div
                      className={`text-5xl font-black ${
                        plan.highlighted
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-2xl font-bold ${
                          plan.highlighted
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        R$
                      </span>
                      <span
                        className={`text-6xl font-black ${
                          plan.highlighted
                            ? "text-primary-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-lg font-semibold ${
                          plan.highlighted
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.highlighted
                            ? "bg-primary-foreground/20"
                            : "bg-primary"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 ${
                            plan.highlighted
                              ? "text-primary-foreground"
                              : "text-primary-foreground"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-base font-medium ${
                          plan.highlighted
                            ? "text-primary-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`w-full py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                  }`}
                >
                  {plan.price === "Custom"
                    ? "Falar com Vendas"
                    : "Começar Agora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            Todas as taxas de pagamento são transparentes e competitivas.
            <br />
            <span className="font-bold text-primary">
              Pix 1,2% | Cartão 2,9% + R$0,30
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
