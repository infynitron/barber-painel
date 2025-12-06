import { useState } from "react";
import { DownloadIcon, CalendarIcon } from "lucide-react";

import { Search } from "@/components/Search";

import { formatCurrency, formatDate } from "@/modules/shared/utils";

import { recentAppointments } from "@/mock";

const AppointmentsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = recentAppointments.filter((item) => {
    return (
      item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.barber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.service.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-[#121214] border border-gray-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Atendimentos Recentes
            </h3>
            <p className="text-sm text-gray-400">
              Histórico detalhado de atendimentos
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
            <DownloadIcon size={18} />
            <span className="text-sm font-medium">Exportar</span>
          </button>
        </div>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0a0a0b]">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Data/Hora
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Cliente
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Barbeiro
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Serviço
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Valor
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Pagamento
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <CalendarIcon
                    className="mx-auto mb-3 text-gray-600"
                    size={48}
                  />
                  <p className="text-gray-400 text-sm">
                    Nenhum atendimento encontrado
                  </p>
                </td>
              </tr>
            ) : (
              filteredAppointments.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#1a1a1c] transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {formatDate(item.date)}
                      </p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                        {item.client.charAt(0)}
                      </div>
                      <p className="text-sm font-medium text-white">
                        {item.client}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-300">{item.barber}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-300">{item.service}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-white">
                      {formatCurrency(item.value)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                      {item.payment}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filteredAppointments.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-800 bg-[#0a0a0b]">
          <p className="text-sm text-gray-400">
            Mostrando{" "}
            <span className="font-medium text-white">
              {filteredAppointments.length}
            </span>{" "}
            de{" "}
            <span className="font-medium text-white">
              {recentAppointments.length}
            </span>{" "}
            atendimentos
          </p>
        </div>
      )}
    </div>
  );
};

export default AppointmentsTable;
