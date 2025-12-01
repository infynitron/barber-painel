import { ChevronsUpDownIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  NavSidebarFooterAvatar,
  NavSidebarFooterAvatarProps,
} from "@/components/Sidebar/SidebarFooterAvatar";

import { NavSidebarFooterDropdown } from "@/components/Sidebar/SidebarFooterDropdown";

type NavSidebarFooterProps = NavSidebarFooterAvatarProps;

export function NavSidebarFooter({ user }: NavSidebarFooterProps) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              size="lg"
            >
              <NavSidebarFooterAvatar user={user} />

              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <NavSidebarFooterDropdown user={user} />
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
