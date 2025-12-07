import { ICustomerServiceRecent } from "@/modules/producer/customer/customer";

export class CustomerService {
  serviceRecents = async () => {
    // TODO: Backend
    const data: ICustomerServiceRecent[] = [
      {
        id: "1",
        date: "2025-07-26T14:30:00.000Z",
        methodPayment: "PIX",
        value: 120.0,
        customer: { id: "1", name: "Rafael Mendes" },
        team: { id: "1", name: "Carlos Silva" },
        service: { id: "1", name: "Corte + Barba" },
      },
      {
        id: "2",
        date: "2025-07-26T15:00:00.000Z",
        methodPayment: "CASH",
        value: 50.0,
        customer: { id: "1", name: "Bruno Alves" },
        team: { id: "1", name: "João Santos" },
        service: { id: "1", name: "Corte Simples" },
      },
      {
        id: "3",
        date: "2025-07-26T15:30:00.000Z",
        value: 50.0,
        methodPayment: "DEBIT_CARD",
        customer: { id: "1", name: "Marcos Paulo" },
        team: { id: "1", name: "Pedro Costa" },
        service: { id: "1", name: "Barba" },
      },
      {
        id: "4",
        date: "2025-07-26T16:00:00.000Z",
        methodPayment: "PIX",
        value: 120.0,
        customer: { id: "1", name: "Fernando Lima" },
        team: { id: "1", name: "Carlos Silva" },
        service: { id: "1", name: "Corte + Barba" },
      },
      {
        id: "5",
        date: "2025-07-26T16:30:00.000Z",
        methodPayment: "CREDIT_CARD",
        value: 100.0,
        customer: { id: "2", name: "Gabriel Torres" },
        team: { id: "3", name: "João Santos" },
        service: { id: "3", name: "Químicas" },
      },
    ];

    return data;
  };
}
