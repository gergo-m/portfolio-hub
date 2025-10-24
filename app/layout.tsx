export const metadata = {
  title: "Gergő — Portfolio",
  description: "Projects by a CS student @ SZTE (exchange @ TU/e)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{borderBottom: "1px solid #eee"}}>
          <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: 64}}>
            <strong>Gergő · codes</strong>
            <nav className="nav">
              <a href="/">Projects</a>
              <a href="/about">About</a>
              <a href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a>
              <a href="mailto:you@example.com">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="container" style={{padding: "24px 0", color: "#666", fontSize: 14}}>
          © {new Date().getFullYear()} Gergő — Next.js
        </footer>
      </body>
    </html>
  );
}
