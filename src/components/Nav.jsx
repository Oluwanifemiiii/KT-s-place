import { useEffect, useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  const linkStyle = {
    color: '#2D4A50',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(250,247,242,0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(26,51,56,0.07)',
        transition: 'box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 4px 28px rgba(26,51,56,0.1)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
      >
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
        >
          <img src="/uploads/transparent-logo.svg" alt="KT's Place" style={{ height: 90, width: 'auto' }} />
        </a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <a href="#need" className="nav-link" style={linkStyle} onClick={close}>The Need</a>
          <a href="#services" className="nav-link" style={linkStyle} onClick={close}>Services</a>
          <a href="#founder" className="nav-link" style={linkStyle} onClick={close}>About Kirst</a>
          <a
            href="#contact"
            className="cta-primary"
            onClick={close}
            style={{
              background: '#1377A8',
              color: 'white',
              borderRadius: 50,
              padding: '11px 24px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.92rem',
              whiteSpace: 'nowrap',
            }}
          >
            Make an Enquiry
          </a>
        </div>
        <button
          className="kt-hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A3338', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A3338', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A3338', borderRadius: 2 }} />
        </button>
      </div>
    </nav>
  );
}
