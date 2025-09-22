import { useEffect } from "react";

export default function Navbar() {
  // Smooth Scroll mit Offset für die sticky Navbar
  useEffect(() => {
    const header = document.querySelector("header.nav");
    const offset = header?.offsetHeight ?? 0;

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
      window.scrollTo({ top, behavior: "smooth" });
      // Optional: Hash in URL aktualisieren
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="nav">
      <div className="container nav-row">
        <a href="#home" className="brand">Mein Portfolio</a>
        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
