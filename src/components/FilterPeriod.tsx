import {
  FilterPeriodButton,
  FilterPeriodButtonProps,
} from "@/components/FilterPeriodButton";

type FilterPeriodProps = FilterPeriodButtonProps & {
  title: string;
  subtitle: string;
};

export const FilterPeriod = ({
  title,
  subtitle,
  selectedPeriod,
  togglePeriod,
}: FilterPeriodProps) => {
  return (
    <div className="border-b border-secondary">
      <div className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>

        <FilterPeriodButton
          selectedPeriod={selectedPeriod}
          togglePeriod={togglePeriod}
        />
      </div>
    </div>
  );
};
