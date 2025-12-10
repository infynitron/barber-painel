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
      revenue: {
        total: 28450.0,
        workingDays: 26,
        growthRate: 15.3,
      },
      clients: {
        total: 342,
        servicesProvided: 1,
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
