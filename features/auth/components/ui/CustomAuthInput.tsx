import { InputHTMLAttributes } from "react";

import cn from "classnames";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface CustomAuthInputProps<TFormData extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  activeField: Path<TFormData> | null;
  changeActiveField: (param: Path<TFormData> | null) => void;
  isError: boolean;
  label: string;
  name: string;
  register: UseFormRegister<TFormData>;

  className?: string;
}

export function CustomAuthInput<TFormData extends FieldValues>({
  activeField,
  changeActiveField,
  isError,
  label,
  name,
  register,

  className,
  ...props
}: CustomAuthInputProps<TFormData>) {
  const fieldName = name as Path<TFormData>;

  return (
    <div
      className={cn(
        className,
        "grid border border-[var(--color-border-light)] border-solid py-[13px] px-[18px] rounded-[10px] h-[69px] transition-all mb-[10px]",
        activeField === fieldName && "border-primary",
        isError && "border-[var(--color-error)]",
      )}
    >
      <label
        className={cn(
          "text-primary mb-[3px] text-[12px]",
          activeField !== fieldName && "hidden",
        )}
        htmlFor={fieldName}
      >
        {label}
      </label>
      <input
        {...register(fieldName)}
        {...props}
        name={name}
        className="focus:outline-none text-[14px]"
        onFocus={() => changeActiveField(fieldName)}
        onBlur={() => changeActiveField(null)}
      />
    </div>
  );
}
