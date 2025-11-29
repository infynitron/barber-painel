import { z } from "zod/v4";

import { loginSchema } from "@/modules/shared/schema";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(5, { message: "Nome deve ter no mínimo 5 caracteres" })
      .regex(/^[A-Za-zÀ-ÿ ]+$/, "O nome deve ter apenas letras"),
  })
  .extend(loginSchema.shape);
