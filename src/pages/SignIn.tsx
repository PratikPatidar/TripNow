import { useState } from 'react';

const SignIn = ({ onLogin }: { onLogin: (user: string) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem('tripNowUser', email);
    onLogin(email);
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', textAlign: 'center' }}>Welcome Back</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '24px' }}>Sign in to sync your bookings.</p>
        
        <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px dashed rgba(59, 130, 246, 0.4)', borderRadius: '12px', padding: '16px', marginBottom: '24px', fontSize: '0.875rem' }}>
          <div style={{ color: '#60a5fa', fontWeight: 'bold', marginBottom: '8px' }}>Demo Credentials:</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Email:</span>
            <span style={{ fontFamily: 'monospace', color: 'white' }}>test@tripnow.com</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Password:</span>
            <span style={{ fontFamily: 'monospace', color: 'white' }}>admin123</span>
          </div>
        </div>

        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px' }}>Email</label>
            <input type="email" required className="input-field" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div>
            <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px' }}>Password</label>
            <input type="password" required className="input-field" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '16px' }}>Continue</button>
        </form>
      </div>
    </div>
  );
};

// --- PAGES ---

export default SignIn;
