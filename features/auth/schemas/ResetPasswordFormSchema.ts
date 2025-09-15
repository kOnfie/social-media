import { z } from "zod";

export const ResetPasswordFormSchema = z
  .object({
    password: z
      .string({ message: "Field is necessary" })
      .min(6, "Minimum 6 characters.")
      .nonempty({ message: "Field cannot be empty" }),

    confirmPassword: z
      .string({ message: "Field is necessary" })
      .min(6, "Minimum 6 characters.")
      .nonempty({ message: "Field cannot be empty" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords are not equals.",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormData = z.infer<typeof ResetPasswordFormSchema>;
