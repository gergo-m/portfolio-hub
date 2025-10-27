"use client";
import { TAGS, type TagId } from "../lib/tags";

export default function Badge({
  id,
  colorize = false, // default neutral
}: {
  id: TagId;
  colorize?: boolean;
}) {
  const meta = TAGS[id];

  if (!colorize) {
    // Neutral badge: uses .badge CSS (border = var(--border))
    return (
      <span className="badge" data-tag={id} title={meta.label}>
        {meta.label}
      </span>
    );
  }

  // Colorized (only when you opt-in)
  const theme =
    typeof window !== "undefined"
      ? document.documentElement.getAttribute("data-theme") || "space"
      : "space";
  const color = theme === "paper" ? meta.colorLight : meta.colorDark;

  return (
    <span
      className="badge"
      data-tag={id}
      title={meta.label}
      style={{
        // NOTE: do NOT set borderColor here if you want neutral border
        background: `color-mix(in oklab, ${color} 14%, transparent)`,
        color,
      }}
    >
      {meta.label}
    </span>
  );
}
