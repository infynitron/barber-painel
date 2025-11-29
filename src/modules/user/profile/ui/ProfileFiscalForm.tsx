"use client";

import { profileFiscalSchema } from "@/modules/user/profile/profile.schema";

import { useAppForm } from "@/integrations/tanstack-form";

interface SubmitData {
  type: string;
  document: string;
}

interface ProfileFiscalFormProps {
  onSubmit: (data: SubmitData) => void;
}

export default function ProfileFiscalForm({
  onSubmit,
}: ProfileFiscalFormProps) {
  const form = useAppForm({
    defaultValues: {
      type: "",
      document: "",
    },
    validators: {
      onChange: profileFiscalSchema,
    },
    onSubmit: async ({ value }) => {
      const data = {
        type: value.type,
        document: value.document,
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
      <form.AppField name="type">
        {(field) => (
          <field.FormInput label="Tipo de Documento" placeholder="Digite ..." />
        )}
      </form.AppField>

      <form.AppField name="document">
        {(field) => (
          <field.FormInput label="Documento" placeholder="Digite seu documento" />
        )}
      </form.AppField>

      <form.AppForm>
        <form.FormSubmit label="Atualizar senha" />
      </form.AppForm>
    </form>
  );
}
