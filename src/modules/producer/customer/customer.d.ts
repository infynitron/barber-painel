type PaymentMethod = "PIX" | "CREDIT_CARD" | "DEBIT_CARD" | "CASH";

export interface ICustomerServiceRecent {
  id: string;
  date: string;
  methodPayment: PaymentMethod;
  value: number;
  customer: {
    id: string;
    name: string;
  };
  team: {
    id: string;
    name: string;
  };
  service: {
    id: string;
    name: string;
  };
}
