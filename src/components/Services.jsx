const services = [
  {
    title: 'Consultancy',
    text: 'One-to-one sessions to help you understand your child’s needs and next steps.',
    bg: 'linear-gradient(135deg, #E4F0F8, #C4E2F4)',
    stroke: '#1377A8',
    icon: (
      <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>
    ),
  },
  {
    title: 'Advocacy',
    text: 'Expert support to help you navigate the SEN system and advocate for your child’s rights.',
    bg: 'linear-gradient(135deg, #EDE8F5, #DAD0EF)',
    stroke: '#9B87B8',
    icon: (
      <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>
    ),
  },
  {
    title: 'Support Hubs',
    text: 'Community-based family hubs where SEN families connect, share, and find support together.',
    bg: 'linear-gradient(135deg, #EEF6F4, #CCE8E2)',
    stroke: '#5E9E92',
    icon: (
      <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
    ),
  },
  {
    title: 'Workshops',
    text: 'Practical, empowering workshops for families covering key SEN topics and strategies.',
    bg: 'linear-gradient(135deg, #FEF0E6, #FAE0CE)',
    stroke: '#EF835B',
    icon: (
      <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: 'white', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ display: 'inline-block', background: '#EEF6F4', color: '#5E9E92', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50, marginBottom: 16 }}>What We Offer</span>
          <h2 className="section-heading" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2.7rem', fontWeight: 900, color: '#1A3338', lineHeight: 1.15 }}>Core Services</h2>
          <p style={{ color: '#4A6E75', fontSize: '1.05rem', maxWidth: 460, margin: '14px auto 0', lineHeight: 1.65 }}>However you need support, KT's Place has something for you.</p>
        </div>
        <div className="svc-grid stagger">
          {services.map((s, i) => (
            <div key={i} className="service-card" style={{ background: '#FAF7F2', borderRadius: 24, padding: '42px 36px', border: '1px solid rgba(26,51,56,0.07)' }}>
              <div style={{ width: 62, height: 62, background: s.bg, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={s.stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
              </div>
              <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#1A3338', marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: '#4A6E75', lineHeight: 1.72, fontSize: '0.96rem' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
