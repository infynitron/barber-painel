"use client";

import { signinSchema } from "@/modules/auth/signin.schema";

import { useAppForm } from "@/integrations/tanstack-form";

import { ISignInSubmitForm } from "@/modules/auth/types/signin";

interface SignInFormProps {
  loading?: boolean;
  onSubmit: (data: ISignInSubmitForm) => Promise<void>;
}

export default function SignInForm(props: SignInFormProps) {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: signinSchema,
    },
    onSubmit: async ({ value }) => {
      await props.onSubmit(value);
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
        <form.FormSubmit label="Entrar" />
      </form.AppForm>
    </form>
  );
}
