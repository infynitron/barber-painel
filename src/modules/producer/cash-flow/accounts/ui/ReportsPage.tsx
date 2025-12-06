"use client";

import React from "react";

import ReportMetricCard from "@/components/public/ReportMetricCard";
import ServiceBarChart from "@/components/public/ServiceBarChart";
import PaymentMethodsChart from "@/components/public/PaymentMethodsChart";
import BarberRankingTable from "@/components/public/BarberRankingTable";
import AppointmentsTable from "@/components/public/AppointmentsTable";

import { metrics } from "@/mock";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = React.useState("month");

  const items = metrics;

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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedPeriod === "week"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
                onClick={() => setSelectedPeriod("week")}
              >
                Semana
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedPeriod === "month"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
                onClick={() => setSelectedPeriod("month")}
              >
                Mês
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedPeriod === "year"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
                onClick={() => setSelectedPeriod("year")}
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
          {items.map((metric, index) => (
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
