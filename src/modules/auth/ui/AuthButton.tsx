import Link from "next/link";

import { Button } from "@/components/ui/button";

import { createServerClient } from "@/integrations/supabase/server";

import { LogoutButton } from "@/modules/auth/ui/LogoutButton";

export async function AuthButton() {
  const supabase = await createServerClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (user) {
    return (
      <div className="flex items-center gap-4">
        Olá, {user.user_metadata?.fullname || user.email}!
        <LogoutButton />
      </div>
    );
  }

  return (
    <div className="space-x-4">
      <Button asChild size="sm" variant="outline">
        <Link href="/sign-in">Entrar</Link>
      </Button>

      <Button asChild size="sm">
        <Link href="/sign-up">Cadastrar</Link>
      </Button>
    </div>
  );
}
