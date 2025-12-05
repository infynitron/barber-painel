"use client";

import React, { Suspense } from "react";

import { useAppForm } from "@/integrations/tanstack-form";

import { useAuth } from "@/modules/auth/useAuth";
import { signupSchema } from "@/modules/auth/signup.schema";

export default function SignUpForm() {
  const { signUpWithEmail } = useAuth();

  const [isEmailLoading, setIsEmailLoading] = React.useState<boolean>(false);

  const form = useAppForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: signupSchema,
    },
    onSubmit: async ({ value }) => {
      setIsEmailLoading(true);
      await signUpWithEmail(value);
      setIsEmailLoading(false);
    },
  });

  return (
    <form
      className="grid grid-cols-12 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="col-span-12 md:col-span-12">
        <form.AppField name="fullName">
          {(field) => (
            <field.FormInput
              label="Nome Completo"
              placeholder="Digite seu nome e sobrenome"
            />
          )}
        </form.AppField>
      </div>

      <div className="col-span-12 md:col-span-12">
        <form.AppField name="email">
          {(field) => (
            <field.FormEmail label="E-mail" placeholder="Digite seu e-mail" />
          )}
        </form.AppField>
      </div>

      <div className="col-span-12 md:col-span-12">
        <form.AppField name="password">
          {(field) => (
            <field.FormPassword label="Senha" placeholder="Digite sua senha" />
          )}
        </form.AppField>
      </div>

      <div className="col-span-12 md:col-span-12">
        <form.AppField name="confirmPassword">
          {(field) => (
            <field.FormPassword
              label="Confirme a Senha"
              placeholder="Digite sua senha novamente"
            />
          )}
        </form.AppField>
      </div>

      <div className="col-span-12 md:col-span-12">
        <form.AppForm>
          <form.FormSubmit disabled={isEmailLoading} label="Cadastrar" />
        </form.AppForm>
      </div>
    </form>
  );
}
