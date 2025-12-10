import { TrophyIcon, StarIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { UITableHeader, ITableColumn } from "@/components/UITable";

import { formatCurrency } from "@/modules/shared/utils";

import { ITeamRanking } from "@/modules/producer/teams/teams";

const columns: ITableColumn[] = [
  {
    property: "position",
    label: "Posição",
  },
  {
    property: "team.name",
    label: "Barbeiro",
  },
  {
    property: "appointments",
    label: "Atendimentos",
  },
  {
    property: "revenue",
    label: "Faturamento",
  },
  {
    property: "rating",
    label: "Avaliação",
  },
];

const colors: Record<number, string> = {
  1: "text-yellow-500",
  2: "text-gray-400",
  3: "text-orange-600",
};

const getMedalColor = (position: number): string => {
  return colors[position] ?? "text-gray-600";
};

interface TeamRankingTableProps {
  items: ITeamRanking[];
  loading?: boolean;
}

export const TeamRanking = ({ items, loading }: TeamRankingTableProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Ranking de Barbeiros</CardTitle>
            <CardDescription>Desempenho individual</CardDescription>
          </div>

          <TrophyIcon className="text-yellow-500" size={32} />
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <UITableHeader columns={columns} />

            <tbody className="divide-y divide-muted">
              {loading && <TeamRankingTableLoading />}

              {!loading && items.length === 0 && <TeamRankingTableEmpty />}

              {!loading && items.map(TeamRankingTableColumn)}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamRankingTableColumn = (item: ITeamRanking, idx: number) => {
  return (
    <tr
      key={item.id}
      className="transition-colors duration-150 hover:bg-background/80"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <TrophyIcon className={getMedalColor(idx + 1)} size={20} />
          <span className="text-sm font-bold text-foreground">{idx + 1}º</span>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-foreground font-semibold text-sm">
            {item.name.charAt(0)}
          </div>
          <p className="text-sm font-medium text-foreground">{item.name}</p>
        </div>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm text-foreground">{item.appointments} clientes</p>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm font-semibold text-green-500">
          {formatCurrency(item.revenue)}
        </p>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-1">
          <StarIcon className="text-primary fill-primary" size={16} />
          <span className="text-sm font-medium text-foreground">
            {item.rating}
          </span>
        </div>
      </td>
    </tr>
  );
};

// TODO: TeamRankingTableEmpty
const TeamRankingTableEmpty = () => {
  return (
    <tr>
      <td colSpan={5} className="px-6 py-12 text-center">
        <p className="text-gray-400 text-sm">Nenhum registro encontrado</p>
      </td>
    </tr>
  );
};

// TODO: TeamRankingTableLoading
const TeamRankingTableLoading = () => {
  return (
    <>
      {new Array(4).fill("").map((item) => (
        <tr
          key={item}
          className="hover:bg-[#1a1a1c] transition-colors duration-150"
        >
          <td className="px-6 py-4"></td>

          <td className="px-6 py-4"></td>

          <td className="px-6 py-4"></td>

          <td className="px-6 py-4"></td>

          <td className="px-6 py-4"></td>

          <td className="px-6 py-4"></td>
        </tr>
      ))}
    </>
  );
};
