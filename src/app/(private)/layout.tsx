import { Suspense } from "react";
import { redirect } from "next/navigation";

import { createServerClient } from "@/integrations/supabase/server";

import { AuthButton } from "@/modules/auth/ui/AuthButton";

import { NavSidebar } from "@/components/Sidebar";

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

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <NavSidebar />

      <SidebarInset>
        <NavSidebarInsetHeader />

        <Suspense>
          <UserDetails />
        </Suspense>

        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
