import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { profile } from '../data.js';
import { sendMessage } from '../api.js';

const fields = [
  { name: 'name', label: 'Name', type: 'text', auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', auto: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', auto: 'off' },
];
const empty = { name: '', email: '', subject: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Please add a subject.';
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((x) => ({ ...x, [e.target.name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus('sending');
    try { await sendMessage(values); setStatus('success'); setValues(empty); }
    catch { setStatus('error'); }
  };

  const input = (f) => (
    <label key={f.name} htmlFor={`c-${f.name}`}>
      {f.label}
      <input id={`c-${f.name}`} name={f.name} type={f.type} autoComplete={f.auto} value={values[f.name]} onChange={onChange}
        aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `e-${f.name}` : undefined} />
      {errors[f.name] && <span className="err" id={`e-${f.name}`}>{errors[f.name]}</span>}
    </label>
  );

  return (
    <section id="contact" className="alt">
      <Reveal className="wrap cgrid">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Let's build something together.</h2>
          <div className="info">
            <div><span aria-hidden="true">📞</span><span><small>Phone</small>{profile.phone}</span></div>
            <div><span aria-hidden="true">✉️</span><span><small>Email</small>{profile.email}</span></div>
            <div><span aria-hidden="true">📍</span><span><small>Location</small>{profile.location}</span></div>
          </div>
          <div className="row">
            <a className="btn pri" href={`mailto:${profile.email}`}>✉ Email Me</a>
            <a className="btn" href={`tel:${profile.phone}`}>📞 Call Me</a>
          </div>
        </div>
        <form className="card" onSubmit={onSubmit} noValidate>
          <div className="two">{input(fields[0])}{input(fields[1])}</div>
          {input(fields[2])}
          <label htmlFor="c-message">
            Message
            <textarea id="c-message" name="message" rows="5" value={values.message} onChange={onChange}
              aria-invalid={!!errors.message} aria-describedby={errors.message ? 'e-message' : undefined} />
            {errors.message && <span className="err" id="e-message">{errors.message}</span>}
          </label>
          <button className="btn pri" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          <div aria-live="polite">
            {status === 'success' && <p className="ok">Thanks! Your message was sent.</p>}
            {status === 'error' && <p className="err">Something went wrong. Please email me directly.</p>}
          </div>
        </form>
      </Reveal>
    </section>
  );
}
