"use client";

import React from "react";
import {
  CheckCircle2Icon,
  CalendarIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  ArrowRightIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { benefitsData } from "@/mock";

const icons = [CalendarIcon, SmartphoneIcon, TrendingUpIcon];

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="py-32 bg-gradient-to-br from-background to-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-foreground">Controle total do seu</span>
            <br />
            <span className="text-primary">negócio em um lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Do agendamento ao pagamento, da gestão financeira ao relacionamento
            com o cliente.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {benefitsData.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/50 scale-105"
                    : "bg-card text-foreground hover:bg-muted border-2 border-border hover:border-primary"
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-transform ${
                    activeTab === index ? "scale-110" : "group-hover:scale-110"
                  }`}
                />
                <span>{benefit.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-10 shadow-2xl border border-border">
              <h3 className="text-3xl font-black text-foreground mb-4">
                {benefitsData[activeTab].title}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {benefitsData[activeTab].description}
              </p>

              {/* Metrics */}
              <div className="space-y-4 mb-8">
                {benefitsData[activeTab].metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="group w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Experimentar Agora
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl"></div>

            {/* Main visual */}
            <div className="relative bg-gradient-to-br from-gray-900 to-slate-800 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {activeTab === 0 && (
                <div className="space-y-4">
                  {/* Calendar view */}
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-bold text-gray-900">
                        Agenda Inteligente
                      </h4>
                      <CalendarIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {["D", "S", "T", "Q", "Q", "S", "S"].map((day, i) => (
                        <div
                          key={i}
                          className="text-center text-sm font-bold text-gray-500"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => (
                        <div
                          key={i}
                          className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold ${
                            i === 15
                              ? "bg-primary text-primary-foreground"
                              : i > 0 && i < 32
                              ? "bg-gray-100 text-gray-700 hover:bg-primary/20 cursor-pointer"
                              : "text-gray-300"
                          }`}
                        >
                          {i > 0 && i < 32 ? i : ""}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                      <div className="text-3xl font-bold">87</div>
                      <div className="text-sm opacity-90">Agendamentos</div>
                    </div>
                    <div className="bg-primary rounded-xl p-4 text-primary-foreground">
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-sm opacity-90">Taxa Ocupação</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-4">
                  {/* Mobile mockup */}
                  <div className="bg-white rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                        <SmartphoneIcon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        App do Cliente
                      </h4>
                      <p className="text-sm text-gray-600">Agendar serviço</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Corte de Cabelo",
                        "Manicure",
                        "Design de Sobrancelhas",
                      ].map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-primary/10 transition-colors cursor-pointer group"
                        >
                          <div>
                            <div className="font-bold text-gray-900">
                              {service}
                            </div>
                            <div className="text-sm text-gray-500">
                              45 min - R$ 50,00
                            </div>
                          </div>
                          <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary rounded-xl p-4 text-primary-foreground text-center">
                    <div className="text-sm font-semibold mb-1">
                      ⭐️ Avaliação Média
                    </div>
                    <div className="text-3xl font-bold">4.9/5.0</div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-4">
                  {/* Dashboard */}
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-bold text-gray-900">
                        Dashboard Financeiro
                      </h4>
                      <TrendingUpIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                        <div className="text-sm opacity-90 mb-1">
                          Faturamento Mensal
                        </div>
                        <div className="text-3xl font-bold">R$ 45.890</div>
                        <div className="text-sm flex items-center gap-1 mt-2">
                          <TrendingUpIcon className="w-4 h-4" />
                          <span>+28% vs mês anterior</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-primary/20 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Agendamentos
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            342
                          </div>
                        </div>
                        <div className="bg-primary/20 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">
                            Ticket Médio
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            R$ 134
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
