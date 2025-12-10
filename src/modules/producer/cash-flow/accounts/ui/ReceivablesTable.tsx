import { DollarSign, TrendingUp, AlertCircle } from "lucide-react";

import { formatCurrency } from "@/modules/shared/utils";

import { metricsData } from "@/mock";

import MetricCard from "@/modules/producer/cash-flow/accounts/ui/MetricCard";
// import ReceivablesTable from "@/modules/producer/cash-flow/accounts/ui/ReceivablesTable";

const metrics = [
  {
    title: "Total A Receber",
    value: formatCurrency(metricsData.totalReceivable),
    subtitle: "15 faturas em aberto",
    icon: DollarSign,
    iconBgColor: "bg-green-500/10",
    iconColor: "text-green-500",
    trend: {
      direction: "up",
      value: "+12.5%",
      label: "vs mês anterior",
    },
  },
  {
    title: "Recebido Hoje",
    value: formatCurrency(metricsData.receivedToday),
    subtitle: "3 transações confirmadas",
    icon: TrendingUp,
    iconBgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    trend: {
      direction: "up",
      value: "+8.2%",
      label: "vs ontem",
    },
  },
  {
    title: "Taxa de Conclusão",
    value: `${100 - metricsData.overdueRate}%`,
    subtitle: "0 cancelados, 0 falhas",
    icon: AlertCircle,
    iconBgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
    trend: {
      direction: "down",
      value: "-2.1%",
      label: "inadimplência",
    },
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a0b]">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Visão geral do seu dia</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Receivables Table */}
        {/* <ReceivablesTable /> */}
      </div>
    </div>
  );
};

export default Dashboard;
