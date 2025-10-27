import "./globals.css";

export const metadata = {
  title: "Gergő — Portfolio",
  description: "Projects by a CS student @ SZTE (exchange @ TU/e)",
};

const ThemeBoot = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'paper' : 'space');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
      `.trim(),
    }}
  />
);

import ThemeToggle from "./components/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ThemeBoot />
        {/* --- small inline script to enable click-to-toggle dropdown --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
document.addEventListener('DOMContentLoaded', function(){
  const toggles = document.querySelectorAll('.dropdown-toggle');
  toggles.forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const dropdown = btn.parentElement;
      dropdown.classList.toggle('open');
    });
  });
  // Close on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  });
});
            `.trim(),
          }}
        />
      </head>
      <body>
        <header className="header">
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 64,
            }}
          >
            <a href="/" className="brand">
              <span className="brand-mark" aria-hidden="true"></span>
              Gergő
            </a>

            <nav className="nav" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Dropdown Menu */}
              <div className="dropdown">
                <button className="link dropdown-toggle">Fields ▾</button>
                <div className="dropdown-content">
                  <a className="link" href="/development">Development</a>
                  <a className="link" href="/filmmaking">Filmmaking</a>
                  <a className="link" href="/university">University</a>
                </div>
              </div>

              {/* Other links */}
              <a className="link" href="/about">About</a>
              <a
                className="link"
                href="https://github.com/gergo-m"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="link" href="mailto:mindszenti.gergo@gmail.com">Contact</a>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>
        <footer className="container footer">© {new Date().getFullYear()} Gergő</footer>
      </body>
    </html>
  );
}
