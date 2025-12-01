"use client";

import { signupSchema } from "@/modules/auth/signup.schema";

import { useAppForm } from "@/integrations/tanstack-form";

import { ISignUpSubmitForm } from "@/modules/auth/types/signup";

interface SignUpFormProps {
  loading?: boolean;
  onSubmit: (data: ISignUpSubmitForm) => void;
}

export default function SignUpForm(props: SignUpFormProps) {
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
      props.onSubmit(value);
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
      <form.AppField name="fullName">
        {(field) => (
          <field.FormInput
            label="Nome Completo"
            placeholder="Digite seu nome e sobrenome"
          />
        )}
      </form.AppField>

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

      <form.AppField name="confirmPassword">
        {(field) => (
          <field.FormPassword
            label="Confirme a Senha"
            placeholder="Digite sua senha novamente"
          />
        )}
      </form.AppField>

      <form.AppForm>
        <form.FormSubmit loading={props?.loading} label="Cadastrar" />
      </form.AppForm>
    </form>
  );
}
