"use client";

import cn from "classnames";
import Link from "next/link";
import { useState } from "react";
import { CustomButton } from "./ui/CustomButton";
import { SeparatorWithText } from "./ui/SeparatorWithText";

import googleIcon from "@/public/icons/google-icon.svg";
import Image from "next/image";
import { Facebook } from "lucide-react";

interface AuthFormProps {
  className?: string;
  variant: "signin" | "signup";
}

type ActiveFieldType = "email" | "password" | null;

const FIELDS = [
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

export const AuthForm = ({ className, variant }: AuthFormProps) => {
  const [activeField, setActiveField] = useState<ActiveFieldType>(null);

  function changeActiveField(value: ActiveFieldType) {
    setActiveField(value);
  }

  return (
    <form className={cn(className, "grid")}>
      {FIELDS.map(({ id, name, type, placeholder, label }) => (
        <div
          key={id}
          className={cn(
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
      ))}

      <Link href={"/"} className="text-primary underline text-[12px] mb-[54px] flex">
        Forgot your password?
      </Link>

      <CustomButton className="py-[18.5px] mb-[27px]">{variant === "signin" ? "Sign in" : "Sign up"}</CustomButton>

      <SeparatorWithText className="mb-[14px]">
        <span className="text-gray-400 font-poppins">Or with</span>
      </SeparatorWithText>

      <div className="grid gap-[12px]">
        <CustomButton className="flex items-center justify-center gap-[8px] py-[17.5px]" variant="outline">
          <Image src={googleIcon.src} alt="Google" width={14} height={14} />
          {variant === "signin" ? "Sign in" : "Sign up"} with Google
        </CustomButton>

        <CustomButton className="flex items-center justify-center gap-[8px] py-[17.5px]" variant="outline">
          <Facebook size={14} />
          {variant === "signin" ? "Sign in" : "Sign up"} with Facebook
        </CustomButton>
      </div>

      {variant === "signin" ? (
        <p className="mt-[29px] text-[12px] text-[var(--color-text-secondary)] text-center pb-10">
          Don’t have account? Let’s{" "}
          <Link href="/auth/signup" className="text-primary underline">
            Sign up
          </Link>
        </p>
      ) : (
        <p className="mt-[29px] text-[12px] text-[var(--color-text-secondary)] text-center pb-10">
          Do you have account? Let’s{" "}
          <Link href="/auth/signin" className="text-primary underline">
            Sign in
          </Link>
        </p>
      )}
    </form>
  );
};
