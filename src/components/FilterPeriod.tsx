import { Button } from "@/components/ui/button";

export type FilterPeriod = "week" | "month" | "year";

export interface FilterPeriodProps {
  selectedPeriod: FilterPeriod;
  setSelectedPeriod: (period: FilterPeriod) => void;
}

export const FilterPeriodComponent = ({
  selectedPeriod,
  setSelectedPeriod,
}: FilterPeriodProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={selectedPeriod === "week" ? "default" : "secondary"}
        type="button"
        onClick={() => {
          setSelectedPeriod("week");
        }}
      >
        Semana
      </Button>

      <Button
        variant={selectedPeriod === "month" ? "default" : "secondary"}
        type="button"
        onClick={() => {
          setSelectedPeriod("month");
        }}
      >
        Mês
      </Button>

      <Button
        variant={selectedPeriod === "year" ? "default" : "secondary"}
        type="button"
        onClick={() => {
          setSelectedPeriod("year");
        }}
      >
        Ano
      </Button>
    </div>
  );
};
