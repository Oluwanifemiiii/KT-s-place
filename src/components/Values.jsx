const values = [
  {
    title: 'Compassion',
    text: 'Leading with warmth and understanding',
    bg: 'rgba(239,131,91,0.18)',
    stroke: '#EF835B',
    icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  },
  {
    title: 'Inclusion',
    text: 'Everyone belongs, always',
    bg: 'rgba(103,171,220,0.18)',
    stroke: '#67ABDC',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>,
  },
  {
    title: 'Empowerment',
    text: 'Building confidence and capability',
    bg: 'rgba(155,135,184,0.2)',
    stroke: '#B8A4D4',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
  },
  {
    title: 'Respect',
    text: 'Honouring every voice and story',
    bg: 'rgba(94,158,146,0.18)',
    stroke: '#5E9E92',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Collaboration',
    text: 'Stronger together in every step',
    bg: 'rgba(246,184,128,0.18)',
    stroke: '#F6B880',
    icon: <><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></>,
  },
];

export default function Values() {
  return (
    <section id="values" style={{ background: '#1A3338', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50, marginBottom: 16 }}>What Drives Us</span>
          <h2 className="section-heading" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2.7rem', fontWeight: 900, color: 'white', lineHeight: 1.15 }}>Our Values</h2>
        </div>
        <div className="val-grid stagger">
          {values.map((v, i) => (
            <div key={i} className="value-pill" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 22, padding: '36px 22px', textAlign: 'center' }}>
              <div style={{ width: 58, height: 58, borderRadius: '50%', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={v.stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{v.icon}</svg>
              </div>
              <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'white', fontSize: '1rem', marginBottom: 6 }}>{v.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.5 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
