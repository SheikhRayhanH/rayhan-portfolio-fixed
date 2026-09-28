import Reveal from './Reveal.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="alt">
      <div className="wrap">
        <Reveal><span className="eyebrow">Skills</span><h2>Tools I work with</h2></Reveal>
        <Reveal className="grid g3">
          {skills.map((s) => (
            <div className="card" key={s.title}>
              <div className="ico" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <div className="tags">{s.items.map((i) => <span className="tag" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
