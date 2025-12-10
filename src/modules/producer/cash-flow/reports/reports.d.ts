import { Period } from "@/modules/shared/shared";

export type ReportPeriod = Period;

export interface IReport {
  revenue: {
    total: number;
    growthRate: number;
    workingDays: number;
  };
  clients: {
    total: number;
    growthRate: number;
    servicesProvided: number;
  };
  averageTicket: {
    value: number;
    growthRate: number;
  };
  topService: {
    count: number;
    service: {
      id: string;
      name: string;
    };
  };
}
