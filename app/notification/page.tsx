import { Container } from "@/components/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notification page | Social Media Platform",
};

const NOTIFICATIONS = [
  {
    id: 1,
    photo: "",
    name: "Aarush Galloway",
    action: "Shared your post",
    href: "/post/123",
  },
  {
    id: 2,
    photo: "",
    name: "Sofia Morales",
    action: "Liked your photo",
    href: "/photo/45",
  },
  {
    id: 3,
    photo: "",
    name: "Ethan Chen",
    action: "Commented on your post",
    href: "/post/78#comments",
  },
  {
    id: 4,
    photo: "",
    name: "Layla Thompson",
    action: "Mentioned you in a comment",
    href: "/post/89#mention",
  },
  {
    id: 5,
    photo: "",
    name: "Mason Rivera",
    action: "Started following you",
    href: "/profile/mason-rivera",
  },
  {
    id: 6,
    photo: "",
    name: "Zara Patel",
    action: "Reacted to your story",
    href: "/story/456",
  },
  {
    id: 7,
    photo: "",
    name: "Leo Becker",
    action: "Tagged you in a post",
    href: "/post/234#tag",
  },
  {
    id: 8,
    photo: "",
    name: "Isla Scott",
    action: "Replied to your comment",
    href: "/post/567#reply",
  },
  {
    id: 9,
    photo: "",
    name: "Noah Kim",
    action: "Sent you a message",
    href: "/messages/noah-kim",
  },
  {
    id: 10,
    photo: "",
    name: "Gianna Rossi",
    action: "Invited you to join a group",
    href: "/groups/gianna-rossi",
  },
  {
    id: 11,
    photo: "",
    name: "Omar Hassan",
    action: "Shared your story",
    href: "/story/789",
  },
];

export default function NotificationPage() {
  return (
    <section>
      <Container>
        <p className="text-[12px] text-[var(--color-text-secondary)] font-medium mb-[18px] text-right">
          Mark all as read
        </p>

        <div className="grid gap-[18px] pb-10">
          {NOTIFICATIONS.map(({ id, href, name, action }) => (
            <Link
              href={href}
              key={id}
              className="flex gap-3 items-center border border-[var(--color-border-light)] border-solid rounded-[10px] py-[14px] px-[14px]"
            >
              <div className="w-[44px] h-[44px] bg-black rounded-[50%]" />

              <div>
                <p className="text-[12px] font-medium">
                  {name} <span className="font-normal text-[var(--color-text-secondary)]">{action}</span>
                </p>
                <p className="text-[11px] text-[var(--color-text-secondary)]">2 h ago</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
