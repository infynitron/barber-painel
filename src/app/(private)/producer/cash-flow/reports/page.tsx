"use client";

import React from "react";

import { ReportPeriod } from "@/modules/producer/cash-flow/reports/reports";
import { ReportsComponent } from "@/modules/producer/cash-flow/reports/ui/ReportsPage";

export default function ProducerCashFlowReportsPage() {
  const [period, setPreriod] = React.useState<ReportPeriod>("week");

  // TODO: URL with Filtros
  return <ReportsComponent period={period} customerRecent="" />;
}
