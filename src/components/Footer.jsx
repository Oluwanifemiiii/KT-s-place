const h4 = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 700,
  color: 'white',
  marginBottom: 20,
  fontSize: '0.95rem',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
};

export default function Footer() {
  return (
    <footer style={{ background: '#1A3338', padding: '72px 32px 40px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="footer-grid" style={{ marginBottom: 56 }}>
          <div>
            <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: '10px 14px', display: 'inline-block', marginBottom: 18 }}>
              <img src="/uploads/transparent-logo.svg" alt="KT's Place" style={{ height: 72, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.75, maxWidth: 280 }}>KT's Place was built on one belief: that every SEN family deserves somewhere to feel safe, heard, and supported. Whatever you're facing, you don't have to face it alone.</p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', marginTop: 12 }}>UK-based · SEND community hub</p>
          </div>
          <div>
            <h4 style={h4}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:enquiries@ktplace.co.uk" className="footer-link">enquiries@ktplace.co.uk</a>
              <a href="https://www.ktplace.co.uk" target="_blank" rel="noopener noreferrer" className="footer-link">www.ktplace.co.uk</a>
            </div>
          </div>
          <div>
            <h4 style={h4}>Explore</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#about" className="footer-link">Our Mission &amp; Vision</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#values" className="footer-link">Our Values</a>
              <a href="#founder" className="footer-link">About Kirst</a>
              <a href="#contact" className="footer-link">Make an Enquiry</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.09)', paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.35)' }}>© 2025 KT's Place. All rights reserved. Made by Oluwanifemi</p>
          <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.35)' }}>Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  );
}
