export default function Founder() {
  return (
    <section id="founder" style={{ background: '#EDE8F5', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ display: 'inline-block', background: 'rgba(155,135,184,0.2)', color: '#9B87B8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50, marginBottom: 16 }}>The Person Behind the Place</span>
          <h2 className="section-heading" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2.7rem', fontWeight: 900, color: '#1A3338', lineHeight: 1.15 }}>About Kirsty</h2>
        </div>
        <div className="founder-grid reveal">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 270, height: 270, borderRadius: '50%', background: 'linear-gradient(145deg, #D8CFE8, #C4B8DC)', border: '5px solid white', boxShadow: '0 16px 48px rgba(155,135,184,0.28)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              <img src="/uploads/kirsty.jpeg" alt="Kirst" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: '1.3rem', color: '#1A3338' }}>Kirsty</div>
              <div style={{ color: '#6B5B8A', fontSize: '0.88rem', fontWeight: 500, lineHeight: 1.5, marginTop: 2 }}>CEO / SEN Consultant<br />Founder, KT's Place</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '4rem', color: 'rgba(155,135,184,0.3)', fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 0.8, marginBottom: 4, fontStyle: 'italic' }}>"</div>
            <p style={{ fontSize: '1.1rem', color: '#2D3A4A', lineHeight: 1.85, marginBottom: 28, textWrap: 'pretty' }}>
              Kirsty is an experienced SEN consultant and family advocate with over 15 years working at the heart of special educational needs support. 

She is the founder of KT's Place — a space built on the belief that every SEN family deserves somewhere to feel safe, truly listened to, and completely free from judgement.
Having worked extensively within education as well as directly alongside families, Kirsty brings a rare combination of frontline knowledge and practical expertise across emotional regulation, behaviour and pastoral support, and social and life skills development.

At KT's Place, Kirsty is that person for families — the constant, trusted presence in what can often feel like an overwhelming and isolating journey. Through consultancy, advocacy, family support hubs, and specialist workshops, she provides the guidance, strategies, and reassurance families need to feel informed, supported, and heard.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ background: 'white', color: '#9B87B8', borderRadius: 50, padding: '7px 16px', fontSize: '0.83rem', fontWeight: 700, border: '1.5px solid rgba(155,135,184,0.3)' }}>15+ Years Experience</span>
              <span style={{ background: 'white', color: '#1377A8', borderRadius: 50, padding: '7px 16px', fontSize: '0.83rem', fontWeight: 700, border: '1.5px solid rgba(19,119,168,0.25)' }}>SEN Specialist</span>
              <span style={{ background: 'white', color: '#5E9E92', borderRadius: 50, padding: '7px 16px', fontSize: '0.83rem', fontWeight: 700, border: '1.5px solid rgba(94,158,146,0.3)' }}>Community Advocate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
