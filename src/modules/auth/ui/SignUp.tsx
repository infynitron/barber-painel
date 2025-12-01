import Link from "next/link";
import { ScissorsIcon } from "lucide-react";

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
import SignUpForm from "@/modules/auth/ui/SignUpForm";
import SignUpPolicy from "@/modules/auth/ui/SignUpPolicy";

import settings from "@/data";

export default function SignUpComponent() {
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
        <CardHeader>
          <CardTitle className="font-display">Crie sua conta</CardTitle>
          <CardDescription>Preencha seus dados de acesso</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <SignUpForm />

          <SeparatorText text="ou" />

          <SignWithGoogle />
        </CardContent>

        <CardFooter className="mx-auto">
          <div className="space-x-2 text-center text-muted-foreground">
            <span>Já possui uma conta?</span>
            <Link href="/sign-in" className="underline hover:text-primary">
              Faça login
            </Link>
          </div>
        </CardFooter>
      </Card>

      <SignUpPolicy />
    </div>
  );
}
