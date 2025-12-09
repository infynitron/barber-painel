import { DynamicIcon } from "@/components/DynamicIcon";
import {
  MetricTrendComponent,
  MetricTrendProps,
} from "@/components/MetricTrend";

export interface MetricCardProps {
  value: string;
  title: string;
  subtitle: string;
  icon: {
    name: string;
    color: string;
    background_color: string;
  };
  trend?: MetricTrendProps;
}

export const MetricCardComponent = ({
  title,
  value,
  subtitle,
  icon,
  trend,
}: MetricCardProps) => {
  return (
    <div className="rounded-xl space-y-4 p-6 shadow-sm text-card-foreground bg-card border border-secondary transition-all duration-300 group hover:border-gray-700 ">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="mb-2 text-sm font-semibold leading-none text-gray-400">
            {title}
          </p>
          <h3 className="text-2xl font-bold mb-3">{value}</h3>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>

        <div
          className={`p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 ${icon.background_color}`}
        >
          <DynamicIcon name={icon.name} color={icon.color} size={24} />
        </div>
      </div>

      {trend && (
        <MetricTrendComponent
          direction={trend.direction}
          label={trend.label}
          value={trend.value}
        />
      )}
    </div>
  );
};
