"use client";
import { useEffect, useState } from "react";

type Theme = "space" | "paper";
type Props = {
  darkSrc: string;
  lightSrc: string;
  alt?: string;
  className?: string;
};

export default function ThemedImage({ darkSrc, lightSrc, alt = "", className }: Props) {
  const [theme, setTheme] = useState<Theme>("space");

  useEffect(() => {
    const html = document.documentElement;
    const current = (html.getAttribute("data-theme") as Theme) || "space";
    setTheme(current);

    // React to future theme changes
    const obs = new MutationObserver(() => {
      const next = (html.getAttribute("data-theme") as Theme) || "space";
      setTheme(next);
    });
    obs.observe(html, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  const src = theme === "paper" ? lightSrc : darkSrc;
  return <img src={src} alt={alt} className={className} />;
}
