import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Serviços Mais Vendidos</CardTitle>
        <CardDescription>Top 5 serviços</CardDescription>
      </CardHeader>

      <CardContent>
        {loading && <BestsellingServicesChartLoading />}

        {items.map((item, index) => (
          <BestsellingServicesChartItem
            key={index}
            item={item}
            index={index}
            maxRevenue={maxRevenue}
          />
        ))}
      </CardContent>
    </Card>
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
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-foreground bg-linear-to-br from-blue-500 to-purple-500">
            {index + 1}
          </div>

          <span className="text-sm font-medium text-foreground">
            {item.name}
          </span>
        </div>

        <div className="text-right">
          <p className="text-sm font-bold text-foreground">
            {formatCurrency(item.revenue)}
          </p>
          <p className="text-xs text-muted-foreground">{item.sales} vendas</p>
        </div>
      </div>

      {/* TODO: Progress */}
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};
