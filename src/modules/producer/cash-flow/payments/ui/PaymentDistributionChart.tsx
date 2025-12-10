import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DynamicIcon } from "@/components/DynamicIcon";

import { formatCurrency } from "@/modules/shared/utils";

import {
  IPaymentDistribution,
  PaymentMethod,
} from "@/modules/producer/cash-flow/payments/payment";

const icons: { [key in PaymentMethod]: string } = {
  CASH: "SmartphoneIcon",
  PIX: "SmartphoneIcon",
  CREDIT_CARD: "CreditCardIcon",
  DEBIT_CARD: "CreditCardIcon",
};

const colors: { [key in PaymentMethod]: string } = {
  PIX: "bg-blue-500",
  CASH: "bg-orange-500",
  CREDIT_CARD: "bg-purple-500",
  DEBIT_CARD: "bg-green-500",
};

interface PaymentDistributionChartProps {
  items: IPaymentDistribution[];
  loading?: boolean;
}

export const PaymentDistributionChart = ({
  items,
  loading,
}: PaymentDistributionChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Formas de Pagamento</CardTitle>

        <CardDescription>Distribuição dos pagamentos</CardDescription>
      </CardHeader>

      <CardContent>
        {loading && <PaymentDistributionLoading />}

        {items.map(PaymentDistributionLine)}
      </CardContent>
    </Card>
  );
};

// TODO: PaymentDistributionLoading
const PaymentDistributionLoading = () => {
  return <></>;
};

// TODO: PaymentDistributionLine
const PaymentDistributionLine = (item: IPaymentDistribution, index: number) => {
  return (
    <div key={index} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${colors[item.method]}/10`}>
            <DynamicIcon
              className={colors[item.method]}
              name={icons[item.method]}
              size={20}
            />
          </div>
          <span className="text-sm font-medium text-foreground">
            {item.method}
          </span>
        </div>

        <div className="text-right">
          <p className="text-sm font-bold text-foreground">
            {formatCurrency(item.amount)}
          </p>

          <p className="text-xs text-muted-foreground">{item.percentage}%</p>
        </div>
      </div>

      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
            colors[item.method]
          }`}
          style={{ width: `${item.percentage}%` }}
        />
      </div>
    </div>
  );
};
