"use client";

import { redirect } from "next/dist/server/api-utils";
import ThemedImage from "./components/ThemedImage";
import Badge from "./components/Badge";
import TagFilter from "./components/TagFilter";
import { FIELD, type Field } from "./lib/fields";
import { TAG, type TagId } from "./lib/tags";
import { useMemo, useState } from "react";

const FIELD_OF_THIS_PAGE = FIELD.main;

type SelectableField = {
  href: string,
  name: string;
  description: string;
  emoji: string;
  tags: TagId[];
};

const fields: SelectableField[] = [
  {
    href: "/development",
    name: "Software Development",
    description: "Various projects including web applications, games, and utilities.",
    emoji: "💻",
    tags: [TAG.digital, TAG.university],
  },
  {
    href: "/filmmaking",
    name: "Filmmaking",
    description: "Videos and productions that I've worked on.",
    emoji: "🎬",
    tags: [TAG.digital, TAG.hobby],
  },
  {
    href: "/university",
    name: "University",
    description: "Coursework highlights @ SZTE and TU/e.",
    emoji: "🎓",
    tags: [TAG.university],
  },
  {
    href: "/about",
    name: "About",
    description: "Learn more about me, my skills, and how to reach me.",
    emoji: "👋",
    tags: [TAG.personal],
  }
];

export default function Page() {
  return (
    <section className="stack-4">
      <header className="hero stack-2">
        <h1 className="hero-title">Hi, I’m Gergő</h1>
        <p className="hero-sub">
          Computer Science student at the University of Szeged (SZTE), on exchange at Technische Universiteit Eindhoven (TU/e).
        </p>
      </header>

      <div className="grid">
        {fields.map((f) => (
          <a key={f.href} className="card" href={f.href}>
            <div className="card-body">
              <h3 style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span aria-hidden="true" style={{ fontSize: 22 }}>{f.emoji}</span>
                {f.name}
              </h3>
              <p>{f.description}</p>
              <div className="badges">
                {f.tags.map((id) => <Badge id={id} key={id} />)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
