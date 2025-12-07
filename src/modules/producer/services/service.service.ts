import { IServiceBestSelling, ServicePeriod } from "./service";

interface IBestSellingProps {
  period: ServicePeriod;
}

export class ServicesService {
  bestSelling = async ({ period }: IBestSellingProps) => {
    // TODO: Backend
    const data: IServiceBestSelling[] = [
      {
        id: "1",
        name: "Corte + Barba",
        sales: 156,
        revenue: 18720,
        percentage: 35,
      },
      {
        id: "2",
        name: "Corte Simples",
        sales: 98,
        revenue: 4900,
        percentage: 22,
      },
      {
        id: "3",
        name: "Barba",
        sales: 67,
        revenue: 3350,
        percentage: 15,
      },
      {
        id: "4",
        name: "Sobrancelha",
        sales: 45,
        revenue: 900,
        percentage: 10,
      },
      {
        id: "5",
        name: "Químicas",
        sales: 28,
        revenue: 2800,
        percentage: 8,
      },
    ];

    return data;
  };
}
