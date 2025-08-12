import { Statistics } from "@/components/Statistic";

import { CustomButton } from "@/components/ui/CustomButton";
import { FollowButton } from "@/components/ui/FollowButton";
import { MessageSquareMore } from "lucide-react";

interface ProfilePageProps {
  params: { id: string };
}

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

export default function ProfilePage({ params }: ProfilePageProps) {
  const profileId = params.id;

  return (
    <main className="pt-[108px]">
      <section className="m-auto text-center">
        <div className="m-auto w-[110px] h-[110px] bg-black rounded-[50%] mb-[18px]" />

        <h6 className="text-[14px] font-medium mb-[9px]">Tom Cruise</h6>
        <p className="text-[12px] text-[var(--color-text-secondary)]">@tomcruise</p>

        <div className="flex items-center justify-center gap-[14px] mt-[28px] mb-[32px]">
          <CustomButton variant="outline" className="flex items-center gap-2 py-[10px] px-[21px] rounded-[50px]">
            <MessageSquareMore size={18} />
            <p className="text-[12px] text-[var(--color-text-secondary)]">Message</p>
          </CustomButton>

          <FollowButton isFollowing={false} />
        </div>

        <Statistics
          statistics={STATISTICS}
          className="pb-[28px] border-b border-[var(--color-border-light)] border-solid"
        />
      </section>
    </main>
  );
}
