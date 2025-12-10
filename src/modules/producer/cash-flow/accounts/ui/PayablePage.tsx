"use client";

import React from "react";
import {
  Calendar,
  Search,
  Download,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

import { formatCurrency, formatDate } from "@/modules/shared/utils";

import { upcomingReceivables } from "@/mock";

const ReceivablesTable = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("all");

  const filteredReceivables = upcomingReceivables.filter((item) => {
    const matchesSearch =
      item.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  type StatusType = "pending" | "overdue" | "paid";

  const getStatusBadge = (status: StatusType) => {
    const statusConfig: Record<
      StatusType,
      { label: string; color: string; icon: any }
    > = {
      pending: {
        label: "Pendente",
        color: "bg-orange-500/10 text-orange-500",
        icon: Clock,
      },
      overdue: {
        label: "Atrasado",
        color: "bg-red-500/10 text-red-500",
        icon: AlertCircle,
      },
      paid: {
        label: "Pago",
        color: "bg-green-500/10 text-green-500",
        icon: CheckCircle,
      },
    };

    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        <Icon size={14} />
        {config.label}
      </span>
    );
  };

  return (
    <div className="bg-[#121214] border border-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">
            Próximos Recebimentos
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
            <Download size={18} />
            <span className="text-sm font-medium">Exportar</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar por cliente ou número da fatura..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1c] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2.5 bg-[#1a1a1c] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-700 transition-colors duration-200"
            >
              <option value="all">Todos Status</option>
              <option value="pending">Pendentes</option>
              <option value="overdue">Atrasados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0a0a0b]">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Cliente
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Fatura
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Vencimento
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Valor
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Método
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredReceivables.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <Calendar className="mx-auto mb-3 text-gray-600" size={48} />
                  <p className="text-gray-400 text-sm">
                    Nenhum recebimento encontrado
                  </p>
                </td>
              </tr>
            ) : (
              filteredReceivables.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#1a1a1c] transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                        {item.clientName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          {item.clientName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-300">
                      {item.invoiceNumber}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-300">
                      {formatDate(item.dueDate)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-white">
                      {formatCurrency(item.amount)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-400">
                      {item.paymentMethod}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(item.status as StatusType)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      {filteredReceivables.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-800 bg-[#0a0a0b]">
          <p className="text-sm text-gray-400">
            Mostrando{" "}
            <span className="font-medium text-white">
              {filteredReceivables.length}
            </span>{" "}
            de{" "}
            <span className="font-medium text-white">
              {upcomingReceivables.length}
            </span>{" "}
            recebimentos
          </p>
        </div>
      )}
    </div>
  );
};

export default ReceivablesTable;
