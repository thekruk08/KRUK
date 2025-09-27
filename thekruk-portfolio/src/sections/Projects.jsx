import { projects } from "../data/projects.jsx";

export default function Projects() {
  return (
    <section id="projects" data-section className="section">
      <h2>Projekte</h2>
      <div className="grid" style={{gap: "1rem"}}>
        {projects.map((p, i) => (
          <article key={i} className="card">
            <header style={{marginBottom: ".5rem"}}>
              <h3 style={{margin: 0}}>{p.title}</h3>
              <p className="muted" style={{margin: 0}}>{p.desc}</p>
            </header>
            <ul className="chips" style={{marginBottom: ".75rem"}}>
              {p.tech?.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
            <div style={{display: "flex", gap: ".5rem"}}>
              {p.live && (
                <a className="button" href={p.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {p.code && (
                <a className="button" href={p.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
