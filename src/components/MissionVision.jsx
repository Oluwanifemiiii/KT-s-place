export default function MissionVision() {
  return (
    <section id="about" style={{ background: '#FAF7F2', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ display: 'inline-block', background: '#EDE8F5', color: '#9B87B8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 50, marginBottom: 16 }}>Who We Are</span>
          <h2 className="section-heading" style={{ fontFamily: "'Nunito', sans-serif", fontSize: '2.7rem', fontWeight: 900, color: '#1A3338', lineHeight: 1.15 }}>Our Mission &amp; Vision</h2>
        </div>
        <div className="mv-grid reveal">
          <div style={{ background: 'linear-gradient(140deg, #E4F0F8 0%, #CBE6F4 100%)', borderRadius: 28, padding: '52px 44px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(19,119,168,0.1)', pointerEvents: 'none' }} />
            <div style={{ width: 54, height: 54, background: '#1377A8', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.65rem', fontWeight: 900, color: '#1A3338', marginBottom: 16 }}>Our Mission</h3>
            <p style={{ color: '#2A4856', lineHeight: 1.8, fontSize: '1.02rem', textWrap: 'pretty' }}>At KT's Place, our mission is to ensure that no SEN family ever feels alone. We provide specialist consultancy, advocacy, and family support that is rooted in empathy, expertise, and an unwavering commitment to making every family feel safe, heard, and empowered — wherever they are on their SEN journey.</p>
          </div>
          <div style={{ background: 'linear-gradient(140deg, #EDE8F5 0%, #DDD3EE 100%)', borderRadius: 28, padding: '52px 44px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(155,135,184,0.12)', pointerEvents: 'none' }} />
            <div style={{ width: 54, height: 54, background: '#9B87B8', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </div>
            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: '1.65rem', fontWeight: 900, color: '#1A3338', marginBottom: 16 }}>Our Vision</h3>
            <p style={{ color: '#2A3648', lineHeight: 1.8, fontSize: '1.02rem', textWrap: 'pretty' }}>A future where every neurodiverse child has the opportunity to thrive, every family feels empowered and informed, and communities are equipped to celebrate and support difference in all its forms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
