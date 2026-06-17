const groups = [
  {
    title: 'For Parents & Carers',
    bg: 'linear-gradient(135deg, #E4F0F8, #C4E2F4)',
    stroke: '#1377A8',
    icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    items: [
      'Reduced isolation and improved wellbeing',
      'Confident navigation of education systems',
      'Better understanding of EHCP rights',
      'Peer community and lasting connections',
    ],
  },
  {
    title: 'For Children',
    bg: 'linear-gradient(135deg, #EDE8F5, #DAD0EF)',
    stroke: '#9B87B8',
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    items: [
      'Access to safe, inclusive environments',
      'Improved self-esteem and confidence',
      'Experiences tailored to their unique needs',
      'A genuine sense of belonging',
    ],
  },
  {
    title: 'For Communities',
    bg: 'linear-gradient(135deg, #EEF6F4, #CCE8E2)',
    stroke: '#5E9E92',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    items: [
      'Greater neurodiversity awareness',
      'Stronger local support networks',
      'More inclusive schools & organisations',
      'Reduced pressure on statutory services',
    ],
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" style={{ background: '#FAF7F2', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ display: 'inline-block', background: '#EEF6F4', color: '#5E9E92', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50, marginBottom: 16 }}>Making a Difference</span>
          <h2 className="section-heading" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2.7rem', fontWeight: 900, color: '#1A3338', lineHeight: 1.15 }}>Expected Outcomes</h2>
        </div>
        <div className="out-grid stagger">
          {groups.map((g, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 24, padding: '44px 36px', border: '1px solid rgba(26,51,56,0.07)' }}>
              <div style={{ width: 50, height: 50, background: g.bg, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={g.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{g.icon}</svg>
              </div>
              <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: '#1A3338', marginBottom: 22 }}>{g.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
                {g.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, color: '#2D4A50', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    <span style={{ color: g.stroke, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
