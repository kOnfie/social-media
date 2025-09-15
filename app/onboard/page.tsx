import Image from "next/image";
import Link from "next/link";

import { CustomButton } from "@/shared/components/ui/CustomButton";
import onboard from "@/public/onboard.png";

export default function OnboardPage() {
  return (
    <main className="relative min-h-full">
      <Image
        src={onboard.src}
        alt="Onboard"
        width={375}
        height={432}
        className="w-full"
      />

      <div className="bg-white absolute bottom-0 right-0 left-0 text-center px-[25px] pb-[38px]">
        <h1 className="mb-[10px] text-[40px] font-medium">
          Let’s connect with each other
        </h1>

        <p className="mb-[77px] text-[var(--color-text-secondary)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>

        <CustomButton asChild className="w-full inline-block py-[18.5px]">
          <Link href="/auth/signin">Get Started</Link>
        </CustomButton>
      </div>
    </main>
  );
}
