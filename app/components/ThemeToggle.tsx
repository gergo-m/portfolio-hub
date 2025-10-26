"use client";

import { useEffect, useState } from "react";

type Theme = "space" | "paper";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Read current theme on mount (server set by ThemeBoot to avoid flash)
  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
    setTheme(attr ?? "space");
  }, []);

  function cycle() {
    const next: Theme = (document.documentElement.getAttribute("data-theme") === "paper") ? "space" : "paper";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }

  const label = theme === "paper" ? "Paper" : "Space";
  const icon = theme === "paper" ? "📄" : "🪐";

  return (
    <button className="theme-toggle" type="button" onClick={cycle} aria-label="Toggle theme" title={`Theme: ${label}`}>
      <span className="icon" aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
