import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { projects } from '../data.js';

// Preview priority: 1) p.image (your own screenshot in public/projects/)
// 2) automatic screenshot of the live site  3) placeholder with the title
function Preview({ p }) {
  const [failed, setFailed] = useState(false);
  const auto = p.live
    ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.live)}?w=800&h=500`
    : '';
  const src = p.image || auto;

  if (!src || failed) return <span>{p.title}</span>;
  return (
    <img
      src={src}
      alt={`${p.title} website preview`}
      width="800"
      height="500"
      loading="lazy"
      style={{ objectPosition: 'top' }}
      onError={() => setFailed(true)}
    />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="alt">
      <div className="wrap">
        <Reveal><span className="eyebrow">Projects</span><h2>Selected work</h2><p>Websites I've designed and built.</p></Reveal>
        <Reveal className="grid g3">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <div className="pimg"><Preview p={p} /></div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              <div className="row">
                {p.live && <a className="btn pri" href={p.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {p.github && <a className="btn" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
