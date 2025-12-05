"use client";

import React from "react";

import { useAppForm } from "@/integrations/tanstack-form";

import { useAuth } from "@/modules/auth/useAuth";
import { signinSchema } from "@/modules/auth/signin.schema";

interface SignInFormProps {
  loading?: boolean;
}

export default function SignInForm(props: SignInFormProps) {
  const { signInWithPassword } = useAuth();

  const [isEmailLoading, setIsEmailLoading] = React.useState<boolean>(false);

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: signinSchema,
    },
    onSubmit: async ({ value }) => {
      setIsEmailLoading(true);
      await signInWithPassword(value);
      setIsEmailLoading(false);
    },
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.AppField name="email">
        {(field) => (
          <field.FormEmail label="E-mail" placeholder="Digite seu e-mail" />
        )}
      </form.AppField>

      <form.AppField name="password">
        {(field) => (
          // TODO: Esqueceu sua senha?
          <field.FormPassword label="Senha" placeholder="Digite sua senha" />
        )}
      </form.AppField>

      <form.AppForm>
        <form.FormSubmit disabled={isEmailLoading} label="Entrar" />
      </form.AppForm>
    </form>
  );
}
