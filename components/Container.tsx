import cn from "classnames";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn(className, "max-w-full w-full m-auto px-[25px]")}>{children}</div>;
};
