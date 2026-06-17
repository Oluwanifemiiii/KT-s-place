const stats = [
  { value: '1.6M', label: 'children with SEND in England', bg: '#F5FBFE', color: '#1377A8', border: 'rgba(19,119,168,0.1)' },
  { value: '576K+', label: 'children with an EHCP — up 77% in 10 years', bg: '#FEF5EF', color: '#EF835B', border: 'rgba(239,131,91,0.12)' },
  { value: '68%', label: 'of parents report isolation', bg: '#F3EFF9', color: '#9B87B8', border: 'rgba(155,135,184,0.15)' },
  { value: '42%', label: 'of parents report negative mental health impact', bg: '#FEF5EF', color: '#EF835B', border: 'rgba(239,131,91,0.12)' },
  { value: '28%', label: 'of families feel adequately supported locally', bg: '#EEF6F4', color: '#5E9E92', border: 'rgba(94,158,146,0.15)' },
  { value: '20+', label: 'weeks average EHCP wait time', bg: '#F5FBFE', color: '#1377A8', border: 'rgba(19,119,168,0.1)' },
];

export default function Need() {
  return (
    <section id="need" style={{ background: 'white', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ display: 'inline-block', background: '#E4F0F8', color: '#1377A8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50, marginBottom: 16 }}>The Reality</span>
          <h2 className="section-heading" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2.7rem', fontWeight: 900, color: '#1A3338', lineHeight: 1.15, textWrap: 'pretty' }}>Why KT's Place Exists</h2>
        </div>

        <div className="stats-grid stagger">
          {stats.map((s, i) => (
            <div key={i} className="stat-card" style={{ background: s.bg, borderRadius: 20, padding: '34px 28px', border: `1px solid ${s.border}` }}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '3rem', fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 10 }}>{s.value}</div>
              <div style={{ color: '#1A3338', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ maxWidth: 700, margin: '60px auto 0', textAlign: 'center' }}>
          <p style={{ fontSize: '1.18rem', color: '#2D4A50', lineHeight: 1.85, textWrap: 'pretty' }}>
            Demand is rising. Formal systems are stretched. Families are being left to navigate this alone.<br />
            <strong style={{ color: '#1377A8', fontWeight: 700 }}>KT's Place exists to change that.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
