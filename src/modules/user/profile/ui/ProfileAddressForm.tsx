"use client";

import { profileAddressSchema } from "@/modules/user/profile/profile.schema";

import { useAppForm } from "@/integrations/tanstack-form";

interface SubmitData {
  zipCode: string;
  uf: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
}

interface ProfileAddressFormProps {
  onSubmit: (data: SubmitData) => void;
}

export default function ProfileAddressForm({
  onSubmit,
}: ProfileAddressFormProps) {
  const form = useAppForm({
    defaultValues: {
      zipCode: "",
      uf: "",
      city: "",
      neighborhood: "",
      street: "",
      number: "",
      complement: "" as string | null,
    },
    validators: {
      onChange: profileAddressSchema,
    },
    onSubmit: async ({ value }) => {
      const data = {
        zipCode: value.zipCode,
        uf: value.uf,
        city: value.city,
        neighborhood: value.neighborhood,
        street: value.street,
        number: value.number,
        complement: value.complement ?? "",
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
      {/* TODO: Validar CEP */}
      <form.AppField name="zipCode">
        {(field) => <field.FormInput label="CEP" placeholder="Digite o CEP" />}
      </form.AppField>

      <form.AppField name="uf">
        {(field) => <field.FormInput label="UF" placeholder="Ex: MG" />}
      </form.AppField>

      <form.AppField name="city">
        {(field) => (
          <field.FormInput label="Cidade" placeholder="Digite a cidade" />
        )}
      </form.AppField>

      <form.AppField name="neighborhood">
        {(field) => (
          <field.FormInput label="Bairro" placeholder="Digite o bairro" />
        )}
      </form.AppField>

      <form.AppField name="street">
        {(field) => <field.FormInput label="Rua" placeholder="Digite a rua" />}
      </form.AppField>

      <form.AppField name="number">
        {(field) => (
          <field.FormInput label="Número" placeholder="Digite o número" />
        )}
      </form.AppField>

      {/* TODO : ALTERAR CAMPO PARA TEXTAREA */}
      <form.AppField name="complement">
        {(field) => (
          <field.FormInput
            label="Complemento"
            placeholder="Ex: Apt 201, Casa 2..."
          />
        )}
      </form.AppField>

      <form.AppForm>
        <form.FormSubmit label="Atualizar endereço" />
      </form.AppForm>
    </form>
  );
}
