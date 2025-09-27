import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" data-section className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <article key={i} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul className="chips">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
            <div className="card-actions">
              {p.live && <a className="button" href={p.live} target="_blank" rel="noreferrer">Live</a>}
              {p.code && <a className="button" href={p.code} target="_blank" rel="noreferrer">Code</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
