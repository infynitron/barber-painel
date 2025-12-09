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
    <div className="border-b border-secondary">
      <div className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
          <p className="text-sm text-muted-foreground mt-1">
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
