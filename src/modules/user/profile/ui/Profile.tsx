"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  type: "login" | "fiscal" | "contact" | "address";
}

export default function ProfileComponent({ type }: Props) {
  const [typePage] = React.useState(type);

  return (
    <div className="min-h-screen container mx-auto p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">
            Perfil
          </h1>
          <p className="text-muted-foreground">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>

        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle className="font-display">Perfil do Barbeiro</CardTitle>
            <CardDescription>
              Atualize suas informações profissionais
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue={typePage} className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
                <TabsTrigger value="contact">Contato</TabsTrigger>
                <TabsTrigger value="address">Endereço</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                TODO: Login form
                {/* TODO: Login form */}
              </TabsContent>

              <TabsContent value="fiscal">
                TODO: Fiscal form
                {/* TODO: Fiscal form */}
              </TabsContent>

              <TabsContent value="contact">
                TODO: Contact form
                {/* TODO: Contact form */}
              </TabsContent>

              <TabsContent value="address">
                TODO: Address form
                {/* TODO: Address form */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
