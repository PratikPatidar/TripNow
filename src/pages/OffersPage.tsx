const OffersPage = () => (
  <div style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center' }} className="text-gradient">Exclusive Offers</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {[
        { code: 'SUMMER2026', discount: '20% OFF', desc: 'Valid on all international flights booked this month.' },
        { code: 'FIRSTTRIP', discount: '$50 OFF', desc: 'Special discount for first-time TripNow users.' },
        { code: 'WEEKENDGETAWAY', discount: '15% OFF', desc: 'Valid for hotel bookings from Friday to Sunday.' }
      ].map((offer, i) => (
        <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', margin: '0 0 8px 0' }}>{offer.discount}</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>{offer.desc}</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.3)', fontWeight: 'bold', letterSpacing: '2px' }}>
            {offer.code}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OffersPage;
