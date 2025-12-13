import {
  AccountsPeriod,
  IReceivablePeriod,
  IUpcomingPayment,
} from "@/modules/producer/cash-flow/accounts/accounts";

interface IGetReceivablesByPeriodProps {
  period: AccountsPeriod;
}

interface IGetUpcomingPayments {
  period: AccountsPeriod;
}

export class AccountsService {
  getReceivablesByPeriod = async ({ period }: IGetReceivablesByPeriodProps) => {
    // TODO: Backend
    const data: IReceivablePeriod = {
      receivable: {
        total: 45780.5,
        growthRate: 5.3,
        openInvoices: 3,
      },
      received: {
        total: 480.5,
        growthRate: 5.3,
        confirmedTransactions: 3,
      },
    };

    return data;
  };

  getUpcomingPayments = async ({ period }: IGetUpcomingPayments) => {
    const items: IUpcomingPayment[] = [
      {
        id: "1",
        clientName: "João Silva & Cia",
        amount: 3500.0,
        dueDate: "2025-07-28",
        status: "pending",
        invoiceNumber: "INV-2025-001",
        paymentMethod: "Boleto",
      },
      {
        id: "2",
        clientName: "Maria Comércio LTDA",
        amount: 5200.0,
        dueDate: "2025-07-29",
        status: "pending",
        invoiceNumber: "INV-2025-002",
        paymentMethod: "Transferência",
      },
      {
        id: "3",
        clientName: "Tech Solutions Inc",
        amount: 12500.0,
        dueDate: "2025-07-30",
        status: "pending",
        invoiceNumber: "INV-2025-003",
        paymentMethod: "PIX",
      },
      {
        id: "4",
        clientName: "Construtora ABC",
        amount: 8900.0,
        dueDate: "2025-07-25",
        status: "overdue",
        invoiceNumber: "INV-2025-004",
        paymentMethod: "Boleto",
      },
      {
        id: "5",
        clientName: "Farmácia Central",
        amount: 1800.0,
        dueDate: "2025-07-31",
        status: "pending",
        invoiceNumber: "INV-2025-005",
        paymentMethod: "Cartão",
      },
      {
        id: "6",
        clientName: "Supermercado São José",
        amount: 6750.0,
        dueDate: "2025-08-02",
        status: "pending",
        invoiceNumber: "INV-2025-006",
        paymentMethod: "PIX",
      },
      {
        id: "7",
        clientName: "Padaria Pão Quente",
        amount: 950.0,
        dueDate: "2025-07-23",
        status: "overdue",
        invoiceNumber: "INV-2025-007",
        paymentMethod: "Dinheiro",
      },
      {
        id: "8",
        clientName: "Escritório Advocacia Lima",
        amount: 15000.0,
        dueDate: "2025-08-05",
        status: "pending",
        invoiceNumber: "INV-2025-008",
        paymentMethod: "Transferência",
      },
      {
        id: "9",
        clientName: "Padaria Pão Quente",
        amount: 950.0,
        dueDate: "2025-07-23",
        status: "overdue",
        invoiceNumber: "INV-2025-007",
        paymentMethod: "Dinheiro",
      },
      {
        id: "10",
        clientName: "Farmácia Central",
        amount: 1800.0,
        dueDate: "2025-07-31",
        status: "pending",
        invoiceNumber: "INV-2025-005",
        paymentMethod: "Cartão",
      },
    ];

    return items;
  };
}
