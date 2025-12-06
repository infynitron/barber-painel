import { formatCurrency } from "@/modules/shared/utils";

import { topServices } from "@/mock";

const ServiceBarChart = () => {
  const maxRevenue = Math.max(...topServices.map((s) => s.revenue));

  return (
    <div className="bg-[#121214] border border-gray-800 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">
          Serviços Mais Vendidos
        </h3>
        <p className="text-sm text-gray-400">Top 5 serviços do mês</p>
      </div>

      <div className="space-y-6">
        {topServices.map((service, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-white">
                  {service.name}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-white">
                  {formatCurrency(service.revenue)}
                </p>
                <p className="text-xs text-gray-400">{service.sales} vendas</p>
              </div>
            </div>

            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${(service.revenue / maxRevenue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBarChart;
