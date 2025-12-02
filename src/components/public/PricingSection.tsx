"use client";

import React from 'react';
import { Check, Zap, Crown } from 'lucide-react';
import { pricingData } from '@/mock';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PricingSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 relative overflow-hidden" id="planos">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-100 rounded-full mb-6">
            <Crown className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-600">PREÇOS TRANSPARENTES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Planos que cabem</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              no seu bolso
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sem taxa de setup. Sem fidelidade. Cancele quando quiser. Teste grátis por 14 dias.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className={`relative group overflow-hidden transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-none shadow-2xl shadow-purple-500/50 scale-105 md:scale-110'
                  : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl hover:-translate-y-2'
              } rounded-3xl`}
            >
              {plan.highlighted && (
                <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                  <Zap className="w-3 h-3" />
                  POPULAR
                </div>
              )}

              <CardContent className="p-10">
                {/* Plan name */}
                <h3 className={`text-2xl font-black mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-8 ${
                  plan.highlighted ? 'text-purple-100' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  {plan.price === 'Custom' ? (
                    <div className={`text-5xl font-black ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-bold ${
                        plan.highlighted ? 'text-purple-100' : 'text-gray-600'
                      }`}>
                        R$
                      </span>
                      <span className={`text-6xl font-black ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg font-semibold ${
                        plan.highlighted ? 'text-purple-100' : 'text-gray-600'
                      }`}>
                        {plan.period}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted
                          ? 'bg-white/20'
                          : 'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          plan.highlighted ? 'text-white' : 'text-white'
                        }`} />
                      </div>
                      <span className={`text-base font-medium ${
                        plan.highlighted ? 'text-white' : 'text-gray-700'
                      }`}>
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
                      ? 'bg-white text-purple-600 hover:bg-gray-100 shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Falar com Vendas' : 'Começar Agora'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">
            Todas as taxas de pagamento são transparentes e competitivas.
            <br />
            <span className="font-bold text-purple-600">Pix 1,2% | Cartão 2,9% + R$0,30</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;