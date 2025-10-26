import ThemedImage from "./components/ThemedImage";

const projects = [
  {
    title: "Memory Cards Game",
    summary: "HTML/CSS/JS memory matching game with localStorage.",
    tags: ["Web", "Game", "JS"],
    demoUrl: "https://memory-cards-game-one.vercel.app",
    sourceUrl: "https://github.com/gergo-m/memory-cards-game",
    image: null,
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
              <ThemedImage
                darkSrc="/images/memory-cards-game_dark.png"
                lightSrc="/images/memory-cards-game_light.png"
                alt="Memory Cards Game preview"
                className=""
              />
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
