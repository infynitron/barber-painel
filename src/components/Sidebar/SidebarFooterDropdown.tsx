"use client";

import { useRouter } from "next/navigation";

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  SparklesIcon,
} from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { useSidebar } from "@/components/ui/sidebar";

import {
  NavSidebarFooterAvatar,
  NavSidebarFooterAvatarProps,
} from "@/components/Sidebar/SidebarFooterAvatar";

import { supabase } from "@/integrations/supabase/client";

type NavSidebarFooterDropdownProps = NavSidebarFooterAvatarProps;

export function NavSidebarFooterDropdown({
  user,
}: NavSidebarFooterDropdownProps) {
  const router = useRouter();

  const { isMobile } = useSidebar();

  const logout = async () => {
    await supabase.auth.signOut();

    router.push("/");
  };

  return (
    <DropdownMenuContent
      className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
    >
      <DropdownMenuLabel className="p-0 font-normal">
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <NavSidebarFooterAvatar user={user} />
        </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        {/* TODO: Criar rota */}
        <DropdownMenuItem onClick={() => router.push("#")}>
          <SparklesIcon className="text-primary" />
          Atualize para o Pro
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        {/* TODO: Criar rota */}
        <DropdownMenuItem onClick={() => router.push("#")}>
          <BadgeCheckIcon />
          Conta
        </DropdownMenuItem>

        {/* TODO: Criar rota */}
        <DropdownMenuItem onClick={() => router.push("#")}>
          <CreditCardIcon />
          Pagamento
        </DropdownMenuItem>

        {/* TODO: Criar rota */}
        <DropdownMenuItem onClick={() => router.push("#")}>
          <BellIcon />
          Notificações
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuItem onClick={() => logout()}>
        <LogOutIcon className="text-red-500" />
        Sair
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
