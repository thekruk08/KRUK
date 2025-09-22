export default function About() {
  return (
    <section id="about" data-section className="section">
      <h2>Über mich</h2>
      <p>
        Kurzprofil, Fokus, Tech-Stack (React, TypeScript, Node, Vite…). 
        Optional: ein Foto und eine kleine Timeline.
      </p>
      <ul className="chips">
        <li>React</li><li>TypeScript</li><li>Vite</li><li>Node</li><li>CSS</li>
      </ul>
    </section>
  );
}