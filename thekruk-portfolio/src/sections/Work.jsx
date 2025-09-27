import { useState } from "react";

const ROLES = [
  {
    id: "current",
    company: "Freelance / Consulting",
    title: "Data Engineer",
    period: "2023 — Present",
    location: "Remote",
    bullets: [
      "Designed dbt models and mediation layers over multi‑B row datasets",
      "Built Airflow/Snowflake pipelines with SLAs and alerting",
      "Containerized workloads (Docker/Kubernetes) and deployed to Azure",
    ],
    stack: ["Python", "SQL", "dbt", "Airflow", "Snowflake", "Docker", "Kubernetes", "Azure"],
  },
  {
    id: "prev1",
    company: "Acme Corp",
    title: "Senior Data Engineer",
    period: "2021 — 2023",
    location: "Berlin, DE",
    bullets: [
      "Owned data modeling and governance across domains",
      "Optimized ELT with cost‑aware clustering and task orchestration",
      "Partnered with Product/Data Science to ship reliable features",
    ],
    stack: ["Python", "SQL", "dbt", "Airflow", "Snowflake"],
  },
  {
    id: "prev2",
    company: "DataWorks",
    title: "Data Engineer",
    period: "2019 — 2021",
    location: "Warsaw, PL",
    bullets: [
      "Implemented ingestion to lake/warehouse with CDC",
      "Built monitoring and lineage for compliance",
      "Automated CI for analytics engineering",
    ],
    stack: ["Python", "SQL", "Airflow", "Docker", "Azure"],
  },
];

export default function Work() {
  const [active, setActive] = useState(ROLES[0].id);
  const role = ROLES.find((r) => r.id === active) ?? ROLES[0];

  return (
    <section id="work" data-section className="section work">
      <h2>Work</h2>
      <div className="work-grid">
        <nav className="work-tabs" aria-label="Work tabs">
          {ROLES.map((r) => (
            <button
              key={r.id}
              className={"work-tab" + (active === r.id ? " active" : "")}
              onClick={() => setActive(r.id)}
              aria-pressed={active === r.id}
            >
              <span className="company">{r.company}</span>
              <span className="period">{r.period}</span>
            </button>
          ))}
        </nav>

        <article className="work-panel">
          <h3>
            {role.title} <span className="at">@</span> <span className="company">{role.company}</span>
          </h3>
          <p className="meta">
            <span>{role.period}</span> • <span>{role.location}</span>
          </p>
          <ul className="bullets">
            {role.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <ul className="chips">
            {role.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

