"use client";

import Badge from "../components/Badge";
import TagFilter from "../components/TagFilter";
import ThemedImage from "../components/ThemedImage";
import { FIELD, type Field } from "../lib/fields";
import { TAG, type TagId } from "../lib/tags";

const FIELD_OF_THIS_PAGE = FIELD.development;

type Project = {
  title: string;
  summary: string;
  tags: TagId[];
  demoUrl?: string | null;
  sourceUrl?: string | null;
  imageDark?: string | null;
  imageLight?: string | null;
};

const projects: Project[] = [
  {
    title: "Receipt Bill Splitter",
    summary: "Shopping for multiple people at once? Make splitting the bill low-effort and fair.",
    tags: [TAG.python],
    demoUrl: "https://receipt-bill-splitter.streamlit.app",
    sourceUrl: "https://github.com/gergo-m/receipt-bill-splitter",
    imageDark: "/images/receipt-bill-splitter_dark.png",
    imageLight: null,
  },
  {
    title: "Chat App",
    summary: "Web-based simple chat application in Angular and Firebase.",
    tags: [TAG.web, TAG.ts, TAG.angular, TAG.firebase],
    demoUrl: "https://chat-app-pearl-delta.vercel.app",
    sourceUrl: "https://github.com/gergo-m/chat-app",
    imageDark: null,
    imageLight: "/images/chat-app_light.png",
  },
  {
    title: "Memory Cards Game",
    summary: "HTML/CSS/JS memory matching game with localStorage.",
    tags: [TAG.web, TAG.game, TAG.js],
    demoUrl: "https://memory-cards-game-one.vercel.app",
    sourceUrl: "https://github.com/gergo-m/memory-cards-game",
    imageDark: "/images/memory-cards-game_dark.png",
    imageLight: "/images/memory-cards-game_light.png",
  },
  {
    title: "Project & Task Tracker",
    summary: "Track your projects and tasks with this web app.",
    tags: [TAG.web, TAG.ts, TAG.angular, TAG.firebase],
    demoUrl: "https://ugy-projekt-koveto.web.app",
    sourceUrl: "https://github.com/gergo-m/project-tracker",
    imageDark: "/images/project-task-tracker_dark.png",
    imageLight: null,
  },
  {
    title: "Piár Futár Map",
    summary: "Map for high school paper's 20th anniversary.",
    tags: [TAG.web, TAG.js],
    demoUrl: "https://piar-futar-map.vercel.app",
    sourceUrl: "https://github.com/gergo-m/piar-futar-map",
    imageDark: null,
    imageLight: "/images/piar-futar-map_light.png",
  },
];

import { useState } from "react";

const presentTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function Page() {
  const [activeTags, setActiveTags] = useState<TagId[]>([]);
    const filtered = activeTags.length
      ? projects.filter((p) => activeTags.every((t) => p.tags.includes(t)))
      : projects;

  return (
    <section className="stack-4">
      <header className="hero stack-2">
        <h1 className="hero-title">Software Development</h1>
        <p className="hero-sub">
          Explore my previous development endeavours. I have worked on a variety of projects, ranging from web applications to games and practical tools.
        </p>
      </header>

      <TagFilter field={FIELD_OF_THIS_PAGE} allTags={presentTags} onChange={setActiveTags} />

      <div className="grid">
        {filtered.map((p) => (
          <article key={p.title} className="card">
            <div className="card-media">
              {p.imageDark && p.imageLight ? (
                <ThemedImage darkSrc={p.imageDark} lightSrc={p.imageLight} alt={`${p.title} preview`} />
              ) : p.imageDark || p.imageLight ? (
                <img src={p.imageDark ?? p.imageLight!} alt={`${p.title} preview`} />
              ) : null}
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="badges">
                {p.tags.map((id) => <Badge id={id} key={id} />)}
              </div>
              <div className="actions">
                {p.demoUrl && (
                  <a className="button button--primary" href={p.demoUrl} target="_blank" rel="noreferrer">Live Demo</a>
                )}
                {p.sourceUrl && (
                  <a className="button" href={p.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
