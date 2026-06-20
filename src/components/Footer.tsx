const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <footer style={{ padding: '64px 24px', borderTop: '1px solid var(--card-border)', marginTop: '80px', textAlign: 'center' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '800' }}>TripNow.</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', color: 'rgba(255,255,255,0.6)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} style={{ color: 'inherit' }}>About Us</a>
        <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
        <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('support'); }} style={{ color: 'inherit' }}>Contact</a>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>© 2026 TripNow. An AI-Powered Travel Engine.</p>
    </div>
  </footer>
);

export default Footer;
