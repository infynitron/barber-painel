import { Period } from "@/modules/shared/shared";

export type ServicePeriod = Period;

export interface IServiceBestSelling {
  id: string;
  name: string;
  sales: number;
  revenue: number;
  percentage: number;
}
