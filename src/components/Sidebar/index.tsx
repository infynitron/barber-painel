import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavSidebarFooter } from "@/components/Sidebar/SidebarFooter";

import { NavSidebarHeader } from "@/components/Sidebar/SidebarHeader";

import {
  NavSidebarContent,
  NavSidebarContentProps,
} from "@/components/Sidebar/SidebarContent";

export type NavSidebarProps = {
  user: any;
} & NavSidebarContentProps;

export function NavSidebar({ user, modules }: NavSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavSidebarHeader />
      </SidebarHeader>

      <SidebarContent>
        <NavSidebarContent modules={modules} />
      </SidebarContent>

      <SidebarFooter>
        <NavSidebarFooter user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
