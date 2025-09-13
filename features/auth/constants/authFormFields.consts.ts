import { BaseFormField } from "../types/ BaseFormField.type";

export const AUTH_FORM_FIELDS: BaseFormField[] = [
  {
    id: "text",
    name: "name",
    type: "text",
    placeholder: "Enter your username",
    label: "Email username",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
    label: "Email address",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Your password",
  },
];
