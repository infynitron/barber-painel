import { TrendingUp, TrendingDown } from "lucide-react";

const ReportMetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  iconBgColor,
  iconColor,
}: any) => {
  return (
    <div className="bg-[#121214] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-white mb-3">{value}</h3>
          <p className="text-gray-500 text-xs">{subtitle}</p>
        </div>

        <div
          className={`p-3 rounded-lg ${iconBgColor} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={iconColor} size={24} />
        </div>
      </div>

      {trend && (
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2">
            {trend.direction === "up" ? (
              <TrendingUp size={16} className="text-green-500" />
            ) : (
              <TrendingDown size={16} className="text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                trend.direction === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {trend.value}
            </span>
            <span className="text-gray-500 text-sm">{trend.label}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportMetricCard;
