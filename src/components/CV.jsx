import Reveal from './Reveal.jsx';
import { profile } from '../data.js';

export default function CV() {
  return (
    <section id="cv">
      <Reveal className="wrap">
        <div className="cv">
          <div>
            <span className="eyebrow">Curriculum Vitae</span>
            <h2 style={{ marginBottom: '.4rem' }}>Want the full picture?</h2>
            <p style={{ margin: 0 }}>Download my CV or preview it in your browser.</p>
          </div>
          <div className="row" style={{ margin: 0 }}>
            <a className="btn pri" href={profile.cvUrl} download>⬇ Download CV</a>
            <a className="btn" href={profile.cvUrl} target="_blank" rel="noopener noreferrer">View CV</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
