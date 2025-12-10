import {
  AccountsPeriod,
  IReceivablePeriod,
} from "@/modules/producer/cash-flow/accounts/accounts";

interface IGetReceivablesByPeriodProps {
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
}
