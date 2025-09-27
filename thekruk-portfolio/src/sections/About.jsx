export default function About() {
  return (
    <section id="about" data-section className="section about">
      <div className="about-grid">
        <div className="about-media">
          <div className="about-photo" aria-hidden="true">
            <span>Photo soon :)</span>
          </div>
        </div>
        <div className="about-content">
          <h2>About me</h2>
          <p>
          I’m Piotr, a Data Engineer based in Germany. Right now I work at E.ON, building data infrastructure and models that handle billions of records for customers in the multi-million range. I like working on data-driven products and data-intensive challenges, finding ways to turn raw information into something reliable and useful. 
          Sometimes I try out GenAI tools, sometimes I create content, and sometimes I just break stuff to see how it works.
          </p>

          <h3>Some technologies I work with:</h3>
          <ul className="about-highlights">
            <li>Python</li>
            <li>SQL</li>
            <li>Airflow</li>
            <li>Snowflake</li>
            <li>DBT</li>
            <li>Azure</li>
          </ul>
          <p>
           Outside of work I’m into AI and Tech development, I like to play padel tennis. And I make video content. 
          </p>
          <div className="about-stats">
            <div className="stat"><span className="num">3+</span><span className="label">Years in Data </span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
