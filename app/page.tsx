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
    description: "Creative and technical projects — from web apps to games and tools.",
    emoji: "💻",
    tags: [],
  },
  {
    href: "/filmmaking",
    name: "Filmmaking",
    description: "A collection of short films, edits, and video projects I’ve worked on.",
    emoji: "🎬",
    tags: [],
  },
  {
    href: "/university",
    name: "University",
    description: "Highlights from my studies and coursework at SZTE and TU/e.",
    emoji: "🎓",
    tags: [],
  },
  {
    href: "/about",
    name: "About",
    description: "A bit about who I am, what I do, and how to reach me.",
    emoji: "👋",
    tags: [],
  }
];

export default function Page() {
  return (
    <section className="stack-4">
      <header className="hero stack-2">
        <h1 className="hero-title">Hi, I’m Gergő</h1>
        <p className="hero-sub">
          Computer Science student, video editor, and sports enthusiast.<br></br>
          Want to hear more? Explore the sections below or go to my <a href="/about">about</a> page!
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
              {/* <div className="badges">
                {f.tags.map((id) => <Badge id={id} key={id} />)}
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
