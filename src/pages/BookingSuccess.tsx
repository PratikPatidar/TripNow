const BookingSuccess = ({ onHome }: { onHome: () => void }) => (
  <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '24px' }}>
    <div style={{ width: '80px', height: '80px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent-color)' }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px' }} className="text-gradient">Booking Confirmed!</h1>
    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px', marginBottom: '32px' }}>
      Your AI-generated premium flight has been successfully booked. You will receive an email confirmation shortly.
    </p>
    <button onClick={onHome} className="btn-primary">Return Home</button>
  </div>
);

export default BookingSuccess;
