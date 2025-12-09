import { IPaymentDistribution } from "@/modules/producer/cash-flow/payments/payment";

export class PaymentService {
  paymentDistribution = async () => {
    // TODO: Backend
    const data: IPaymentDistribution[] = [
      {
        method: "PIX",
        amount: 12450.0,
        percentage: 44,
      },
      {
        method: "DEBIT_CARD",
        amount: 8920.0,
        percentage: 31,
      },
      {
        method: "CREDIT_CARD",
        amount: 5680.0,
        percentage: 20,
      },
      {
        method: "CASH",
        amount: 1400.0,
        percentage: 5,
      },
    ];

    return data;
  };
}
