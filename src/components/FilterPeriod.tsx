import { Button } from "@/components/ui/button";

import { Period } from "@/modules/shared/shared";
import { periods } from "@/modules/shared/utils";

export type FilterPeriod = Period;

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
      {Object.keys(periods).map((period) => (
        <Button
          key={period}
          variant={selectedPeriod === period ? "default" : "secondary"}
          type="button"
          onClick={() => {
            setSelectedPeriod(period as FilterPeriod);
          }}
        >
          {periods[period as FilterPeriod]}
        </Button>
      ))}
    </div>
  );
};
