import {
  IReport,
  ReportPeriod,
} from "@/modules/producer/cash-flow/reports/reports";

interface IGetByPeriodProps {
  period: ReportPeriod;
}

export class ReportsService {
  getByPeriod = async ({ period }: IGetByPeriodProps) => {
    // TODO: Backend
    const data: IReport = {
      workingDays: 26,
      totalRevenue: {
        value: 28450.0,
        growthRate: 15.3,
      },
      totalClients: {
        value: 342,
        growthRate: 5.3,
      },
      averageTicket: {
        value: 83.19,
        growthRate: 25.3,
      },
      topService: {
        count: 10,
        service: {
          id: "UUID",
          name: "Corte + Barba",
        },
      },
    };

    return data;
  };
}
