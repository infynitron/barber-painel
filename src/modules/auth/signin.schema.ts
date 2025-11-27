import { z } from "zod/v4";

export const signinSchema = z.object({
  email: z.email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});
