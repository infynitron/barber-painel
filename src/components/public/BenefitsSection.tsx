"use client";

import { useState } from 'react';
import { CheckCircle2, Calendar, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import { benefitsData } from '@/mock';
import { Button } from '@/components/ui/button';

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Calendar, Smartphone, TrendingUp];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-900">Controle total do seu</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              negócio em um lugar
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Do agendamento ao pagamento, da gestão financeira ao relacionamento com o cliente.
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
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/50 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300'
                }`}
              >
                <Icon className={`w-6 h-6 transition-transform ${
                  activeTab === index ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                <span>{benefit.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-200">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                {benefitsData[activeTab].title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {benefitsData[activeTab].description}
              </p>

              {/* Metrics */}
              <div className="space-y-4 mb-8">
                {benefitsData[activeTab].metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-700">{metric}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Experimentar Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl blur-3xl"></div>
            
            {/* Main visual */}
            <div className="relative bg-gradient-to-br from-gray-900 to-slate-800 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {activeTab === 0 && (
                <div className="space-y-4">
                  {/* Calendar view */}
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-bold text-gray-900">Agenda Inteligente</h4>
                      <Calendar className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                        <div key={i} className="text-center text-sm font-bold text-gray-500">{day}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => (
                        <div
                          key={i}
                          className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold ${
                            i === 15
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                              : i > 0 && i < 32
                              ? 'bg-gray-100 text-gray-700 hover:bg-purple-100 cursor-pointer'
                              : 'text-gray-300'
                          }`}
                        >
                          {i > 0 && i < 32 ? i : ''}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                      <div className="text-3xl font-bold">87</div>
                      <div className="text-sm opacity-90">Agendamentos</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
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
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">App do Cliente</h4>
                      <p className="text-sm text-gray-600">Agendar serviço</p>
                    </div>
                    <div className="space-y-3">
                      {['Corte de Cabelo', 'Manicure', 'Design de Sobrancelhas'].map((service, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer group">
                          <div>
                            <div className="font-bold text-gray-900">{service}</div>
                            <div className="text-sm text-gray-500">45 min - R$ 50,00</div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white text-center">
                    <div className="text-sm font-semibold mb-1">⭐️ Avaliação Média</div>
                    <div className="text-3xl font-bold">4.9/5.0</div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-4">
                  {/* Dashboard */}
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xl font-bold text-gray-900">Dashboard Financeiro</h4>
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                        <div className="text-sm opacity-90 mb-1">Faturamento Mensal</div>
                        <div className="text-3xl font-bold">R$ 45.890</div>
                        <div className="text-sm flex items-center gap-1 mt-2">
                          <TrendingUp className="w-4 h-4" />
                          <span>+28% vs mês anterior</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">Agendamentos</div>
                          <div className="text-2xl font-bold text-blue-600">342</div>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                          <div className="text-sm text-gray-600 mb-1">Ticket Médio</div>
                          <div className="text-2xl font-bold text-purple-600">R$ 134</div>
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