"use client";

import React from "react";

import ReportMetricCard from "@/components/public/ReportMetricCard";
import ServiceBarChart from "@/components/public/ServiceBarChart";
import PaymentMethodsChart from "@/components/public/PaymentMethodsChart";
import BarberRankingTable from "@/components/public/BarberRankingTable";
import AppointmentsTable from "@/components/public/AppointmentsTable";

import { ReportPeriod } from "@/modules/producer/cash-flow/reports/reports";
import ReportsHeader from "@/modules/producer/cash-flow/reports/ui/ReportsHeader";

import { metrics } from "@/mock";

export default function ReportsComponent() {
  const [selectedPeriod, setSelectedPeriod] =
    React.useState<ReportPeriod>("month");

  const items = metrics;

  return (
    <div className="min-h-screen space-y-4">
      <ReportsHeader
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

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
  );
}
