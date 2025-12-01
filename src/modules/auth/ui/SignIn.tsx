"use client";

import React from "react";
import { toast } from "sonner";
import Link from "next/link";
import { ScissorsIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { supabase } from "@/integrations/supabase/client";

import SignInForm from "@/modules/auth/ui/SignInForm";

import { ISignInSubmitForm } from "@/modules/auth/types/signin";

import settings from "@/data";

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
    <div className="w-full max-w-md space-y-6 p-4 mx-auto">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto flex items-center justify-center shadow-glow">
          <ScissorsIcon className="w-12 h-12 text-primary" />
        </div>
        <h1 className="font-display text-3xl font-bold mb-2 text-gradient">
          {settings.fullName}
        </h1>
        <p className="text-muted-foreground">{settings.description}</p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="font-display">Bem-vindo</CardTitle>
          <CardDescription>
            Entre com sua conta ou crie uma nova
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignInForm
            loading={isEmailLoading}
            onSubmit={handleSignInWithEmail}
          />

          <Link href="/recovery">Esqueceu a senha?</Link>

          <br />

          <Link href="/sign-up">Não possui conta?</Link>
        </CardContent>
      </Card>
    </div>
  );
}
