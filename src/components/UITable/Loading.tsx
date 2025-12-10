import { Skeleton } from "@/components/ui/skeleton";

interface UITableLoadingProps {
  columns: number;
}

export const UITableLoading = ({ columns }: UITableLoadingProps) => {
  return (
    <>
      {new Array(4).fill("").map((line, linheIdx) => (
        <tr
          key={"line_" + linheIdx}
          className="hover:bg-[#1a1a1c] transition-colors duration-150"
        >
          {new Array(columns).fill("").map((column, idx) => (
            <td
              key={"line_" + linheIdx + "column_" + idx}
              className="px-2 py-2"
            >
              <Skeleton className="w-full h-14" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
