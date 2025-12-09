import { CardChart } from "@/components/CardChart";

import { formatCurrency } from "@/modules/shared/utils";

import { IServiceBestSelling } from "@/modules/producer/services/service";

interface BestsellingServicesChartProps {
  items: IServiceBestSelling[];
  loading?: boolean;
}

export const BestsellingServicesChart = ({
  items,
  loading,
}: BestsellingServicesChartProps) => {
  const maxRevenue = Math.max(...items.map((s) => s.revenue));

  return (
    <CardChart title="Serviços Mais Vendidos" subtitle="Top 5 serviços">
      {loading && <BestsellingServicesChartLoading />}

      {items.map((item, index) => (
        <BestsellingServicesChartItem
          key={index}
          item={item}
          index={index}
          maxRevenue={maxRevenue}
        />
      ))}
    </CardChart>
  );
};

// TODO: BestsellingServicesChartLoading
const BestsellingServicesChartLoading = () => {
  return <></>;
};

interface BestsellingServicesChartItemProps {
  item: IServiceBestSelling;
  maxRevenue: number;
  index: number;
}

const BestsellingServicesChartItem = ({
  item,
  index,
  maxRevenue,
}: BestsellingServicesChartItemProps) => {
  return (
    <div key={index} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
            {index + 1}
          </div>

          <span className="text-sm font-medium text-white">{item.name}</span>
        </div>

        <div className="text-right">
          <p className="text-sm font-bold text-white">
            {formatCurrency(item.revenue)}
          </p>
          <p className="text-xs text-gray-400">{item.sales} vendas</p>
        </div>
      </div>

      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
        />
      </div>
    </div>
  );
};
