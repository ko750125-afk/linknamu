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
      className="rounded-full border border-white/60 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-foreground/70 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.4)] transition-colors duration-200 hover:bg-white/55 dark:hover:bg-white/10 hover:text-foreground"
    >
      {isDark ? "☀️ 라이트모드" : "🌙 다크모드"}
    </button>
  );
}
