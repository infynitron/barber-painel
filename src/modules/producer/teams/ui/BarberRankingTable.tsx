import { TrophyIcon, StarIcon } from "lucide-react";

import { formatCurrency, periods } from "@/modules/shared/utils";

import { ITeamRanking, TeamPeriod } from "@/modules/producer/teams/teams";

const colors: Record<number, string> = {
  1: "text-yellow-500",
  2: "text-gray-400",
  3: "text-orange-600",
};

const getMedalColor = (position: number): string => {
  return colors[position] ?? "text-gray-600";
};

interface BarberRankingTableProps {
  period: TeamPeriod;
  items: ITeamRanking[];
  loading?: boolean;
}

export const BarberRankingTable = ({
  period,
  items,
  loading,
}: BarberRankingTableProps) => {
  return (
    <div className="bg-[#121214] border border-gray-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Ranking de Barbeiros
            </h3>
            <p className="text-sm text-gray-400">
              Desempenho individual do(a) {periods[period].toLocaleLowerCase()}
            </p>
          </div>
          <TrophyIcon className="text-yellow-500" size={32} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0a0a0b]">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Posição
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Barbeiro
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Atendimentos
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Faturamento
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Avaliação
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {loading && (
              <>
                {/* TODO: Skeleton */}
                <p>Sem itens</p>
              </>
            )}

            {!loading && items.map(BarberRankingColumn)}

            {!loading && items.length === 0 && (
              <>
                {/* TODO: No items */}
                <tr className="hover:bg-[#1a1a1c] transition-colors duration-150">
                  <td className="px-6 py-4" colSpan={5}>
                    Sem itens
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BarberRankingColumn = (item: ITeamRanking, idx: number) => {
  return (
    <tr
      key={item.id}
      className="hover:bg-[#1a1a1c] transition-colors duration-150"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <TrophyIcon className={getMedalColor(idx + 1)} size={20} />
          <span className="text-sm font-bold text-white">{idx + 1}º</span>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
            {item.name.charAt(0)}
          </div>
          <p className="text-sm font-medium text-white">{item.name}</p>
        </div>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm text-gray-300">{item.appointments} clientes</p>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm font-semibold text-white">
          {formatCurrency(item.revenue)}
        </p>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-1">
          <StarIcon className="text-yellow-500 fill-yellow-500" size={16} />
          <span className="text-sm font-medium text-white">{item.rating}</span>
        </div>
      </td>
    </tr>
  );
};
