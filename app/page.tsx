import ThemedImage from "./components/ThemedImage";

type Project = {
  title: string;
  summary: string;
  tags: string[];
  demoUrl?: string | null;
  sourceUrl?: string | null;
  imageDark?: string | null;   // NEW
  imageLight?: string | null;  // NEW
};

const projects: Project[] = [
  {
    title: "Memory Cards Game",
    summary: "HTML/CSS/JS memory matching game with localStorage.",
    tags: ["Web", "Game", "JS"],
    demoUrl: "https://memory-cards-game-one.vercel.app",
    sourceUrl: "https://github.com/gergo-m/memory-cards-game",
    imageDark: "/images/memory-cards-game_dark.png",
    imageLight: "/images/memory-cards-game_light.png",
  },
  {
    title: "Piár Futár Map",
    summary: "Map for high school paper's 20th anniversary.",
    tags: ["Web", "JS"],
    demoUrl: "https://piar-futar-map.vercel.app",
    sourceUrl: "https://github.com/gergo-m/piar-futar-map",
    imageDark: null,
    imageLight: "/images/piar-futar-map_light.png",
  },
  {
    title: "Receipt Bill Splitter",
    summary: "Shopping for multiple people at once? Make splitting the bill low-effort and fair.",
    tags: ["Python"],
    demoUrl: "https://receipt-bill-splitter.streamlit.app",
    sourceUrl: "https://github.com/gergo-m/receipt-bill-splitter",
    imageDark: "/images/receipt-bill-splitter_dark.png",
    imageLight: null,
  },
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
        {projects.map((p) => (
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
                {p.tags?.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
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
