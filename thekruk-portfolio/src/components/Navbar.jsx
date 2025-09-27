import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const header = document.querySelector("header.nav");
    const offset = header?.offsetHeight ?? 0;
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      // Only handle clicks on anchors that are inside the navbar
      if (!a || !header || !header.contains(a)) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="nav">
      <div className="container nav-row">
        <a href="#home" className="brand">PIOTR KRUK</a>
        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <div className="social">
          <a className="email" href="mailto:thekruk08@gmail.com" aria-label="Email" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="12" fill="#fff"/>
              <path fill="#0b0b0b" transform="translate(3.5,5)" d="M17 2H0v12h17V2Zm-1.5 1.5-6 4.2-6-4.2h12Zm-12.9 1.1 5.9 4.1c.3.2.7.2 1 0l5.9-4.1V12H2.6V4.6Z"/>
            </svg>
          </a>
          <a className="github" href="https://github.com/thekruk08" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="12" fill="#fff"/>
              <path fill="#0b0b0b" transform="translate(4,4)" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="0" y="0" width="24" height="24" rx="4" fill="#fff"/>
              <path fill="#0b0b0b" d="M6.94 7.2a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM4.8 20V8.75h4.28V20H4.8Zm6.25 0V8.75h4.1v1.54h.06c.57-1.02 1.97-1.87 3.63-1.87 3.88 0 4.6 2.36 4.6 5.42V20h-4.28v-5.04c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.31-1.93 2.65V20h-4.5Z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
