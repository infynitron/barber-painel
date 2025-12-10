import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { ITableColumn } from "@/components/UITable";

interface UITableHeaderProps {
  columns: ITableColumn[];
}

export const UITableHeader = ({ columns }: UITableHeaderProps) => {
  return (
    <TableHeader>
      <TableRow>
        {columns.map((item) => (
          <TableHead
            key={"header_" + item.property}
            className={`text-${item?.align ?? "left"}`}
          >
            {item.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};
