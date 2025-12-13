import {
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon,
  DownloadIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import { ITableColumn, UITableCard } from "@/components/UITable";

import { IUpcomingPayment } from "@/modules/producer/cash-flow/accounts/accounts";

import { formatCurrency, formatDate } from "@/modules/shared/utils";

const columns: ITableColumn[] = [
  {
    property: "client",
    label: "Cliente",
  },
  {
    property: "invoiceNumber",
    label: "Fatura",
  },
  {
    property: "dueDate",
    label: "Vencimento",
  },
  {
    property: "amount",
    label: "Valor",
  },
  {
    property: "paymentMethod",
    label: "Método",
  },
  {
    property: "status",
    label: "Status",
  },
];

type StatusType = "pending" | "overdue" | "paid";
const statusConfig: Record<
  StatusType,
  { label: string; color: string; icon: any }
> = {
  pending: {
    label: "Pendente",
    color: "bg-orange-500/10 text-orange-500",
    icon: ClockIcon,
  },
  overdue: {
    label: "Atrasado",
    color: "bg-red-500/10 text-red-500",
    icon: AlertCircleIcon,
  },
  paid: {
    label: "Pago",
    color: "bg-green-500/10 text-green-500",
    icon: CheckCircleIcon,
  },
};
const getStatusBadge = (status: StatusType) => {
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

interface UpcomingPaymentsProps {
  total: number;
  items: IUpcomingPayment[];
  loading?: boolean;
  searchTerm: string;
  setSearchTerm: (text: string) => void;
}

export const CashFlowAccountsReceivableUpcomingPayments = ({
  items,
  total,
  loading,
  searchTerm,
  setSearchTerm,
}: UpcomingPaymentsProps) => {
  const toggleDownload = () => {
    // TODO: Ação de download de csv
  };

  return (
    <UITableCard
      items={items}
      columns={columns}
      loading={loading}
      header={{
        title: "Próximos Recebimentos",
        subtitle: "Histórico detalhado dos próximos recebimentos",
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
      filters={{
        searchTerm,
        setSearchTerm,
      }}
      empty={{ placeholder: "Nenhum atendimento recente" }}
      footer={{ total }}
    >
      {(item, idx) => <UpcomingPaymentsTableColumn key={idx} item={item} />}
    </UITableCard>
  );
};

interface UpcomingPaymentsTableColumnProps {
  item: IUpcomingPayment;
}

const UpcomingPaymentsTableColumn = ({
  item,
}: UpcomingPaymentsTableColumnProps) => {
  return (
    <TableRow key={item.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center font-semibold text-sm rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-foreground">
            {item.clientName.charAt(0)}
          </div>
          <p className="text-sm font-medium text-foreground">
            {item.clientName}
          </p>
        </div>
      </TableCell>

      <TableCell>
        <p className="text-sm text-foreground">{item.invoiceNumber}</p>
      </TableCell>

      <TableCell>
        <p className="text-sm font-medium text-foreground">
          {formatDate(item.dueDate)}
        </p>
      </TableCell>

      <TableCell>
        <p className="text-sm font-semibold text-foreground">
          {formatCurrency(item.amount)}
        </p>
      </TableCell>

      <TableCell>
        <p className="text-sm text-foreground">{item.paymentMethod}</p>
      </TableCell>

      <TableCell>
        <td className="px-6 py-4">
          {getStatusBadge(item.status as StatusType)}
        </td>
      </TableCell>
    </TableRow>
  );
};
