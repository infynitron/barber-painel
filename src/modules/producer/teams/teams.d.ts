import { Period } from "@/modules/shared/shared";

export type TeamPeriod = Period;

export interface ITeamRanking {
  id: string;
  name: string;
  appointments: number;
  revenue: number;
  rating: number;
}
