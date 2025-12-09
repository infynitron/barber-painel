import * as Icons from "lucide-react";

type Icon = React.ForwardRefExoticComponent<
  Omit<Icons.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

interface DynamicIconProps {
  name: string;
  size?: number;
  color?: string;
}

export const DynamicIcon = ({ name, size, color }: DynamicIconProps) => {
  const IconComponent = Icons[name as keyof typeof Icons] as Icon;
  if (!IconComponent) return <span>Icon "{name}" not found</span>;

  return <IconComponent className={color} size={size}></IconComponent>;
};
