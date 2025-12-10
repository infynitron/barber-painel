"use client";

import React from "react";

import { FilterPeriod } from "@/components/FilterPeriod";
import { MetricCardComponent, MetricCardProps } from "@/components/MetricCard";

import { formatCurrency, periods } from "@/modules/shared/utils";

import {
  AccountsPeriod,
  IReceivablePeriod,
} from "@/modules/producer/cash-flow/accounts/accounts";

import { AccountsService } from "@/modules/producer/cash-flow/accounts/accounts.service";

interface CashFlowAccountsReceivableProps {
  period: AccountsPeriod;
}

export const CashFlowAccountsReceivable = ({
  period,
}: CashFlowAccountsReceivableProps) => {
  // TODO: receivablePeriod
  const [receivablePeriod, setReceivablePeriod] = React.useState<
    IReceivablePeriod | undefined
  >();

  // TODO: React Query
  React.useEffect(() => {
    //
  }, []);

  // TODO: React Query
  React.useEffect(() => {
    const fetch = async () => {
      const data = await new AccountsService().getReceivablesByPeriod({
        period,
      });
      setReceivablePeriod(data);
    };

    fetch();
  }, []);

  const cards = React.useMemo<MetricCardProps[]>(() => {
    if (!receivablePeriod) return [];

    return [
      {
        value: formatCurrency(receivablePeriod.receivable.value),
        title: "Total A Receber",
        subtitle: `${receivablePeriod.receivable.count} faturas em aberto`,
        icon: {
          name: "DollarSign",
          color: "text-green-500",
          background_color: "bg-green-500/10",
        },
        trend: {
          label: `vs ${periods[period].toLowerCase()} anterior`,
          direction:
            receivablePeriod.receivable.growthRate >= 0 ? "up" : "down",
          value:
            receivablePeriod.receivable.growthRate >= 0
              ? `+${receivablePeriod.receivable.growthRate}%`
              : `-${receivablePeriod.receivable.growthRate}%`,
        },
      },
      {
        title: "Total Recebido",
        value: formatCurrency(receivablePeriod.received.value),
        subtitle: `${receivablePeriod.received.count} transações confirmadas`,
        icon: {
          name: "TrendingUp",
          color: "text-blue-500",
          background_color: "bg-blue-500/10",
        },
        trend: {
          label: `vs ${periods[period].toLowerCase()} anterior`,
          direction: receivablePeriod.received.growthRate >= 0 ? "up" : "down",
          value:
            receivablePeriod.received.growthRate >= 0
              ? `+${receivablePeriod.received.growthRate}%`
              : `-${receivablePeriod.received.growthRate}%`,
        },
      },
      /*
      // TODO: Cancelamento
      {
        title: "Taxa de Conclusão",
        value: `${100 - receivablePeriod.overdueRate}%`,
        subtitle: "0 cancelados, 0 falhas",
        icon: {
          name: "AlertCircle",
          color: "text-orange-500",
          background_color: "bg-orange-500/10",
        },
        trend: {
          direction: "down",
          value: "-2.1%",
          label: "inadimplência",
        },
      },
      */
    ];
  }, [receivablePeriod]);

  return (
    <div className="min-h-screen space-y-4">
      <FilterPeriod
        title="Contas a pagar"
        subtitle="Lista todas as contas pendentes de pagamento"
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
    </div>
  );
};
