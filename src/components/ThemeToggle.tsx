"use client";

import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme") ?? "dark";
    const shouldDark = stored === "dark";
    root.classList.toggle("theme-dark", shouldDark);
    root.classList.toggle("theme-light", !shouldDark);
    setIsDark(shouldDark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    root.classList.toggle("theme-dark", next);
    root.classList.toggle("theme-light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[var(--border)] bg-[var(--card)] hover:opacity-90 transition"
    >
      {isDark ? <HiMoon /> : <HiSun />}
      {/* <span className="text-sm">{isDark ? "Dark" : "Light"}</span> */}
    </button>
  );
}


