import { z } from "zod/v4";

export const password = z
  .string()
  .refine(
    (value) => /[a-z]/.test(value),
    "A senha deve conter pelo menos uma letra minúscula"
  )
  .refine(
    (value) => /[A-Z]/.test(value),
    "A senha deve conter pelo menos uma letra maiúscula"
  )
  .refine(
    (value) => /[0-9]/.test(value),
    "A senha deve conter pelo menos um número"
  )
  .refine(
    (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    "A senha deve conter pelo menos um caractere especial"
  )
  .min(6, "A senha deve ter no mínimo 6 caracteres");
