import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "text-white bg-gradient-to-r from-[#4dd969] to-[#28cd56] hover:from-[#45c961] hover:to-[#23b84f]",
      outline:
        "text-[var(--color-text-primary)] border border-[var(--color-border-light)] bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      ghost: "text-primary bg-green-light hover:bg-green-light-hover hover:primary-hover",
    },
    size: {
      // default: "px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "default",
    // size: "default",
  },
});

function CustomButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        " rounded-[10px] text-[14px] cursor-pointer transition-all"
      )}
      {...props}
    />
  );
}

export { CustomButton, buttonVariants };
