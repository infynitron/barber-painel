"use client";

import React from "react";

import { FilterPeriod } from "@/components/FilterPeriod";
import { MetricCardComponent, MetricCardProps } from "@/components/MetricCard";

import { formatCurrency, periods } from "@/modules/shared/utils";

import {
  IReport,
  ReportPeriod,
} from "@/modules/producer/cash-flow/reports/reports";

import { ReportsService } from "@/modules/producer/cash-flow/reports/reports.service";

import { ITeamRanking } from "@/modules/producer/teams/teams";
import { TeamsService } from "@/modules/producer/teams/team.service";
import { TeamRanking } from "@/modules/producer/teams/ui/TeamRanking";

import { ICustomerServiceRecent } from "@/modules/producer/customer/customer";
import { CustomerService } from "@/modules/producer/customer/customer.service";
import { CustomerRecentServices } from "@/modules/producer/customer/ui/CustomerRecentServices";

import { IPaymentDistribution } from "@/modules/producer/cash-flow/payments/payment";
import { PaymentService } from "@/modules/producer/cash-flow/payments/payment.service";
import { PaymentDistributionChart } from "@/modules/producer/cash-flow/payments/ui/PaymentDistributionChart";

import { IServiceBestSelling } from "@/modules/producer/services/service";
import { ServicesService } from "@/modules/producer/services/service.service";
import { BestsellingServicesChart } from "@/modules/producer/services/ui/BestsellingServicesChart";

interface CashFlowReportsProps {
  period: ReportPeriod;
  customerRecent: string;
}

export const CashFlowReports = ({
  period,
  customerRecent,
}: CashFlowReportsProps) => {
  // TODO: reports
  const [reports, setReports] = React.useState<IReport | undefined>();

  // TODO: rankingTeams
  const [rankingTeams, setRankingTeams] = React.useState<ITeamRanking[]>([]);

  // TODO: customerServiceRecent
  const [customerServiceRecent, setCustomerServiceRecent] = React.useState<
    ICustomerServiceRecent[]
  >([]);

  // TODO: paymentDistribution
  const [paymentDistribution, setPaymentDistribution] = React.useState<
    IPaymentDistribution[]
  >([]);

  // TODO: serviceBestSelling
  const [serviceBestSelling, setServiceBestSelling] = React.useState<
    IServiceBestSelling[]
  >([]);

  // TODO: React Query
  React.useEffect(() => {
    const fetch = async () => {
      const data = await new ReportsService().getByPeriod({ period });
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

  // TODO: React Query
  React.useEffect(() => {
    const fetch = async () => {
      const items = await new CustomerService().serviceRecents();
      setCustomerServiceRecent(items);
    };

    fetch();
  }, []);

  // TODO: React Query
  React.useEffect(() => {
    const fetch = async () => {
      const items = await new PaymentService().paymentDistribution();
      setPaymentDistribution(items);
    };

    fetch();
  }, []);

  // TODO: React Query
  React.useEffect(() => {
    const fetch = async () => {
      const items = await new ServicesService().bestSelling({ period });
      setServiceBestSelling(items);
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
          background_color:
            reports.totalRevenue.value >= 0
              ? "bg-green-500/10"
              : "bg-red-500/10",
        },
        trend: {
          label: `vs ${periods[period].toLowerCase()} anterior`,
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
          label: `vs ${periods[period].toLowerCase()} anterior`,
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
          label: `vs ${periods[period].toLowerCase()} anterior`,
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
          label: `vs ${periods[period].toLowerCase()} anterior`,
          direction: reports.topService.count >= 0 ? "up" : "down",
          value:
            reports.topService.count >= 0
              ? `+${reports.topService.count}`
              : `-${reports.topService.count}`,
        },
      },
    ];
  }, [reports]);

  return (
    <div className="min-h-screen space-y-4">
      <FilterPeriod
        title="Relatórios"
        subtitle="Análise completa do desempenho"
        selectedPeriod={period}
        togglePeriod={(newPeriod) => {
          // TODO: togglePeriod
        }}
      />

      {/* TODO: MetricCardsComponent with skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((metric, index) => (
          <MetricCardComponent key={"metric_card_" + index} {...metric} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BestsellingServicesChart items={serviceBestSelling} loading={false} />
        <PaymentDistributionChart items={paymentDistribution} loading={false} />
      </div>

      <TeamRanking items={rankingTeams} loading={false} />

      <CustomerRecentServices
        items={customerServiceRecent}
        total={customerServiceRecent.length}
        loading={false}
        searchTerm={customerRecent}
        setSearchTerm={() => {
          // TODO: setSearchTerm
        }}
      />

      {/* TODO: Exibir tabela de pagamentos recentes */}
    </div>
  );
};
