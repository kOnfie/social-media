import { z } from "zod";

export const ForgotPasswordFormSchema = z.object({
  email: z
    .string({ message: "Field is necessary" })
    .email("Email is not valid.")
    .nonempty({ message: "Field cannot be empty" }),
});

export type ForgotPasswordFormSchemaData = z.infer<
  typeof ForgotPasswordFormSchema
>;
