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

import { ICustomerRecentService } from "@/modules/producer/customer/customer";
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

  // TODO: teamsRanking
  const [teamsRanking, setteamsRanking] = React.useState<ITeamRanking[]>([]);
  const [teamsRankingLoading, setTeamsRankingLoading] = React.useState(false);

  // TODO: customerServiceRecent
  const [customerServiceRecent, setCustomerServiceRecent] = React.useState<
    ICustomerRecentService[]
  >([]);
  const [serviceRecentLoading, setServiceRecentLoading] = React.useState(false);

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
    setTeamsRankingLoading(true);

    const fetch = async () => {
      const items = await new TeamsService().rankingByBarber();
      setteamsRanking(items);

      setTimeout(() => setTeamsRankingLoading(false), 1000 * 5);
    };

    fetch();
  }, []);

  // TODO: React Query
  React.useEffect(() => {
    setServiceRecentLoading(true);

    const fetch = async () => {
      const items = await new CustomerService().serviceRecents();
      setCustomerServiceRecent(items);

      setTimeout(() => setServiceRecentLoading(false), 1000 * 5);
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
        value: formatCurrency(reports.revenue.total),
        title: "Faturamento Total",
        subtitle: `${reports.revenue.workingDays} dias trabalhados`,
        icon: {
          name: "DollarSignIcon",
          color: "text-green-500",
          background_color: "bg-green-500/10",
        },
        trend: {
          label: `vs ${periods[period].toLowerCase()} anterior`,
          direction: reports.revenue.growthRate >= 0 ? "up" : "down",
          value:
            reports.revenue.growthRate >= 0
              ? `+${reports.revenue.growthRate}%`
              : `-${reports.revenue.growthRate}%`,
        },
      },
      {
        value: `${reports.clients.total}`,
        title: "Total de Clientes",
        subtitle: `${reports.clients.servicesProvided} atendimentos realizados`,
        icon: {
          name: "UsersIcon",
          color: "text-blue-500",
          background_color: "bg-blue-500/10",
        },
        trend: {
          label: `vs ${periods[period].toLowerCase()} anterior`,
          direction: reports.clients.growthRate >= 0 ? "up" : "down",
          value:
            reports.clients.growthRate >= 0
              ? `+${reports.clients.growthRate}%`
              : `-${reports.clients.growthRate}%`,
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

      <TeamRanking items={teamsRanking} loading={teamsRankingLoading} />

      <CustomerRecentServices
        items={customerServiceRecent}
        total={customerServiceRecent.length}
        loading={serviceRecentLoading}
        searchTerm={customerRecent}
        setSearchTerm={() => {
          // TODO: setSearchTerm
        }}
      />

      {/* TODO: Exibir tabela de pagamentos recentes */}
    </div>
  );
};
