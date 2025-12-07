type PaymentMethod = "PIX" | "CREDIT_CARD" | "DEBIT_CARD" | "CASH";

export interface IPaymentDistribution {
  method: PaymentMethod;
  amount: number;
  percentage: number;
}
