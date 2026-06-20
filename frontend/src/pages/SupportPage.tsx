const SupportPage = () => (
  <div style={{ padding: '80px 24px', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px', textAlign: 'center' }} className="text-gradient">How can we help?</h1>
    <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '48px' }}>Send us a message and our AI assistant will get back to you.</p>
    
    <form className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
      <div>
        <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px' }}>Name</label>
        <input type="text" required className="input-field" placeholder="John Doe" />
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px' }}>Email</label>
        <input type="email" required className="input-field" placeholder="john@example.com" />
      </div>
      <div>
        <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: '8px' }}>Message</label>
        <textarea required className="input-field" rows={4} placeholder="How can we assist you today?"></textarea>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: '16px' }}>Send Message</button>
    </form>
  </div>
);

export default SupportPage;
