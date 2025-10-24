const projects = [
  {
    title: "Memory Cards Game",
    summary: "HTML/CSS/JS memory matching game with localStorage.",
    tags: ["Web", "Game", "JS"],
    demoUrl: "https://memory-cards-game-one.vercel.app",
    sourceUrl: "https://github.com/gergo-m/memory-cards-game",
    image: null
  },
];

export default function Page() {
  return (
    <section className="stack-4">
      <header className="stack-2">
        <h1 className="hero-title">Hi, I’m Gergő</h1>
        <p className="hero-sub">
          20-year-old CS student at the University of Szeged (SZTE), on exchange at TU/e.
          I build web apps, backends, mobile apps, and Python tools. Here are some of my favorites:
        </p>
      </header>

      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <div className="card-media">
              {/* Placeholder band; replace with <img src={p.image} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/> */}
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="badges">
                {p.tags?.map((t) => <span className="badge" key={t}>{t}</span>)}
              </div>
              <div className="actions">
                {p.demoUrl && <a className="button button--primary" href={p.demoUrl} target="_blank" rel="noreferrer">Live Demo</a>}
                {p.sourceUrl && <a className="button" href={p.sourceUrl} target="_blank" rel="noreferrer">Source</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
