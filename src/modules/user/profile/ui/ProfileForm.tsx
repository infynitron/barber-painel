"use client";

import { profileSchema } from "@/modules/user/profile/profile.schema";

import { useAppForm } from "@/integrations/tanstack-form";

interface SubmitData {
  [key: string]: unknown;
}

interface ProfileFormProps {
  onSubmit: (data: SubmitData) => void;
}

export default function ProfileForm({ onSubmit }: ProfileFormProps) {
  const form = useAppForm({
    validators: {
      onChange: profileSchema,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value as SubmitData);
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
