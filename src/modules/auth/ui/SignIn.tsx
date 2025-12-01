"use client";

import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { supabase } from "@/integrations/supabase/client";

import SignInForm from "@/modules/auth/ui/SignInForm";

import { ISignInSubmitForm } from "@/modules/auth/types/signin";

export default function SignInComponent() {
  const router = useRouter();
  const [isEmailLoading, setIsEmailLoading] = React.useState<boolean>(false);

  const handleSignInWithEmail = async (data: ISignInSubmitForm) => {
    setIsEmailLoading(true);

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (user.user?.id) {
      router.push("/admin");
      toast.success("Login realizado com sucesso!");
    }

    if (error) {
      console.error(error);
      switch (error.code) {
        case "invalid_credentials":
          toast.error("E-mail ou senha incorreto!");
          break;
        default:
          toast.error(
            error?.message ?? "Ocorreu um erro ao tentar fazer login!"
          );
          break;
      }
    }

    setIsEmailLoading(false);
  };

  return (
    <div className="space-y-4">
      <SignInForm loading={isEmailLoading} onSubmit={handleSignInWithEmail} />
    </div>
  );
}
