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
      className="block w-full rounded-3xl border border-white/60 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md px-6 py-5 text-center text-lg font-medium text-foreground/90 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.4)] transition-[background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/55 dark:hover:bg-white/10 hover:shadow-[0_6px_24px_-8px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_6px_24px_-8px_rgba(0,0,0,0.5)]"
    >
      {link.title}
    </a>
  );
}
