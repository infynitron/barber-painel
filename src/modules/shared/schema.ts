import { z } from "zod/v4";

export const password = z
  .string()
  .refine((value) => /[a-z]/.test(value), {
    message: "A senha deve conter pelo menos uma letra minúscula",
    path: ["password"],
  })
  .refine((value) => /[A-Z]/.test(value), {
    message: "A senha deve conter pelo menos uma letra maiúscula",
    path: ["password"],
  })
  .refine((value) => /[0-9]/.test(value), {
    message: "A senha deve conter pelo menos um número",
    path: ["password"],
  })
  .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
    message: "A senha deve conter pelo menos um caractere especial",
    path: ["password"],
  })
  .min(6, { message: "A senha deve ter no mínimo 6 caracteres" });
