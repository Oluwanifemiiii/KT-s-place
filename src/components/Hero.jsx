export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '93vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 32px 60px',
        position: 'relative',
        overflow: 'hidden',
        background: '#FAF7F2',
      }}
    >
      <div style={{ position: 'absolute', top: -60, right: -80, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,135,184,0.18) 0%, transparent 68%)', animation: 'blobDrift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,169,178,0.16) 0%, transparent 70%)', animation: 'blobDrift 18s ease-in-out infinite 3s', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '5%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(246,184,128,0.14) 0%, transparent 70%)', animation: 'blobDrift 12s ease-in-out infinite 6s', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 760, position: 'relative', zIndex: 1 }}>
        <div style={{ animation: 'heroFadeUp 0.9s ease both' }}>
          <img src="/uploads/transparent-logo.svg" alt="KT's Place" style={{ height: 190, width: 'auto', marginBottom: 24 }} />
        </div>
        <h1
          className="hero-title"
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '3.4rem',
            fontWeight: 900,
            color: '#1A3338',
            lineHeight: 1.15,
            marginBottom: 20,
            animation: 'heroFadeUp 0.9s 0.18s ease both',
            textWrap: 'pretty',
          }}
        >
          Supporting Families.<br />Empowering Children.<br />Building Futures.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#4A6E75', maxWidth: 520, margin: '0 auto 44px', lineHeight: 1.75, animation: 'heroFadeUp 0.9s 0.32s ease both' }}>
          A safe, welcoming community hub for neurodiverse families across England.
        </p>
        <div className="hero-ctas" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', animation: 'heroFadeUp 0.9s 0.46s ease both' }}>
          <a href="#need" className="cta-primary" style={{ background: '#1377A8', color: 'white', borderRadius: 50, padding: '16px 38px', textDecoration: 'none', fontWeight: 700, fontSize: '1.02rem', display: 'inline-block' }}>Learn More</a>
          <a href="#contact" className="cta-outline" style={{ background: 'transparent', color: '#1A3338', borderRadius: 50, padding: '16px 38px', textDecoration: 'none', fontWeight: 700, fontSize: '1.02rem', border: '2px solid rgba(26,51,56,0.28)', display: 'inline-block' }}>Make an Enquiry</a>
        </div>
      </div>
    </section>
  );
}
