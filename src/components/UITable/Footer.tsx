export interface UITableFooterProps {
  items: number;
  total: number;
}

export const UITableFooter = ({ items, total }: UITableFooterProps) => {
  if (items === 0) return <></>;

  return (
    <div className="w-full px-6 py-4 border-t border-gray-800 bg-background">
      <p className="text-sm text-gray-400">
        Mostrando <span className="font-medium text-white">{items}</span> de{" "}
        <span className="font-medium text-white">{total}</span> registros
      </p>
    </div>
  );
};
