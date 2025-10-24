type Project = {
  title: string;
  summary: string;
  tags: string[];
  demoUrl?: string | null;
  sourceUrl?: string | null;
};

const projects: Project[] = [
  // We’ll replace these with real ones later
  {
    title: "Memory Cards Game",
    summary: "HTML/CSS/JS memory matching game with localStorage.",
    tags: ["Web", "Game", "JS"],
    demoUrl: "https://memory-cards-game-one.vercel.app",
    sourceUrl: "https://github.com/gergo-m/memory-cards-game"
  },
  { title: "Static Site Samples", summary: "Pure HTML/CSS/JS demos.", tags: ["Web"], sourceUrl: "https://github.com/YOUR_GITHUB" },
  { title: "PHP Blog", summary: "PHP + DB demo (to be deployed).", tags: ["Web","PHP","DB"], sourceUrl: "https://github.com/YOUR_GITHUB" },
  { title: "Android To-Do", summary: "Kotlin app; emulator embed later.", tags: ["Mobile"], sourceUrl: "https://github.com/YOUR_GITHUB" },
  { title: "Python Utilities", summary: "Tiny scripts (Streamlit/PyScript soon).", tags: ["Python"], sourceUrl: "https://github.com/YOUR_GITHUB" }
];

export default function Page() {
  return (
    <section>
      <h1 style={{fontSize: 28, margin: "16px 0"}}>Hi, I’m Gergő</h1>
      <p style={{color:"#555", marginBottom: 24}}>
        20-year-old CS student at the University of Szeged, on exchange at TU/e.
        This is a simple hub for my projects. I’ll add live demos step-by-step.
      </p>

      <h2 style={{fontSize: 22, margin: "16px 0"}}>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h3 style={{marginTop: 0}}>{p.title}</h3>
            <p style={{marginTop: 8}}>{p.summary}</p>
            <div style={{display:"flex", gap: 8, flexWrap:"wrap", margin: "8px 0"}}>
              {p.tags.map(t => (
                <span key={t} style={{border:"1px solid #ddd", borderRadius: 999, padding: "2px 8px", fontSize: 12}}>{t}</span>
              ))}
            </div>
            <div style={{display:"flex", gap: 8, flexWrap:"wrap"}}>
              {p.demoUrl && <a href={p.demoUrl} target="_blank">Live Demo</a>}
              {p.sourceUrl && <a href={p.sourceUrl} target="_blank">Source</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
