import { Suspense } from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SeparatorText } from "@/components/ui/separator-text";

import SignWithGoogle from "@/modules/auth/ui/SignWithGoogle";
import SignInForm from "@/modules/auth/ui/SignInForm";

import settings from "@/data";

export default function SignInComponent() {
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
          <Suspense>
            <SignInForm />
          </Suspense>

          <SeparatorText text="ou" />

          <SignWithGoogle />
        </CardContent>

        <CardFooter className="flex-col space-y-2">
          <div className="space-x-2 text-center text-muted-foreground">
            <span>Esqueceu a senha?</span>
            <Link
              className="hover:underline underline-offset-4 hover:text-primary"
              href="/recovery"
            >
              Recupere aqui
            </Link>
          </div>

          <div className="space-x-2 text-center text-muted-foreground">
            <span>Não possui uma conta?</span>
            <Link
              className="underline underline-offset-4 hover:text-primary"
              href="/sign-up"
            >
              Crie agora
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
