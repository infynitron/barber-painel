import { IGrowthRate, Period } from "@/modules/shared/shared";

export type ReportPeriod = Period;

export interface IReport {
  totalRevenue: IGrowthRate;
  totalClients: IGrowthRate;
  averageTicket: IGrowthRate;
  workingDays: number;
  topService: {
    count: number;
    service: {
      id: string;
      name: string;
    };
  };
}
