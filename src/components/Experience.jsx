import Reveal from './Reveal.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal><span className="eyebrow">Experience</span><h2>IT &amp; web experience</h2></Reveal>
        <Reveal className="tl">
          {experience.map((e) => (
            <article className="card" key={e.role}>
              <h3>{e.role}</h3>
              <div className="meta"><b>{e.company}</b><span>{e.period}</span><span>{e.place}</span></div>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
