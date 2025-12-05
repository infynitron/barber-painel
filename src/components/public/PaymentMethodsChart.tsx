import React from "react";
import { CreditCard, Smartphone, Banknote, Wallet } from "lucide-react";
import { paymentMethods } from "@/mock";

const PaymentMethodsChart = () => {
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  const icons = {
    PIX: Smartphone,
    "Cartão Débito": CreditCard,
    "Cartão Crédito": CreditCard,
  };

  const getIcon = (method: string) => {
    return icons[method as keyof typeof icons] || Smartphone;
  };

  return (
    <div className="bg-[#121214] border border-gray-800 rounded-xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">
          Formas de Pagamento
        </h3>
        <p className="text-sm text-gray-400">Distribuição dos pagamentos</p>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((payment, index) => {
          const Icon = getIcon(payment.method);
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${payment.color}/10`}>
                    <Icon
                      className={`${payment.color.replace("bg-", "text-")}`}
                      size={20}
                    />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {payment.method}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">
                    {formatCurrency(payment.amount)}
                  </p>
                  <p className="text-xs text-gray-400">{payment.percentage}%</p>
                </div>
              </div>

              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full ${payment.color} rounded-full transition-all duration-500`}
                  style={{ width: `${payment.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethodsChart;
