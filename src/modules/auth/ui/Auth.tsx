"use client";

import React from "react";
import { ScissorsIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInComponent from "@/modules/auth/ui/SignIn";
import SignUpComponent from "@/modules/auth/ui/SignUp";

import settings from "@/data";

interface Props {
  type: "sign-in" | "sign-up";
}

export default function AuthComponent({ type }: Props) {
  const [typePage] = React.useState(type);

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
          <Tabs defaultValue={typePage} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="sign-in">Entrar</TabsTrigger>
              <TabsTrigger value="sign-up">Cadastrar</TabsTrigger>
            </TabsList>

            <TabsContent value="sign-in">
              <SignInComponent />
            </TabsContent>

            <TabsContent value="sign-up">
              <SignUpComponent />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
