import { useState } from 'react';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const labelStyle = {
  display: 'block',
  fontWeight: 600,
  color: '#1A3338',
  marginBottom: 8,
  fontSize: '0.9rem',
};

const reqStar = <span style={{ color: '#EF835B' }}>*</span>;
const optTag = <span style={{ color: '#5A7A82', fontWeight: 400, fontSize: '0.85rem' }}>(optional)</span>;

const ROLE_LABELS = {
  parent: 'Parent / Carer',
  professional: 'Professional',
  school: 'School / Organisation',
  other: 'Other',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', help: '', heard: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: false });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!form.email.trim()) next.email = true;
    if (!form.role) next.role = true;
    if (!form.help.trim()) next.help = true;
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    if (!WEB3FORMS_KEY) {
      setStatus('error');
      setErrorMsg('Form is not configured yet. Set VITE_WEB3FORMS_KEY in .env');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New KT's Place enquiry from ${form.name}`,
          from_name: "KT's Place website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          role: ROLE_LABELS[form.role] || form.role,
          message: form.help,
          heard_about_us: form.heard,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  const isLocked = status === 'sending' || status === 'success';

  const fieldStyle = (k) => ({
    borderColor: errors[k] ? '#EF835B' : undefined,
    boxShadow: errors[k] ? '0 0 0 3px rgba(239,131,91,0.15)' : undefined,
    opacity: isLocked ? 0.55 : 1,
  });

  const buttonLabel =
    status === 'sending' ? 'Sending…' :
    status === 'success' ? "✓ Enquiry sent! We'll be in touch soon." :
    'Send Enquiry';

  return (
    <section id="contact" style={{ background: 'white', padding: '100px 32px' }}>
      <div style={{ maxWidth: 660, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ display: 'inline-block', background: '#E4F0F8', color: '#1377A8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50, marginBottom: 16 }}>Get in Touch</span>
          <h2 className="section-heading" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2.7rem', fontWeight: 900, color: '#1A3338', lineHeight: 1.15, marginBottom: 14 }}>We'd Love to Hear From You</h2>
          <p style={{ color: '#4A6E75', fontSize: '1.05rem', lineHeight: 1.65 }}>Have a question or want to know more about KT's Place? We'd love to hear from you.</p>
        </div>
        <form className="reveal" onSubmit={onSubmit} noValidate style={{ background: '#FAF7F2', borderRadius: 28, padding: '52px 44px' }}>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="f-name" style={labelStyle}>Full Name {reqStar}</label>
            <input id="f-name" type="text" className="form-field" placeholder="Your full name" value={form.name} onChange={onChange('name')} disabled={isLocked} style={fieldStyle('name')} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="f-email" style={labelStyle}>Email Address {reqStar}</label>
            <input id="f-email" type="email" className="form-field" placeholder="your@email.com" value={form.email} onChange={onChange('email')} disabled={isLocked} style={fieldStyle('email')} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="f-phone" style={labelStyle}>Phone Number {optTag}</label>
            <input id="f-phone" type="tel" className="form-field" placeholder="+44 0000 000 000" value={form.phone} onChange={onChange('phone')} disabled={isLocked} style={fieldStyle('phone')} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="f-role" style={labelStyle}>I am a… {reqStar}</label>
            <select id="f-role" className="form-field custom-select" value={form.role} onChange={onChange('role')} disabled={isLocked} style={fieldStyle('role')}>
              <option value="" disabled>Please select…</option>
              <option value="parent">Parent / Carer</option>
              <option value="professional">Professional</option>
              <option value="school">School / Organisation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label htmlFor="f-help" style={labelStyle}>How can we help? {reqStar}</label>
            <textarea id="f-help" rows="5" className="form-field" placeholder="Tell us a bit about your situation and how we might support you…" value={form.help} onChange={onChange('help')} disabled={isLocked} style={{ ...fieldStyle('help'), resize: 'vertical' }} />
          </div>
          <div style={{ marginBottom: 36 }}>
            <label htmlFor="f-heard" style={labelStyle}>How did you hear about us? {optTag}</label>
            <input id="f-heard" type="text" className="form-field" placeholder="e.g. Social media, word of mouth, school…" value={form.heard} onChange={onChange('heard')} disabled={isLocked} style={fieldStyle('heard')} />
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={isLocked}
            style={{
              width: '100%',
              background: status === 'success' ? '#5E9E92' : '#1377A8',
              color: 'white',
              border: 'none',
              borderRadius: 14,
              padding: 18,
              fontSize: '1rem',
              fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              cursor: isLocked ? 'default' : 'pointer',
              letterSpacing: '0.01em',
            }}
          >
            {buttonLabel}
          </button>
          {status === 'error' && (
            <p style={{ textAlign: 'center', color: '#EF835B', fontSize: '0.9rem', marginTop: 14, fontWeight: 600 }}>
              {errorMsg}
            </p>
          )}
          <p style={{ textAlign: 'center', color: '#6A8A92', fontSize: '0.84rem', marginTop: 16, lineHeight: 1.5 }}>Your information is kept private. We respond within 2 working days.</p>
        </form>
      </div>
    </section>
  );
}
