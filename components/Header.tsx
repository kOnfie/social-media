import cn from "classnames";
import { Container } from "./Container";
import { ReactNode } from "react";
import React from "react";

interface HeaderProps {
  className?: string;
  variant?: "button" | "button-title";
  children: ReactNode;
}

export const Header = ({ className, variant = "button", children }: HeaderProps) => {
  let content;

  switch (variant) {
    case "button":
      content = <div>{children}</div>;
      break;

    case "button-title":
      const childrenArray = React.Children.toArray(children);
      const button = childrenArray[0];
      const title = childrenArray[1];

      content = (
        <div className="flex text-[18px] font-medium items-center justify-between">
          <div className="flex-shrink-0 z-10">{button}</div>
          <div>{title}</div>
          <div className="flex-shrink-0 w-[45px] h-[45px]"></div>
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <header className={cn(className, "pt-[25px]")}>
      <Container>{content}</Container>
    </header>
  );
};
