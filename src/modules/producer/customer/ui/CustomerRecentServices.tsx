import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { UITableCard, ITableColumn } from "@/components/UITable";

import { formatCurrency, formatDate } from "@/modules/shared/utils";

import { ICustomerRecentService } from "@/modules/producer/customer/customer";

const columns: ITableColumn[] = [
  {
    property: "date",
    label: "Data/Hora",
  },
  {
    property: "customer.name",
    label: "Cliente",
  },
  {
    property: "team.name",
    label: "Barbeiro",
  },
  {
    property: "service.name",
    label: "Serviço",
  },
  {
    property: "value",
    label: "Valor",
  },
  {
    property: "methodPayment",
    label: "Pagamento",
  },
];

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
    console.log("CustomerRecentServices toggleDownload");
  };

  return (
    <UITableCard
      items={items}
      columns={columns}
      loading={loading}
      header={{
        title: "Atendimentos Recentes",
        subtitle: "Histórico detalhado de atendimentos",
        actions: (
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
        ),
      }}
      empty={{ placeholder: "Nenhum atendimento recente" }}
      footer={{ total }}
    >
      {(item, idx) => (
        <CustomerRecentServicesTableColumn key={idx} item={item} />
      )}
    </UITableCard>
  );
};

interface CustomerRecentServicesTableColumnProps {
  item: ICustomerRecentService;
}

const CustomerRecentServicesTableColumn = ({
  item,
}: CustomerRecentServicesTableColumnProps) => {
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
