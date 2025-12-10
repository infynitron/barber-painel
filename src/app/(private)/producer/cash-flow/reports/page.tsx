"use client";

import React from "react";

import { ReportPeriod } from "@/modules/producer/cash-flow/reports/reports";
import { CashFlowReports } from "@/modules/producer/cash-flow/reports/ui/ReportsPage";

export default function ProducerCashFlowReportsPage() {
  // TODO: URL with Filtros
  const [period, setPreriod] = React.useState<ReportPeriod>("week");

  return <CashFlowReports period={period} customerRecent="" />;
}
