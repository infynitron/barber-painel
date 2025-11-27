"use client";

import { signinSchema } from "@/modules/auth/signin.schema";

import { useAppForm } from "@/integrations/tanstack-form";

interface SubmitData {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSubmit: (data: SubmitData) => void;
}

export default function SignInForm({ onSubmit }: SignInFormProps) {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: signinSchema,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
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
          <field.FormPassword label="Senha" placeholder="Digite sua senha" />
        )}
      </form.AppField>

      <form.AppForm>
        <form.FormSubmit key="Entrar" />
      </form.AppForm>
    </form>
  );
}
