"use client";
import { useEffect, useMemo, useState } from "react";
import { TAGS, type TagId, TAGS_BY_FIELD } from "../lib/tags";
import type { Field } from "../lib/fields";

type Props = {
  field: Field;
  allTags?: TagId[];
  onChange: (active: TagId[]) => void;
  mode?: "and" | "or";
};

// Hook to track current theme reliably
function useThemeName() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    // Set immediately on mount
    const htmlTheme = document.documentElement.getAttribute("data-theme") || "space";
    setTheme(htmlTheme);

    const update = () =>
      setTheme(document.documentElement.getAttribute("data-theme") || "space");

    // Observe theme changes
    const mo = new MutationObserver(update);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    window.addEventListener("storage", update);

    return () => {
      mo.disconnect();
      window.removeEventListener("storage", update);
    };
  }, []);

  return theme || "space";
}

export default function TagFilter({ field, onChange, allTags, mode = "and" }: Props) {
  const available = useMemo(() => TAGS_BY_FIELD(field, allTags), [field, allTags]);
  const [active, setActive] = useState<TagId[]>([]);
  const theme = useThemeName();

  function toggle(id: TagId) {
    const next = active.includes(id)
      ? active.filter((x) => x !== id)
      : [...active, id];
    setActive(next);
    onChange(next);
  }

  return (
    <div className="filterbar">
      <button
        className="button button--clear"
        onClick={() => {
          setActive([]);
          onChange([]);
        }}
        aria-label="Clear filters"
      >
        Clear
      </button>

      <div className="filter-chips">
        {available.map((id) => {
          const meta = TAGS[id];
          const color = theme === "paper" ? meta.colorLight : meta.colorDark;
          const isActive = active.includes(id);
          return (
            <button
              key={id}
              onClick={() => toggle(id)}
              className={`chip ${isActive ? "chip--active" : ""}`}
              title={meta.label}
              style={{
                color: isActive ? "var(--text)" : "var(--muted)",
                background: isActive
                  ? color
                  : `color-mix(in oklab, ${color} 14%, transparent)`,
                borderColor: "var(--border)",
              }}
              data-tag={id}
            >
              {meta.label}
            </button>
          );
        })}
      </div>

      <span className="filter-mode">
        Mode: {mode === "and" ? "ALL" : "ANY"}
      </span>
    </div>
  );
}
