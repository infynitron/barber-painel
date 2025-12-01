import Link from "next/link";
import { ScissorsIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SeparatorText } from "@/components/ui/separator-text";

import SignUpGoogle from "@/modules/auth/ui/SignUpGoogle";
import SignUpForm from "@/modules/auth/ui/SignUpForm";
import SignUpPolicy from "@/modules/auth/ui/SignUpPolicy";

import settings from "@/data";

export default function SignUpComponent() {
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
          <div className="space-y-4">
            <SignUpGoogle />

            <SeparatorText text="ou" />

            <SignUpForm />

            <SignUpPolicy />

            <div className="space-x-2">
              <span>Possui conta?</span>
              <Link href="/sign-in">Faça login</Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
