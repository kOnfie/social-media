import { ReactNode } from "react";

export default function NotificationLayout({
  children,
  header,
}: Readonly<{
  children: ReactNode;
  header: ReactNode;
}>) {
  return (
    <>
      {header}
      <main className="pt-[100px]">{children}</main>
    </>
  );
}
