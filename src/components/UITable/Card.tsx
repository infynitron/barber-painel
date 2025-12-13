import React from "react";

import { SearchIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Table, TableBody } from "@/components/ui/table";

import {
  ITableColumn,
  UITableEmpty,
  UITableFooter,
  UITableFooterProps,
  UITableHeader,
  UITableLoading,
  UITableEmptyProps,
} from "@/components/UITable";

type IItem = any;

interface UITableCardProps {
  items: IItem[];
  columns: ITableColumn[];
  loading?: boolean;
  header: {
    title: string;
    subtitle: string;
    actions?: React.ReactNode;
  };
  filters?: {
    searchTerm: string;
    setSearchTerm: (text: string) => void;
  };
  empty?: Partial<Omit<UITableEmptyProps, "columns">>;
  footer?: Omit<UITableFooterProps, "items">;
  children: (item: IItem, idx: number) => React.ReactNode;
}

export const UITableCard = ({
  items,
  columns,
  loading,
  header,
  filters,
  empty,
  footer,
  children,
}: UITableCardProps) => {
  if (columns.length == 0) {
    return <p className="text-red-500">Colunas não definidas</p>;
  }

  return (
    <Card>
      {header.title && (
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{header.title}</CardTitle>
              <CardDescription>{header.subtitle}</CardDescription>
            </div>

            {header?.actions && header?.actions}
          </div>
        </CardHeader>
      )}

      <CardContent>
        {filters && (
          <div>
            <div className="flex-1 relative">
              <SearchIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={18}
              />

              <input
                className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1c] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-200"
                type="text"
                placeholder="Buscar por cliente ou número da fatura..."
                value={filters.searchTerm}
                onChange={(e) => {
                  // TODO: Search
                  filters.setSearchTerm(e.target.value);
                }}
              />
            </div>

            {/*
            // TODO: Filters
            <div className="flex gap-2">
              <select
                className="px-4 py-2.5 bg-[#1a1a1c] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-700 transition-colors duration-200"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">Todos Status</option>
                <option value="pending">Pendentes</option>
                <option value="overdue">Atrasados</option>
              </select>
            </div>
            */}
          </div>
        )}

        <Table className="overflow-x-auto">
          <UITableHeader columns={columns} />

          <TableBody>
            {loading && <UITableLoading columns={columns.length} />}

            {!loading && items.length === 0 && (
              <UITableEmpty columns={columns.length} {...empty} />
            )}

            {!loading && items.length > 0 && <>{items.map(children)}</>}
          </TableBody>
        </Table>
      </CardContent>

      {footer?.total && (
        <CardFooter>
          <UITableFooter items={items.length} total={footer.total} />
        </CardFooter>
      )}
    </Card>
  );
};
