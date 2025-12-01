"use client";

import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { SeparatorText } from "@/components/ui/separator-text";

import { supabase } from "@/integrations/supabase/client";

import SignUpGoogle from "@/modules/auth/ui/SignUpGoogle";
import SignUpForm from "@/modules/auth/ui/SignUpForm";
import SignUpPolicy from "@/modules/auth/ui/SignUpPolicy";

import { ISignUpSubmitForm } from "@/modules/auth/types/signup";

export default function SignUpComponent() {
  const router = useRouter();
  const [isEmailLoading, setIsEmailLoading] = React.useState<boolean>(false);

  const handleSignUpWithEmail = async (data: ISignUpSubmitForm) => {
    setIsEmailLoading(true);

    const { data: user, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          fullName: data.fullName,
        },
      },
    });

    if (user.user?.id) {
      router.push("/admin");
      toast.success("Cadastro realizado com sucesso!");
    }

    if (error) {
      console.error(error);
      switch (error.message) {
        case "User already registered":
          toast.error("E-mail já está em uso!");
          break;
        default:
          toast.error(
            error?.message ?? "Ocorreu um erro ao tentar criar a conta!"
          );
          break;
      }
    }

    setIsEmailLoading(false);
  };

  return (
    <div className="space-y-4">
      <SignUpGoogle />

      <SeparatorText text="ou" />

      <SignUpForm loading={isEmailLoading} onSubmit={handleSignUpWithEmail} />

      <SignUpPolicy />
    </div>
  );
}
