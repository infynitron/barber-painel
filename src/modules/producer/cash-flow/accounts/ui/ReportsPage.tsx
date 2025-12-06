"use client";

import { useState } from "react";
import {
  ReceiptIcon,
  AwardIcon,
  DollarSignIcon,
  UsersIcon,
} from "lucide-react";

import ReportMetricCard from "@/components/public/ReportMetricCard";
import ServiceBarChart from "@/components/public/ServiceBarChart";
import PaymentMethodsChart from "@/components/public/PaymentMethodsChart";
import BarberRankingTable from "@/components/public/BarberRankingTable";
import AppointmentsTable from "@/components/public/AppointmentsTable";

import { formatCurrency } from "@/modules/shared/utils";

import { monthlyMetrics } from "@/mock";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const metrics = [
    {
      title: "Faturamento Total",
      value: formatCurrency(monthlyMetrics.totalRevenue),
      subtitle: `${monthlyMetrics.workingDays} dias trabalhados`,
      icon: DollarSignIcon,
      iconBgColor: "bg-green-500/10",
      iconColor: "text-green-500",
      trend: {
        direction: "up",
        value: `+${monthlyMetrics.growthRate}%`,
        label: "vs mês anterior",
      },
    },
    {
      title: "Total de Clientes",
      value: monthlyMetrics.totalClients,
      subtitle: "Atendimentos realizados",
      icon: UsersIcon,
      iconBgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
      trend: {
        direction: "up",
        value: "+8.5%",
        label: "novos clientes",
      },
    },
    {
      title: "Ticket Médio",
      value: formatCurrency(monthlyMetrics.averageTicket),
      subtitle: "Valor médio por cliente",
      icon: ReceiptIcon,
      iconBgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
      trend: {
        direction: "up",
        value: "+5.2%",
        label: "vs mês anterior",
      },
    },
    {
      title: "Serviço Top",
      value: monthlyMetrics.topService,
      subtitle: "Mais vendido do mês",
      icon: AwardIcon,
      iconBgColor: "bg-orange-500/10",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a0b]">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Relatórios</h1>
              <p className="text-sm text-gray-400 mt-1">
                Análise completa do desempenho
              </p>
            </div>

            {/* Period Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedPeriod("week")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedPeriod === "week"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Semana
              </button>
              <button
                onClick={() => setSelectedPeriod("month")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedPeriod === "month"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Mês
              </button>
              <button
                onClick={() => setSelectedPeriod("year")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedPeriod === "year"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Ano
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <ReportMetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ServiceBarChart />
          <PaymentMethodsChart />
        </div>

        {/* Barber Ranking */}
        <div className="mb-8">
          <BarberRankingTable />
        </div>

        {/* Appointments Table */}
        <AppointmentsTable />
      </div>
    </div>
  );
};

export default Reports;
