import { profile, navLinks } from '../data.js';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div style={{ fontWeight: 800 }}>{profile.name}</div>
            <p style={{ margin: 0 }}>{profile.role}</p>
          </div>
          <nav className="fl" aria-label="Quick links">
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="fl">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={`tel:${profile.phone}`}>Phone</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="copy">© {new Date().getFullYear()} {profile.name}</div>
      </div>
    </footer>
  );
}
