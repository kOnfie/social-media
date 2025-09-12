import { BaseFormField } from "../types/ BaseFormField.type";

export const RESET_PASSWORD_FORM_FIELDS: BaseFormField[] = [
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Enter your new password",
    label: "Enter your new password",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm your new password",
    label: "Confirm your new password",
  },
];
