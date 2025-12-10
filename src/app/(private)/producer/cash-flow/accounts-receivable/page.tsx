"use client";

import React from "react";

import { AccountsPeriod } from "@/modules/producer/cash-flow/accounts/accounts";
import { CashFlowAccountsReceivable } from "@/modules/producer/cash-flow/accounts/ui/AccountsReceivablePage";

export default function ProducerCashFlowReceivablesTable() {
  // TODO: URL with Filtros
  const [period, setPreriod] = React.useState<AccountsPeriod>("week");

  return <CashFlowAccountsReceivable period={period} />;
}
