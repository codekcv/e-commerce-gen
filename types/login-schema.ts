import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Minimum length of 6.",
  }),
  code: z.optional(z.string()),
});
