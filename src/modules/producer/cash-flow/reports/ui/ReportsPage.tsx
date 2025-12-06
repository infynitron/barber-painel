"use client";

import React from "react";

import { MetricCardComponent, MetricCardProps } from "@/components/MetricCard";
import ServiceBarChart from "@/components/public/ServiceBarChart";
import PaymentMethodsChart from "@/components/public/PaymentMethodsChart";
import AppointmentsTable from "@/components/public/AppointmentsTable";

import { formatCurrency } from "@/modules/shared/utils";

import { BarberRankingTable } from "@/modules/producer/teams/ui/BarberRankingTable";
import { ITeamRanking } from "@/modules/producer/teams/teams";
import { TeamsService } from "@/modules/producer/teams/team.service";

import {
  IReport,
  ReportPeriod,
} from "@/modules/producer/cash-flow/reports/reports";

import { ReportsService } from "@/modules/producer/cash-flow/reports/reports.service";

import ReportsHeader from "@/modules/producer/cash-flow/reports/ui/ReportsHeader";

export default function ReportsComponent() {
  const [selectedPeriod, setSelectedPeriod] =
    React.useState<ReportPeriod>("month");

  const [reports, setReports] = React.useState<IReport | undefined>();
  const [rankingTeams, setRankingTeams] = React.useState<ITeamRanking[]>([]);

  // TODO: React Query
  React.useEffect(() => {
    const fetch = async () => {
      const data = await new ReportsService().getByPeriod({
        period: selectedPeriod,
      });
      setReports(data);
    };

    fetch();
  }, []);

  // TODO: React Query
  React.useEffect(() => {
    const fetch = async () => {
      const items = await new TeamsService().rankingByBarber();
      setRankingTeams(items);
    };

    fetch();
  }, []);

  const cards = React.useMemo<MetricCardProps[]>(() => {
    if (!reports) return [];

    return [
      {
        value: formatCurrency(reports.totalRevenue.value),
        title: "Faturamento Total",
        subtitle: `${reports.workingDays} dias trabalhados`,
        icon: {
          name: "DollarSignIcon",
          color: "text-green-500",
          background_color: "bg-green-500/10",
        },
        trend: {
          label: "vs mês anterior",
          direction: reports.totalRevenue.growthRate >= 0 ? "up" : "down",
          value:
            reports.totalRevenue.growthRate >= 0
              ? `+${reports.totalRevenue.growthRate}%`
              : `-${reports.totalRevenue.growthRate}%`,
        },
      },
      {
        value: `${reports.totalClients.value}`,
        title: "Total de Clientes",
        subtitle: "Atendimentos realizados",
        icon: {
          name: "UsersIcon",
          color: "text-blue-500",
          background_color: "bg-blue-500/10",
        },
        trend: {
          label: "novos clientes",
          direction: reports.totalClients.growthRate >= 0 ? "up" : "down",
          value:
            reports.totalClients.growthRate >= 0
              ? `+${reports.totalClients.growthRate}%`
              : `-${reports.totalClients.growthRate}%`,
        },
      },
      {
        value: formatCurrency(reports.averageTicket.value),
        title: "Ticket Médio",
        subtitle: "Valor médio por cliente",
        icon: {
          name: "ReceiptIcon",
          color: "text-purple-500",
          background_color: "bg-purple-500/10",
        },
        trend: {
          label: "vs mês anterior",
          direction: reports.averageTicket.growthRate >= 0 ? "up" : "down",
          value:
            reports.averageTicket.growthRate >= 0
              ? `+${reports.averageTicket.growthRate}%`
              : `-${reports.averageTicket.growthRate}%`,
        },
      },
      {
        value: `${reports.topService.service.name}`,
        title: "Serviço Top",
        subtitle: "Mais vendido do mês",
        icon: {
          name: "AwardIcon",
          color: "text-orange-500",
          background_color: "bg-orange-500/10",
        },
        trend: {
          direction: reports.topService.count >= 0 ? "up" : "down",
          value:
            reports.topService.count >= 0
              ? `+${reports.topService.count}`
              : `-${reports.topService.count}`,
          label: "até o momento",
        },
      },
    ];
  }, [reports]);

  return (
    <div className="min-h-screen space-y-4">
      <ReportsHeader
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((metric, index) => (
          <MetricCardComponent key={"metric_card_" + index} {...metric} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ServiceBarChart />
        <PaymentMethodsChart />
      </div>

      <BarberRankingTable
        period={selectedPeriod}
        items={rankingTeams}
        loading={false}
      />

      <AppointmentsTable />
    </div>
  );
}
