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
    <div className="rounded-xl space-y-4 p-6 shadow-sm text-card-foreground bg-card border border-accent-foreground hover:border-accent transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <p className="text-foreground leading-none font-semibold text-sm">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-white/80">{value}</h3>
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
