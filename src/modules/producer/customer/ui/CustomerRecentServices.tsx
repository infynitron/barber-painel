import { DownloadIcon, CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Search } from "@/components/Search";
import { TableFooter } from "@/components/TableFooter";

import { formatCurrency, formatDate } from "@/modules/shared/utils";

import { ICustomerServiceRecent } from "@/modules/producer/customer/customer";

interface CustomerRecentServicesProps {
  total: number;
  items: ICustomerServiceRecent[];
  loading?: boolean;
  searchTerm: string;
  setSearchTerm: (text: string) => void;
}

export const CustomerRecentServices = ({
  items,
  total,
  loading,
  searchTerm,
  setSearchTerm,
}: CustomerRecentServicesProps) => {
  const toggleDownload = () => {
    // TODO: Ação de download de csv
  };

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

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              toggleDownload();
            }}
          >
            <DownloadIcon size={18} />
            <span className="text-sm font-medium">Exportar</span>
          </Button>
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
            {loading && <CustomerRecentServicesTableLoading />}

            {!loading && items.length === 0 && (
              <CustomerRecentServicesTableEmpty />
            )}

            {!loading && items.map(CustomerRecentServicesTableColumn)}
          </tbody>
        </table>
      </div>

      <TableFooter items={items.length} total={total} />
    </div>
  );
};

const CustomerRecentServicesTableColumn = (item: ICustomerServiceRecent) => {
  return (
    <tr
      key={item.id}
      className="hover:bg-[#1a1a1c] transition-colors duration-150"
    >
      <td className="px-6 py-4">
        <div>
          <p className="text-sm font-medium text-white">
            {formatDate(item.date)}
          </p>

          <p className="text-xs text-gray-400">{item.date}</p>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
            {item.customer.name.charAt(0)}
          </div>
          <p className="text-sm font-medium text-white">{item.customer.name}</p>
        </div>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm text-gray-300">{item.team.name}</p>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm text-gray-300">{item.service.name}</p>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm font-semibold text-white">
          {formatCurrency(item.value)}
        </p>
      </td>

      <td className="px-6 py-4">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
          {item.methodPayment}
        </span>
      </td>
    </tr>
  );
};

const CustomerRecentServicesTableEmpty = () => {
  return (
    <tr>
      <td colSpan={6} className="px-6 py-12 text-center">
        <CalendarIcon className="mx-auto mb-3 text-gray-600" size={48} />
        <p className="text-gray-400 text-sm">Nenhum atendimento encontrado</p>
      </td>
    </tr>
  );
};

// TODO: Loading
const CustomerRecentServicesTableLoading = () => {
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
