import { ReactNode } from "react";

export default function FollowersLayout({
  children,
  header,
}: Readonly<{
  children: ReactNode;
  header: ReactNode;
}>) {
  return (
    <>
      {header}

      <main>{children}</main>
    </>
  );
}
