import { IGrowthRate, Period } from "@/modules/shared/shared";

export type AccountsPeriod = Period;

export interface IReceivablePeriod {
  receivable: IGrowthRate & {
    count: number;
  };
  received: IGrowthRate & {
    count: number;
  };
}
