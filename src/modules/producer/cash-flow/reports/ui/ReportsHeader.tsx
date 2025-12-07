import {
  FilterPeriodProps,
  FilterPeriodComponent,
} from "@/components/FilterPeriod";

type ReportsHeaderProps = FilterPeriodProps;

export default function ReportsHeader({
  selectedPeriod,
  togglePeriod,
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

        <FilterPeriodComponent
          selectedPeriod={selectedPeriod}
          togglePeriod={togglePeriod}
        />
      </div>
    </div>
  );
}
