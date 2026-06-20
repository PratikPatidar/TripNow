import { useState } from 'react';

const BookingsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = [
    { id: 'TRP9812X', route: 'Indore to Mumbai', date: '2026-07-15', airline: 'SkyBlue Airlines', status: 'Upcoming' },
    { id: 'TRP4421Y', route: 'Mumbai to Bali', date: '2026-07-20', airline: 'AirVelocity', status: 'Upcoming' }
  ];

  const pastBookings = [
    { id: 'TRP1102A', route: 'Delhi to Paris', date: '2025-12-10', airline: 'CloudJet', status: 'Completed' },
    { id: 'TRP5598B', route: 'Bangalore to Tokyo', date: '2025-08-22', airline: 'Nippon Air', status: 'Completed' }
  ];

  const displayBookings = activeTab === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '32px', textAlign: 'center' }} className="text-gradient">My Bookings</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
        <button 
          onClick={() => setActiveTab('upcoming')}
          className="btn-primary" 
          style={{ background: activeTab === 'upcoming' ? 'var(--accent-color)' : 'transparent', border: '1px solid var(--accent-color)', width: '150px' }}
        >
          Upcoming
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className="btn-primary" 
          style={{ background: activeTab === 'past' ? 'var(--accent-color)' : 'transparent', border: '1px solid var(--accent-color)', width: '150px' }}
        >
          Past
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {displayBookings.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>No bookings found in this category.</p>
        ) : (
          displayBookings.map(b => (
            <div key={b.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{b.route}</h3>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{b.airline} • {b.date}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Booking ID: {b.id}</div>
                <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold', background: b.status === 'Upcoming' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(34, 197, 94, 0.2)', color: b.status === 'Upcoming' ? '#60a5fa' : '#4ade80' }}>
                  {b.status}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
