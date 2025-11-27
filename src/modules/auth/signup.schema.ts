import { z } from "zod/v4";

import { password } from "@/modules/shared/schema";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, { message: "Nome deve ter no mínimo 2 caracteres" })
      .regex(/^[A-Za-z]+$/, "O nome deve ter apenas letras"),
    email: z.email({ message: "Email inválido" }),
    password,
    confirmPassword: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

// TODO: Add phone number validation
// TODO: Adicionar dados de endereço
// TODO: Adicionar validação de cpf/cnpj
