import { PaymentMethod } from "@/modules/producer/cash-flow/payments/payment";

export interface ICustomerRecentService {
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
