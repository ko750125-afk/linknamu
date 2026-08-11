"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
    >
      {isDark ? "☀️ 라이트모드" : "🌙 다크모드"}
    </button>
  );
}
