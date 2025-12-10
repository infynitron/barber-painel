import { DownloadIcon, CalendarIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Search } from "@/components/Search";
import { TableFooter } from "@/components/TableFooter";

import { formatCurrency, formatDate } from "@/modules/shared/utils";

import { ICustomerRecentService } from "@/modules/producer/customer/customer";

interface CustomerRecentServicesProps {
  total: number;
  items: ICustomerRecentService[];
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
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Atendimentos Recentes</CardTitle>

            <CardDescription>
              Histórico detalhado de atendimentos
            </CardDescription>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              toggleDownload();
            }}
          >
            <DownloadIcon size={18} />
            Exportar
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {/* TODO: Search */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider">
                  Data/Hora
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider">
                  Cliente
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider">
                  Barbeiro
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider">
                  Serviço
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider">
                  Valor
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider">
                  Pagamento
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-muted">
              {loading && <CustomerRecentServicesTableLoading />}

              {!loading && items.length === 0 && (
                <CustomerRecentServicesTableEmpty />
              )}

              {!loading && items.map(CustomerRecentServicesTableColumn)}
            </tbody>
          </table>
        </div>
      </CardContent>

      <CardFooter>
        <TableFooter items={items.length} total={total} />
      </CardFooter>
    </Card>
  );
};

const CustomerRecentServicesTableColumn = (item: ICustomerRecentService) => {
  return (
    <tr
      key={item.id}
      className="transition-colors duration-150 hover:bg-background/80"
    >
      <td className="px-6 py-4">
        <div>
          {/* TODO: Exibição da data */}
          <p className="text-sm font-medium text-foreground">
            {formatDate(item.date)}
          </p>

          <p className="text-xs text-foreground">{item.date}</p>
        </div>
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center font-semibold text-sm rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-foreground">
            {item.customer.name.charAt(0)}
          </div>
          <p className="text-sm font-medium text-foreground">
            {item.customer.name}
          </p>
        </div>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm text-foreground">{item.team.name}</p>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm text-foreground">{item.service.name}</p>
      </td>

      <td className="px-6 py-4">
        <p className="text-sm font-semibold text-green-500">
          {formatCurrency(item.value)}
        </p>
      </td>

      <td className="px-6 py-4">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
          {/* TODO: Label em pt-br */}
          {item.methodPayment}
        </span>
      </td>
    </tr>
  );
};

// TODO: CustomerRecentServicesTableLoading
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

// TODO: CustomerRecentServicesTableEmpty
const CustomerRecentServicesTableEmpty = () => {
  return (
    <tr>
      <td colSpan={6} className="px-6 py-12 text-center">
        <CalendarIcon className="mx-auto mb-3 text-gray-600" size={48} />
        <p className="text-gray-400 text-sm">Nenhum registro encontrado</p>
      </td>
    </tr>
  );
};
