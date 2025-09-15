"use client";

import { useState } from "react";

import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

import { BaseFormField } from "../../types/ BaseFormField.type";
import { CustomAuthInput } from "./CustomAuthInput";
import { FormErrorMessage } from "./FormErrorMessage";

interface FormFieldsProps<TFormData extends FieldValues> {
  fields: BaseFormField[];

  register: UseFormRegister<TFormData>;
  errors: FieldErrors<TFormData>;

  className?: string;
}

export function FormFields<TFormData extends FieldValues>({
  fields,
  register,
  errors,
}: FormFieldsProps<TFormData>) {
  const [activeField, setActiveField] = useState<Path<TFormData> | null>(null);

  function changeActiveField(value: Path<TFormData> | null) {
    setActiveField(value);
  }

  return fields.map(({ id, name, type, placeholder, label }, index) => {
    const fieldName = name as Path<TFormData>;
    const fieldError = errors[name];

    return (
      <div key={index}>
        <CustomAuthInput<TFormData>
          activeField={activeField}
          changeActiveField={changeActiveField}
          isError={!!fieldError}
          label={label}
          register={register}
          id={id}
          name={fieldName}
          type={type}
          placeholder={placeholder}
        />
        {fieldError && (
          <FormErrorMessage className="mb-[18px]">
            {fieldError.message?.toString()}
          </FormErrorMessage>
        )}
      </div>
    );
  });
}
