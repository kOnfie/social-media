"use client";

import { useState } from "react";
import cn from "classnames";

import { FIELDS } from "../../constants/authFormFields.consts";
import { ActiveFieldType } from "../../types/ActiveFieldType.type";

interface AuthFormFieldsProps {
  className?: string;
}

export function AuthFormFields({ className }: AuthFormFieldsProps) {
  const [activeField, setActiveField] = useState<ActiveFieldType>(null);

  function changeActiveField(value: ActiveFieldType) {
    setActiveField(value);
  }

  return FIELDS.map(({ id, name, type, placeholder, label }) => (
    <div
      key={id}
      className={cn(
        className,
        "grid border border-[var(--color-border-light)] border-solid py-[13px] px-[18px] rounded-[10px] h-[69px] transition-all mb-[18px]",
        activeField === name && "border-primary"
      )}
    >
      <label className={cn("text-primary mb-[3px] text-[12px]", activeField !== name && "hidden")} htmlFor={name}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="focus:outline-none text-[14px]"
        onFocus={() => changeActiveField(name as ActiveFieldType)}
        onBlur={() => changeActiveField(null)}
      />
    </div>
  ));
}
