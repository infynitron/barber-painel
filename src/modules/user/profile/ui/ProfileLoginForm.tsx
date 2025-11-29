"use client";

import { profileLoginSchema } from "@/modules/user/profile/profile.schema";

import { useAppForm } from "@/integrations/tanstack-form";

interface SubmitData {
  password: string;
}

interface ProfileLoginFormProps {
  onSubmit: (data: SubmitData) => void;
}

export default function ProfileLoginForm({ onSubmit }: ProfileLoginFormProps) {
  const form = useAppForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: profileLoginSchema,
    },
    onSubmit: async ({ value }) => {
      const data = {
        password: value.password,
      };
      onSubmit(data);
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
        <form.FormSubmit label="Atualizar senha" />
      </form.AppForm>
    </form>
  );
}
