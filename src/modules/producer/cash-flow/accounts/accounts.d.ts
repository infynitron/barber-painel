import { IGrowthRate, Period } from "@/modules/shared/shared";

export type AccountsPeriod = Period;

export interface IReceivablePeriod {
  receivable: {
    total: number;
    growthRate: number;
    openInvoices: number;
  };
  received: {
    total: number;
    growthRate: number;
    confirmedTransactions: number;
  };
}

export interface IUpcomingPayment {
  id: string;
  clientName: string;
  amount: number;
  dueDate: string;
  status: string;
  invoiceNumber: string;
  paymentMethod: string;
}
