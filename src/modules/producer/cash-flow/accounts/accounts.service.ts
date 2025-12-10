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
        value: 45780.5,
        growthRate: 5.3,
        count: 3,
      },
      received: {
        value: 480.5,
        growthRate: 5.3,
        count: 3,
      },
    };

    return data;
  };
}
