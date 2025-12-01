"use client";

import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { signupSchema } from "@/modules/auth/signup.schema";

import { supabase } from "@/integrations/supabase/client";
import { useAppForm } from "@/integrations/tanstack-form";

import { ISignUpSubmitForm } from "@/modules/auth/types/signup";

export default function SignUpForm() {
  const router = useRouter();
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
      await handleSignUpWithEmail(value);
    },
  });

  const handleSignUpWithEmail = async (data: ISignUpSubmitForm) => {
    setIsEmailLoading(true);

    const { data: user, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          fullName: data.fullName,
        },
      },
    });

    if (user.user?.id) {
      router.push("/admin");
      toast.success("Cadastro realizado com sucesso!");
    }

    if (error) {
      // TODO: Use do code
      console.error(error);
      switch (error.message) {
        case "User already registered":
          toast.error("E-mail já está em uso!");
          break;
        default:
          toast.error(
            error?.message ?? "Ocorreu um erro ao tentar criar a conta!"
          );
          break;
      }
    }

    setIsEmailLoading(false);
  };

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

      <div className="col-span-12 md:col-span-6">
        <form.AppField name="password">
          {(field) => (
            <field.FormPassword label="Senha" placeholder="Digite sua senha" />
          )}
        </form.AppField>
      </div>

      <div className="col-span-12 md:col-span-6">
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
          <form.FormSubmit loading={isEmailLoading} label="Cadastrar" />
        </form.AppForm>
      </div>
    </form>
  );
}
