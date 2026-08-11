"use client";

import type { LinkItem } from "@/data/links";

export default function LinkCard({ link }: { link: LinkItem }) {
  function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: link.id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className="block w-full rounded-2xl border border-black/10 dark:border-white/10 bg-foreground/[0.03] px-6 py-5 text-center text-lg font-medium transition-colors hover:bg-foreground/[0.06]"
    >
      {link.title}
    </a>
  );
}
