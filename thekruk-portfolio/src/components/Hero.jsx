export default function Hero() {
  return (
    <section id="home" data-section className="section hero">
      <h1>Hi, ich bin [Dein Name] 👋</h1>
      <p className="lead">
        Software Engineer / Frontend mit Fokus auf schnelle, zugängliche Web-Apps.
        Ich liebe klare UI, solide Architektur und kleine Details.
      </p>
      <div style={{display:"flex", gap:".75rem", marginTop:"1rem"}}>
        <a className="button solid" href="#projects">Projekte ansehen</a>
        <a className="button" href="#contact">Kontakt</a>
      </div>
    </section>
  );
}
