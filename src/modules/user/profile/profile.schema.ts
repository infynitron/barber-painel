import { z } from "zod/v4";

import { loginSchema } from "@/modules/shared/schema";

export const profileLoginSchema = loginSchema.omit({ email: true });

export const profileFiscalSchema = z.object({
  // TODO: Barbearia ou barbeiro
  type: z.string(),
  // TODO: Regex para CPF/CNPJ
  document: z.string().trim(),
});

export const profileContactSchema = z.object({
  telephone: z.string().trim(),
  whatsapp: z.string().trim(),
  instagram: z.string().trim(),
  facebook: z.string().trim(),
})

export const profileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(5, { message: "Nome deve ter no mínimo 5 caracteres" })
    .regex(/^[A-Za-z]+$/, "O nome deve ter apenas letras"),
  // TODO: ZOD File
  photo: z.any(),
  contact: z
    .object({
      // TODO: Regex para celular
      cellphone: z.string().trim(),
      // TODO: Regex para telefone
      telphone: z.string().trim(),
    })
    .optional(),
  address: z
    .object({
      zip_code: z.string().trim(),
      uf: z.string().trim(),
      city: z.string().trim(),
      neighborhood: z.string().trim(),
      street: z.string().trim(),
      number: z.string().trim(),
    })
    .optional(),
});
