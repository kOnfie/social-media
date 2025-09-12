import cn from "classnames";
import { Container } from "lucide-react";

import { FollowButton } from "@/components/ui/FollowButton";

import { FOLLOWERS } from "../constants/followerList.const";

interface FollowerListProps {
  className?: string;
}

export function FollowerList({ className }: FollowerListProps) {
  return (
    <div className={cn(className, "grid")}>
      {FOLLOWERS.map((follower) => (
        <Container
          className="flex items-center justify-between py-[26px] border-b border-[var(--color-border-light)] border-solid"
          key={follower.id}
        >
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-[50%] bg-black" />
            <div>
              <p className="text-[14px]">{follower.name}</p>
              <p className="text-[12px] text-[var(--color-text-secondary)]">
                {follower.username}
              </p>
            </div>
          </div>

          <FollowButton isFollowing={follower.isFollowing} />
        </Container>
      ))}
    </div>
  );
}
