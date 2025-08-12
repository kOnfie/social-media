import cn from "classnames";
import { Container } from "./Container";
import { ReactNode } from "react";
import React from "react";

interface HeaderProps {
  className?: string;
  variant?: "button" | "button-title" | "profile" | "ava-button";
  children: ReactNode;
}

export const Header = ({ className, variant = "button", children }: HeaderProps) => {
  let content;

  switch (variant) {
    case "button":
      content = (
        <Container>
          <div>{children}</div>
        </Container>
      );
      break;

    case "button-title":
      const childrenButtonTitleArray = React.Children.toArray(children);
      const button = childrenButtonTitleArray[0];
      const title = childrenButtonTitleArray[1];
      const icon = childrenButtonTitleArray[2];

      content = (
        <Container className="pb-[25px] border-b border-[var(--color-border-light)] border-solid fixed top-[0] pt-[25px] bg-background">
          <div className="flex text-[18px] font-medium items-center justify-between">
            <div className="flex-shrink-0 z-10">{button}</div>
            <div>{title}</div>
            {icon ? icon : <div className="flex-shrink-0 w-[45px] h-[45px]"></div>}
          </div>
        </Container>
      );
      break;

    case "profile":
      const childrenProfileArray = React.Children.toArray(children);

      const profileImage = childrenProfileArray[0];
      const profileName = childrenProfileArray[1];
      const profileUsername = childrenProfileArray[2];
      const profileButton = childrenProfileArray[3];

      content = (
        <div className="pb-4 border-b border-[var(--color-border-light)] border-solid">
          <Container>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[18px]">
                {profileImage}
                <div>
                  {profileName}
                  {profileUsername}
                </div>
              </div>

              {profileButton}
            </div>
          </Container>
        </div>
      );
      break;

    case "ava-button":
      const childrenAvaButtonArray = React.Children.toArray(children);
      const avaButtonImage = childrenAvaButtonArray[0];
      const avaButtonIcon = childrenAvaButtonArray[1];

      content = (
        <Container className="flex items-center justify-between">
          {avaButtonImage}
          {avaButtonIcon}
        </Container>
      );

      break;

    default:
      break;
  }

  return <header className={cn(className, "pt-[25px]")}>{content}</header>;
};
