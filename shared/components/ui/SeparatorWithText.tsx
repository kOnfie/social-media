import * as React from "react";
import { cn } from "@/lib/client/utils";

interface SeparatorWithTextProps {
  children: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const SeparatorWithText = React.forwardRef<HTMLDivElement, SeparatorWithTextProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "relative flex items-center justify-center",
        orientation === "horizontal" ? "w-full" : "h-full",
        className
      )}
      {...props}
    >
      <div className={cn("bg-border", orientation === "horizontal" ? "h-[1px] flex-1" : "w-[1px] flex-1")} />

      <div
        className={cn(
          "bg-background text-muted-foreground font-poppins",
          orientation === "horizontal" ? "px-4 text-sm" : "py-4 text-sm writing-mode-vertical"
        )}
      >
        {children}
      </div>

      <div className={cn("bg-border", orientation === "horizontal" ? "h-[1px] flex-1" : "w-[1px] flex-1")} />
    </div>
  )
);

SeparatorWithText.displayName = "SeparatorWithText";

export { SeparatorWithText };
