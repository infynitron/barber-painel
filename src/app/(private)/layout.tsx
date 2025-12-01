import { Suspense } from "react";
import { redirect } from "next/navigation";

import { createServerClient } from "@/integrations/supabase/server";

import { AuthButton } from "@/modules/auth/ui/AuthButton";

async function UserDetails() {
  const supabase = await createServerClient();
  const { data, error } = await supabase.auth.getClaims();

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
    <main className="min-h-screen">
      <Suspense>
        <nav className="w-full flex justify-between items-center p-3 px-5 text-sm border-b border-b-foreground/50 h-16">
          <AuthButton />
        </nav>
      </Suspense>

      <Suspense>
        <UserDetails />
      </Suspense>

      {children}
    </main>
  );
}
