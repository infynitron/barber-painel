import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import {
  BookOpenIcon,
  DollarSignIcon,
  Settings2Icon,
  SquareTerminalIcon,
} from "lucide-react";

import { createServerClient } from "@/integrations/supabase/server";

import { NavSidebar, NavSidebarProps } from "@/components/Sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { NavSidebarInsetHeader } from "@/components/Sidebar/SidebarInsetHeader";

async function UserDetails() {
  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.getClaims();

  console.log(data);
  console.log(error);
  if (error || !data?.claims) {
    redirect("/sign-in");
  }

  return <></>;
}

const data: NavSidebarProps = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
    fallback: "CN",
  },
  modules: [
    {
      title: "Playground",
      icon: SquareTerminalIcon,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "/barbeiro",
        },
        {
          title: "Agenda",
          url: "/barbeiro/agenda",
        },
      ],
    },
    {
      title: "Caixa",
      icon: DollarSignIcon,
      items: [
        {
          title: "A Receber",
          url: "/barbeiro/receber",
        },
        {
          title: "A Pagar",
          url: "/barbeiro/pagar",
        },
        {
          title: "Relatórios",
          url: "/barbeiro/relatorios",
        },
      ],
    },
    {
      title: "Documentation",
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
      icon: Settings2Icon,
      items: [
        {
          title: "General",
          url: "/configuracoes",
        },
        {
          title: "Perfil",
          url: "/perfil",
        },
        {
          title: "Team",
          url: "/barbeiro/time",
        },
        {
          title: "Serviços",
          url: "/barbeiro/servicos",
        },
        {
          title: "Pagamento",
          url: "/barbeiro/pagamento",
        },
      ],
    },
  ],
};

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <NavSidebar user={data.user} modules={data.modules} />

      <SidebarInset>
        <NavSidebarInsetHeader />

        <Suspense>
          <UserDetails />
        </Suspense>

        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
