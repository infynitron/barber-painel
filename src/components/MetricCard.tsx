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
    <div className="bg-secondary border border-secondary rounded-xl space-y-4 p-6 hover:border-gray-700 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-white mb-3">{value}</h3>
          <p className="text-gray-500 text-xs">{subtitle}</p>
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
