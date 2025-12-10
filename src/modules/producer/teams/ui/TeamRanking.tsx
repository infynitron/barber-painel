import { TrophyIcon, StarIcon } from "lucide-react";

import { UITableCard, ITableColumn } from "@/components/UITable";

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

interface TeamRankingTableProps {
  items: ITeamRanking[];
  loading?: boolean;
}

export const TeamRanking = ({ items, loading }: TeamRankingTableProps) => {
  return (
    <UITableCard
      items={items}
      columns={columns}
      loading={loading}
      header={{
        title: "Ranking de Barbeiros",
        subtitle: "Desempenho individual",
        icon: {
          className: "text-yellow-500",
          name: "TrophyIcon",
          size: 32,
        },
      }}
      empty={{ placeholder: "Nenhum barbeiro registrado" }}
    >
      {(item, idx) => (
        <TeamRankingTableColumn key={idx} idx={idx} item={item} />
      )}
    </UITableCard>
  );
};

interface TeamRankingTableColumnProps {
  item: ITeamRanking;
  idx: number;
}

const TeamRankingTableColumn = ({ item, idx }: TeamRankingTableColumnProps) => {
  console.log("TeamRankingTableColumn", idx);
  return (
    <tr
      key={item.id}
      className="transition-colors duration-150 hover:bg-background/80"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <TrophyIcon
            className={colors[idx + 1] ?? "text-foreground"}
            size={20}
          />
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
