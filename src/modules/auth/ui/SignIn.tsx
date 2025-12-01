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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SeparatorText } from "@/components/ui/separator-text";

import { supabase } from "@/integrations/supabase/client";

import SignWithGoogle from "@/modules/auth/ui/SignWithGoogle";
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
    <div className="space-y-6 p-4">
      <div>
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-3xl font-bold">{settings.fullName}</h1>
        </div>

        <p className="text-center text-muted-foreground">
          {settings.description}
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader className="text-center">
          <CardTitle className="font-display">Bem-vindo de volta</CardTitle>
          <CardDescription>Entre com seus dados de e-mail</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <SignInForm
            loading={isEmailLoading}
            onSubmit={handleSignInWithEmail}
          />

          <SeparatorText text="ou" />

          <SignWithGoogle />
        </CardContent>

        <CardFooter className="flex-col space-y-2">
          <div className="space-x-2 text-center text-muted-foreground">
            <span>Esqueceu a senha?</span>
            <Link href="/recovery" className="underline hover:text-primary">
              Recupere aqui
            </Link>
          </div>

          <div className="space-x-2 text-center text-muted-foreground">
            <span>Não possui uma conta?</span>
            <Link href="/sign-up" className="underline hover:text-primary">
              Crie agora
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
