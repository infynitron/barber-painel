import Link from "next/link";
import { ScissorsIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import settings from "@/data";

export function NavSidebarHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link href="#">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <ScissorsIcon className="size-5" />
            </div>

            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{settings.fullName}</span>
              <span className="">v{settings.version}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
