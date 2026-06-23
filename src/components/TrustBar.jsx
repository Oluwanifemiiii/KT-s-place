const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: '#4A6E75',
  fontSize: '0.88rem',
  fontWeight: 600,
};

function Check({ color = '#1377A8' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function TrustBar() {
  return (
    <div style={{ background: 'white', borderBottom: '1px solid rgba(26,51,56,0.07)', padding: '16px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        <span style={itemStyle}><Check />15+ Years Experience</span>
        <span style={itemStyle}><Check />London-wide</span>
        <span style={itemStyle}><Check />SEND Specialists</span>
        <span style={itemStyle}><Check color="#EF835B" />Community-led Support</span>
      </div>
    </div>
  );
}
