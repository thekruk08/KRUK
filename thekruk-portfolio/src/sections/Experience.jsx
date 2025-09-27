import { useState } from "react";

const ROLES = [
  {
    id: "current",
    company: "E.ON Energie Deutschland",
    title: "Data Engineer",
    period: "2022 — Present",
    location: "Germany",
    bullets: [
      "Platform & Infrastructure Engineering",
      "Data Modeling & Business-Focused Engineering",
      " Researched and piloted GenAI tools",
    ],
    stack: ["Python", "SQL", "dbt", "Airflow", "Snowflake", "Docker", "Kubernetes", "Azure"],
  },
  {
    id: "Working Student",
    company: "E.ON Business Solutions",
    title: "Working Student",
    period: "2021 — 2022",
    location: "Germany",
    bullets: [
      "Supported the Digital Data Roadmap, applying advanced analytics to identify new customer segments and improve data-driven acquisition strategies.",
      "Research outcomes directly influenced the design and algorithm selection of E.ON’s internal Sophia tool (business impact proven in production use.",
      "Conducted a Bachelor’s thesis on AI-driven Lead Generation, developing an NLP/NLU-based recommendation engine (BERT, text summarization, machine translation, classification).",
    ],
    stack: ["Python", "Pandas", "Jupyter Notebook"],
  },
  {
    id: "FOUNDER",
    company: "THE PERSPECTVE",
    title: "FOUNDER",
    location: "Germany",
    bullets: [
      "Built and launched a travel platform (web & app) end-to-end — from concept to production and ongoing iteration.",
      "Partnered with Four Seasons, Ritz-Carlton, Cavo Tagoo and more to produce interviews and features; handled outreach, negotiations, and content ops.",
      "Grew an audience to 100k+ social followers and a global user base through consistent content and data-informed growth.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(ROLES[0].id);
  const role = ROLES.find((r) => r.id === active) ?? ROLES[0];

  return (
    <section id="experience" data-section className="section experience">
      <h2>Experience</h2>
      <div className="work-grid">
        <nav className="work-tabs" aria-label="Experience tabs">
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
          {Array.isArray(role.stack) && role.stack.length > 0 && (
            <ul className="chips">
              {role.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </section>
  );
}
