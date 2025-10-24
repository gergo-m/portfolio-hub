import "./globals.css";

export const metadata = {
  title: "Gergő Mindszenti Portfolio",
  description: "Projects by a CS student @ SZTE (exchange @ TU/e)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:64}}>
            <a href="/" className="brand">Gergő <span className="dot">·</span> codes</a>
            <nav className="nav">
              <a className="link" href="/">Projects</a>
              <a className="link" href="/about">About</a>
              <a className="link" href="https://github.com/gergo-m" target="_blank" rel="noreferrer">GitHub</a>
              <a className="link" href="mailto:mindszenti.gergo@gmail.com">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="container footer">© {new Date().getFullYear()} Gergő — Built with Next.js</footer>
      </body>
    </html>
  );
}
