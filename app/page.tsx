import { redirect } from "next/dist/server/api-utils";
import ThemedImage from "./components/ThemedImage";

type Field = {
  href: string,
  name: string;
  description: string;
  emoji: string;
  tags: string[];
};

const fields: Field[] = [
  {
    href: "/development",
    name: "Software Development",
    description: "Various projects including web applications, games, and utilities.",
    emoji: "💻",
    tags: ["Digital", "University"],
  },
  {
    href: "/filmmaking",
    name: "Filmmaking",
    description: "Videos and productions that I've worked on.",
    emoji: "🎬",
    tags: ["Digital", "Hobby"],
  },
  {
    href: "/university",
    name: "University",
    description: "Coursework highlights @ SZTE and TU/e.",
    emoji: "🎓",
    tags: ["University"],
  },
  {
    href: "/about",
    name: "About",
    description: "Learn more about me, my skills, and how to reach me.",
    emoji: "👋",
    tags: ["Personal"],
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
                {f.tags?.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
