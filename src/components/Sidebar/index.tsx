import * as React from "react";

import { BookOpenIcon, Settings2Icon, SquareTerminalIcon } from "lucide-react";

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

type Props = {
  user: any;
} & NavSidebarContentProps;

const data: Props = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
    fallback: "CN",
  },
  modules: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminalIcon,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpenIcon,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2Icon,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavSidebarHeader />
      </SidebarHeader>

      <SidebarContent>
        <NavSidebarContent modules={data.modules} />
      </SidebarContent>

      <SidebarFooter>
        <NavSidebarFooter user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
