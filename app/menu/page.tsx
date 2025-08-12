import { Header } from "@/components/Header";
import Image from "next/image";

import avatar from "@/public/image/avatar.jpg";
import { CustomButton } from "@/components/ui/CustomButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Statistics } from "@/components/Statistic";

const STATISTICS = [
  {
    name: "Post",
    value: 572,
  },
  {
    name: "Followers",
    value: 62,
  },
  {
    name: "Following",
    value: 12,
  },
];

const LINKS = [
  {
    id: 1,
    title: "Notification",
    subtitle: "See your recent activity",
    href: "/notifications",
  },
  {
    id: 2,
    title: "Friends",
    subtitle: "Friendlist totals",
    href: "/friends",
  },
  {
    id: 3,
    title: "Messages",
    subtitle: "Message your friends",
    href: "/messages",
  },
  {
    id: 4,
    title: "Favorites",
    subtitle: "Friends you love",
    href: "/favorites",
  },
];

export default function MenuPage() {
  return (
    <>
      <Header variant="profile">
        <Image src={avatar.src} alt="Avatar" width={45} height={45} />
        <p className="font-medium mb-[2px]">Morsalin Nur</p>
        <p className="text-[12px] text-[var(--color-text-secondary)]">@morsalin.nur</p>

        <CustomButton asChild variant="outline" className="grid place-content-center w-[36px] h-[36px] rounded-[50%]">
          <Link href={"/profiles/1"}>
            <ChevronRight size={18} color="#919191" />
          </Link>
        </CustomButton>
      </Header>

      <main>
        <Statistics statistics={STATISTICS} />

        {/* Links */}
        <section className="">
          <Container className="border-b border-[var(--color-border-light)] pb-[26px] mb-[33px]">
            <div className="grid gap-[27px]">
              {LINKS.map((link) => (
                <Link key={link.id} href={link.href} className="flex justify-between items-center">
                  <div>
                    <h6 className="text-[15px] font-medium mb-[4px]">{link.title}</h6>
                    <p className="text-[12px] text-[var(--color-text-secondary)]">{link.subtitle}</p>
                  </div>

                  <CustomButton
                    asChild
                    variant="outline"
                    className="grid place-content-center w-[36px] h-[36px] rounded-[50%]"
                  >
                    <Link href={link.href}>
                      <ChevronRight size={18} color="#919191" />
                    </Link>
                  </CustomButton>
                </Link>
              ))}
            </div>
          </Container>

          <Container>
            <Link href={"/privacy"} className="flex justify-between items-center">
              <div>
                <h6 className="text-[15px] font-medium mb-[4px]">Privacy Policy</h6>
                <p className="text-[12px] text-[var(--color-text-secondary)]">Protect your privacy</p>
              </div>

              <CustomButton
                asChild
                variant="outline"
                className="grid place-content-center w-[36px] h-[36px] rounded-[50%]"
              >
                <Link href={"/privacy"}>
                  <ChevronRight size={18} color="#919191" />
                </Link>
              </CustomButton>
            </Link>
          </Container>

          <CustomButton className="absolute bottom-[32px] left-[25px] right-[25px] py-[18.5px]" variant="ghost">
            Log out
          </CustomButton>
        </section>
      </main>
    </>
  );
}
