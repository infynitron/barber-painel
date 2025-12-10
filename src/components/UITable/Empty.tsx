import { DynamicIcon } from "@/components/DynamicIcon";

import { cn } from "@/lib/utils";

export interface UITableEmptyProps {
  columns: number;
  icon?: {
    name?: string;
    className?: string;
    size?: number;
  };
  placeholder?: string;
}

export const UITableEmpty = ({
  columns,
  icon,
  placeholder,
}: UITableEmptyProps) => {
  return (
    <tr>
      <td colSpan={columns} className="px-6 py-12 space-y-4 text-center">
        <DynamicIcon
          className={cn("mx-auto text-foreground", icon?.className)}
          size={icon?.size ?? 48}
          name={icon?.name ?? "CalendarIcon"}
        />

        <p className="text-gray-400 text-sm">
          {placeholder ?? "Nenhum registro encontrado"}
        </p>
      </td>
    </tr>
  );
};
