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
              colSpan={columns}
              className="px-6 py-4"
            >
              {/* TODO: Skeleton */}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
