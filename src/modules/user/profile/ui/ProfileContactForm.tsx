"use client";

import { profileContactSchema } from "@/modules/user/profile/profile.schema";
import { useAppForm } from "@/integrations/tanstack-form";

interface SubmitData {
  telephone: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
}

interface ProfileContactFormProps {
  onSubmit: (data: SubmitData) => void;
}

export default function ProfileContactForm({ onSubmit }: ProfileContactFormProps) {
  const form = useAppForm({
    defaultValues: {
      telephone: "",
      whatsapp: "",
      facebook: "",
      instagram: "",
    },
    validators: {
      onChange: profileContactSchema,
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
      {/* TELEFONE */}
      <form.AppField name="telephone">
        {(field) => (
          <field.FormInput
            label="Telefone"
            placeholder="Digite seu telefone"
          />
        )}
      </form.AppField>

      {/* WHATSAPP */}
      <form.AppField name="whatsapp">
        {(field) => (
          <field.FormInput
            label="WhatsApp"
            placeholder="Digite seu WhatsApp"
          />
        )}
      </form.AppField>

      {/* FACEBOOK */}
      <form.AppField name="facebook">
        {(field) => (
          <field.FormInput
            label="Facebook"
            placeholder="Link do Facebook"
          />
        )}
      </form.AppField>

      {/* INSTAGRAM */}
      <form.AppField name="instagram">
        {(field) => (
          <field.FormInput
            label="Instagram"
            placeholder="@seuuser"
          />
        )}
      </form.AppField>

      <form.AppForm>
        <form.FormSubmit label="Atualizar contato" />
      </form.AppForm>
    </form>
  );
}
