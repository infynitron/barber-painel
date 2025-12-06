import {
  IReport,
  ReportPeriod,
} from "@/modules/producer/cash-flow/reports/reports";

interface IGetByPeriodProps {
  period: ReportPeriod;
}

export class ReportsService {
  getByPeriod = async ({ period }: IGetByPeriodProps): Promise<IReport> => {
    // TODO: Backend
    const data = {
      workingDays: 26,
      totalRevenue: 28450.0,
      growthRate: 15.3,
      totalClients: 342,
      averageTicket: 83.19,
    };

    return data;
  };
}
