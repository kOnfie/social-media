import { ReactNode } from "react";

import cn from "classnames";

interface FormErrorMessageProps {
  children: ReactNode;
  className?: string;
}

export function FormErrorMessage({
  className,
  children,
}: FormErrorMessageProps) {
  return (
    <p
      className={cn(
        className,
        "text-[12px] text-error text-center font-semibold sm:text-[18px]",
      )}
    >
      {children}
    </p>
  );
}
