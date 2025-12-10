import { ITableColumn } from "@/components/UITable";

import { cn } from "@/lib/utils";

interface UITableHeaderProps {
  columns: ITableColumn[];
}

export const UITableHeader = ({ columns }: UITableHeaderProps) => {
  return (
    <thead className="bg-background">
      <tr>
        {columns.map((item) => (
          <th
            key={"header_" + item.property}
            className={cn(
              "px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider",
              `text-${item?.align ?? "left"}`
            )}
          >
            {item.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
