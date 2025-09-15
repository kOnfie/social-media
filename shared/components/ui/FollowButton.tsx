import { cn } from "@/lib/client/utils";
import { CustomButton } from "./CustomButton";

interface FollowButtonProps {
  className?: string;

  isFollowing: boolean;
}

export function FollowButton({ className, isFollowing }: FollowButtonProps) {
  return (
    <CustomButton
      variant={isFollowing ? "outline" : "default"}
      className={cn("text-[12px] font-medium w-[86px] h-[34px] rounded-[50px]", className)}
    >
      {isFollowing ? "Following" : "Follow"}
    </CustomButton>
  );
}
