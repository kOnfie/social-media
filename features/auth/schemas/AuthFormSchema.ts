import { z } from "zod";

export const AuthFormSchema = z.object({
  name: z
    .string({ message: "Field is necessary" })
    .min(2, { message: "Message must include minimum 2 characters." })
    .nonempty({ message: "Field cannot be empty" }),

  email: z
    .string({ message: "Field is necessary" })
    .email("Email is not valid.")
    .nonempty({ message: "Field cannot be empty" }),

  password: z
    .string({ message: "Field is necessary" })
    .min(6, "Password must include minimum 6 characters.")
    .nonempty({ message: "Field cannot be empty" }),
});

export type AuthFormSchemaData = z.infer<typeof AuthFormSchema>;
