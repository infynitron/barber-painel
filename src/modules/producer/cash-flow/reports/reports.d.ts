export type ReportPeriod = "week" | "month" | "year";

export interface IReport {
  workingDays: number;
  totalRevenue: number;
  growthRate: number;
  totalClients: number;
  averageTicket: number;
}
