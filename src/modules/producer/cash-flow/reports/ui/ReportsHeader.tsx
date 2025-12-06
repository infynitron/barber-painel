import { ReportPeriod } from "@/modules/producer/cash-flow/reports/reports";

interface ReportsHeaderProps {
  selectedPeriod: ReportPeriod;
  setSelectedPeriod: (period: ReportPeriod) => void;
}

export default function ReportsHeader({
  selectedPeriod,
  setSelectedPeriod,
}: ReportsHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-800">
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
                ? "bg-primary text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => {
              setSelectedPeriod("week");
            }}
          >
            Semana
          </button>

          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              selectedPeriod === "month"
                ? "bg-primary text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => {
              setSelectedPeriod("month");
            }}
          >
            Mês
          </button>

          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              selectedPeriod === "year"
                ? "bg-primary text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => {
              setSelectedPeriod("year");
            }}
          >
            Ano
          </button>
        </div>
      </div>
    </div>
  );
}
