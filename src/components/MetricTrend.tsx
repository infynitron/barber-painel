import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";

export interface MetricTrendProps {
  direction: "up" | "down";
  value: string;
  label: string;
}

export const MetricTrendComponent = ({
  direction,
  label,
  value,
}: MetricTrendProps) => {
  return (
    <div className="pt-4 border-t border-gray-800">
      <div className="flex items-center gap-2">
        {direction === "up" ? (
          <TrendingUpIcon size={16} className="text-green-500" />
        ) : (
          <TrendingDownIcon size={16} className="text-red-500" />
        )}

        <span
          className={`text-sm font-medium ${
            direction === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {value}
        </span>
        <span className="text-gray-500 text-sm">{label}</span>
      </div>
    </div>
  );
};
