import { DynamicIcon } from "@/components/DynamicIcon";
import { ITableColumn } from "@/components/UITable";

interface UITableEmptyProps {
  columns: ITableColumn[];
  icon: string;
  placeholder?: string;
}

export const UITableEmpty = ({
  columns,
  icon,
  placeholder,
}: UITableEmptyProps) => {
  return (
    <tr>
      <td colSpan={columns.length} className="px-6 py-12 text-center">
        <DynamicIcon
          className="mx-auto mb-3 text-foreground"
          name={icon}
          size={48}
        />

        <p className="text-gray-400 text-sm">
          {placeholder ?? "Nenhum registro encontrado"}
        </p>
      </td>
    </tr>
  );
};
