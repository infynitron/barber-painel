import { ScissorsIcon } from "lucide-react";

import settings from "@/data";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 animate-fade-in">
      <ScissorsIcon className="w-8 h-8 text-primary" />
      <span className="font-display text-2xl font-bold text-foreground">
        Barbearia <span className="text-primary">{settings.name}</span>
      </span>
    </div>
  );
}
