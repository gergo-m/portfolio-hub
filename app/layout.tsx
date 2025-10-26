import "./globals.css";

export const metadata = {
  title: "Gergő — Portfolio",
  description: "Projects by a CS student @ SZTE (exchange @ TU/e)",
};

/** No-flash theme: prefer saved; otherwise OS dark->space, light->paper. */
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
      <head><ThemeBoot /></head>
      <body>
        <header className="header">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 64 }}>
            <a href="/" className="brand">
              <span className="brand-mark" aria-hidden="true"></span>
              Gergő
            </a>
            <nav className="nav">
              <a className="link" href="/">Projects</a>
              <a className="link" href="/about">About</a>
              <a className="link" href="https://github.com/gergo-m" target="_blank" rel="noreferrer">GitHub</a>
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
