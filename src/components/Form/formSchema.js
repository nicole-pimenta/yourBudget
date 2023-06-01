import { z } from "zod";

export const formSchema = z.object({
  description: z
    .string()
    .min(3, "A descrição é obrigatória e precisa de pelo menos 3 caracteres"),
  value: z.string(),
  type: z.string(),
});
