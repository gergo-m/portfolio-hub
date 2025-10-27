import ThemedImage from "../components/ThemedImage";

type Project = {
  title: string;
  summary: string;
  tags: string[];
  watchUrl?: string | null;
  previewImage?: string | null;
};

const projects: Project[] = [
  {
    title: "Entrepreneurship Project Pitch",
    summary: "Video pitch for our project in the 'Entrepreneurship in Action: Ideation' course at TU/e.",
    tags: ["Short", "University", "English"],
    watchUrl: "https://youtu.be/6aczQo1BIXU",
    previewImage: "/images/filmmaking/previews/entrepreneurship-project-pitch.jpg",
  },
  {
    title: "Discord Coach Bot showcase",
    summary: "Showcase video for the Discord Coach Bot developed for the 'Python development' course at SZTE.",
    tags: ["Short", "University", "Development", "Hungarian"],
    watchUrl: "https://youtu.be/8NDirjg7ZgI",
    previewImage: "/images/filmmaking/previews/discord-coach-bot-showcase.jpg",
  },
  {
    title: "High School Graduation Video",
    summary: "Directed and edited a memorable video for our high school graduation ceremony.",
    tags: ["Short", "Community", "Event", "Hungarian"],
    watchUrl: "https://youtu.be/FMwlKWjtUik",
    previewImage: "/images/filmmaking/previews/high-school-graduation-video.jpg",
  },
  {
    title: "Creation Care in Student Life",
    summary: "Short film about environmental awareness among students.",
    tags: ["Short", "Environmental", "Raising awareness", "Hungarian"],
    watchUrl: "https://youtu.be/BkH531cnzi8",
    previewImage: "/images/filmmaking/previews/creation-care-in-student-life.jpg",
  },
  {
    title: "Project on Easter",
    summary: "Made for my high school English class for an Easter project.",
    tags: ["Short", "Environmental", "Raising awareness", "English"],
    watchUrl: "https://youtu.be/ypAHopHVUCc",
    previewImage: "/images/filmmaking/previews/project-on-easter.jpg",
  },
  {
    title: "Images to PDF Tutorial",
    summary: "During COVID, I was asked by teachers to create this tutorial to help them and fellow students convert images to PDF format easily.",
    tags: ["Short", "Environmental", "Raising awareness", "Hungarian"],
    watchUrl: "https://youtu.be/J_PTcrBxhuI",
    previewImage: "/images/filmmaking/previews/images-to-pdf-tutorial.jpg",
  },
];

export default function Page() {
  return (
    <section className="stack-4">
      <header className="hero stack-2">
        <h1 className="hero-title">Filmmaking</h1>
        <p className="hero-sub">
          Shoft films, video projects, and other productions that I've worked on.
        </p>
      </header>

      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <div className="card-media">
              <ThemedImage darkSrc={p.previewImage} lightSrc={p.previewImage} alt={`${p.title} preview`} />
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
                {p.watchUrl && (
                  <a className="button button--primary" href={p.watchUrl} target="_blank" rel="noreferrer">Watch</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
