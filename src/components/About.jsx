import Reveal from './Reveal.jsx';

const points = ['Web development', 'UI/UX-minded design', 'Frontend development with React', 'Growing towards full-stack'];

export default function About() {
  return (
    <section id="about">
      <Reveal className="wrap about">
        <div>
          <span className="eyebrow">About</span>
          <h2>Computer science foundations, focused on the web.</h2>
          <p>I hold a B.Sc. in Computer Science &amp; Engineering and build responsive, accessible websites with a strong eye for layout, spacing and usability.</p>
          <p>I'm currently deepening my React and Node.js skills, with the goal of delivering complete full-stack products.</p>
        </div>
        <ul className="pts" style={{ listStyle: 'none', padding: 0 }}>
          {points.map((p) => <li className="pt" key={p}><i aria-hidden="true">✦</i>{p}</li>)}
        </ul>
      </Reveal>
    </section>
  );
}
