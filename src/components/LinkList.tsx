"use client";

import { useEffect, useState } from "react";
import { links } from "@/data/links";
import LinkCard from "@/components/LinkCard";

export default function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/click")
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleLinkClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onClick={() => handleLinkClick(link.id)}
        />
      ))}
    </div>
  );
}
