import { ITeamRanking } from "@/modules/producer/teams/teams";

export class TeamsService {
  rankingByBarber = async () => {
    // TODO: Backend
    const data: ITeamRanking[] = [
      {
        id: "1",
        name: "Carlos Silva",
        appointments: 112,
        revenue: 9856.0,
        rating: 4.9,
      },
      {
        id: "2",
        name: "João Santos",
        appointments: 98,
        revenue: 8232.0,
        rating: 4.8,
      },
      {
        id: "3",
        name: "Pedro Costa",
        appointments: 87,
        revenue: 7134.0,
        rating: 4.7,
      },
      {
        id: "4",
        name: "Lucas Oliveira",
        appointments: 45,
        revenue: 3228.0,
        rating: 4.6,
      },
    ];

    return data;
  };
}
