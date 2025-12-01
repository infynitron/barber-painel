import { Separator } from "@/components/ui/separator";

interface SeparatorTextProps {
  text: string;
}

function SeparatorText(props: SeparatorTextProps) {
  return (
    <div className="w-full flex items-center gap-2">
      <Separator className="flex-1" />
      <p>{props.text}</p>
      <Separator className="flex-1" />
    </div>
  );
}

export { SeparatorText };
