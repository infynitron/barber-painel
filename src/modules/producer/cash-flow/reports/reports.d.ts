import { Period } from "@/modules/shared/shared";

export type ReportPeriod = Period;

interface GrowthRate {
  value: number;
  growthRate: number;
}

export interface IReport {
  totalRevenue: GrowthRate;
  totalClients: GrowthRate;
  averageTicket: GrowthRate;
  workingDays: number;
  topService: {
    count: number;
    service: {
      id: string;
      name: string;
    };
  };
}
