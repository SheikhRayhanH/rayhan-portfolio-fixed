import { profile, heroTech } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hgrid">
        <div>
          <span className="badge"><span className="dot" />{profile.availability}</span>
          <h1>Building clean, <span className="grad">modern digital experiences.</span></h1>
          <p style={{ fontSize: '1.1rem', maxWidth: 560 }}>
            I'm {profile.name} — a CSE graduate focused on website design, frontend development and growing into full-stack development.
          </p>
          <div className="cta">
            <a className="btn pri" href="#contact">Let's Work Together →</a>
            <a className="btn" href={profile.cvUrl} download>⬇ Download CV</a>
          </div>
          <div className="tech">{heroTech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
        </div>
        <div className="photo">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="380" height="475" />
        </div>
      </div>
    </section>
  );
}
