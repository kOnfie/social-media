import { Container } from "@/components/Container";

import { FollowButton } from "@/components/ui/FollowButton";

const FOLLOWERS = [
  {
    id: 1,
    photo: "",
    name: "Shah Rukh Khan",
    username: "@srk",
    isFollowing: false,
  },
  {
    id: 2,
    photo: "",
    name: "Robert Downey Jr.",
    username: "@rdj",
    isFollowing: true,
  },
  {
    id: 3,
    photo: "",
    name: "Tom Cruise",
    username: "@tomcruise",
    isFollowing: false,
  },
  {
    id: 4,
    photo: "",
    name: "Elezabeth",
    username: "@elezabeth",
    isFollowing: false,
  },
  {
    id: 5,
    photo: "",
    name: "Kate Winslet",
    username: "@KateWinslet",
    isFollowing: false,
  },
  {
    id: 6,
    photo: "",
    name: "Shah Rukh Khan",
    username: "@srk",
    isFollowing: false,
  },
  {
    id: 7,
    photo: "",
    name: "Robert Downey Jr.",
    username: "@rdj",
    isFollowing: true,
  },
  {
    id: 8,
    photo: "",
    name: "Tom Cruise",
    username: "@tomcruise",
    isFollowing: false,
  },
  {
    id: 9,
    photo: "",
    name: "Elezabeth",
    username: "@elezabeth",
    isFollowing: false,
  },
  {
    id: 10,
    photo: "",
    name: "Kate Winslet",
    username: "@KateWinslet",
    isFollowing: false,
  },
];

export default function FollowersPage() {
  return (
    <section className="mt-[66px]">
      <div className="grid">
        {FOLLOWERS.map((follower) => (
          <Container
            className="flex items-center justify-between py-[26px] border-b border-[var(--color-border-light)] border-solid"
            key={follower.id}
          >
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-[50%] bg-black" />
              <div>
                <p className="text-[14px]">{follower.name}</p>
                <p className="text-[12px] text-[var(--color-text-secondary)]">{follower.username}</p>
              </div>
            </div>

            <FollowButton isFollowing={follower.isFollowing} />
          </Container>
        ))}
      </div>
    </section>
  );
}
