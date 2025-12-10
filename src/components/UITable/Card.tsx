import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ITableColumn,
  UITableEmpty,
  UITableFooter,
  UITableFooterProps,
  UITableHeader,
  UITableLoading,
  UITableEmptyProps,
} from "@/components/UITable";

import { DynamicIcon, DynamicIconProps } from "@/components/DynamicIcon";

interface UITableCardProps {
  items: any[];
  columns: ITableColumn[];
  loading?: boolean;
  header: {
    title: string;
    subtitle: string;
    icon?: DynamicIconProps;
  };
  empty?: Partial<Omit<UITableEmptyProps, "columns">>;
  footer?: Omit<UITableFooterProps, "items">;
  children: (item: any, idx: number) => React.ReactNode;
}

export const UITableCard = ({
  items,
  columns,
  loading,
  header,
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

            {header?.icon?.name && <DynamicIcon {...header.icon} />}
          </div>
        </CardHeader>
      )}

      <CardContent>
        {/* TODO: Search */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <UITableHeader columns={columns} />

            <tbody className="divide-y divide-muted">
              {loading && <UITableLoading columns={columns.length} />}

              {!loading && items.length === 0 && (
                <UITableEmpty columns={columns.length} {...empty} />
              )}

              {!loading && items.length > 0 && <>{items.map(children)}</>}
            </tbody>
          </table>
        </div>
      </CardContent>

      {footer?.total && (
        <CardFooter>
          <UITableFooter items={items.length} total={footer.total} />
        </CardFooter>
      )}
    </Card>
  );
};
