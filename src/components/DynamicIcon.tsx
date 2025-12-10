import * as Icons from "lucide-react";

type Icon = React.ForwardRefExoticComponent<
  Omit<Icons.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const IconComponent = Icons[name as keyof typeof Icons] as Icon;
  if (!IconComponent) return <span>Icon "{name}" not found</span>;

  return <IconComponent {...props}></IconComponent>;
};
