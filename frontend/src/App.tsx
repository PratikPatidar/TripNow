import React, { useState, useEffect } from 'react';
import './index.css';

// --- COMPONENTS ---

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

const AboutPage = () => (
  <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }} className="text-gradient">About TripNow.</h1>
    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '24px' }}>
      TripNow was born out of a desire to make travel booking not just easy, but completely seamless and intelligent. 
      By leveraging state-of-the-art Generative AI (Gemini), we are revolutionizing how people discover flights and destinations.
    </p>
    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', lineHeight: '1.8' }}>
      Our mission is to provide premium travel experiences, starting from the very first click on our interface to the moment you arrive at your destination.
    </p>
  </div>
);

const HotelsPage = () => (
  <div style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px', textAlign: 'center' }} className="text-gradient">Premium Stays</h1>
    <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '48px' }}>Book world-class hotels perfectly matched with your flights.</p>
    
    <div className="destinations-grid">
      {[
        { id: 1, title: 'The Ritz, Paris', price: '$450/night', img: 'https://images.unsplash.com/photo-1542314831-c6a4d1409e1f?auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: 'Aman, Tokyo', price: '$800/night', img: 'https://images.unsplash.com/photo-1551882547-ff40c0d5b9af?auto=format&fit=crop&w=600&q=80' },
        { id: 3, title: 'Four Seasons, Bali', price: '$350/night', img: 'https://images.unsplash.com/photo-1582719478250-c894e4dc240e?auto=format&fit=crop&w=600&q=80' }
      ].map(hotel => (
        <div key={hotel.id} className="destination-card">
          <img src={hotel.img} alt={hotel.title} className="destination-img" />
          <div className="destination-overlay">
            <h3 className="destination-title">{hotel.title}</h3>
            <div className="destination-price">{hotel.price}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

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

const Home = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<any>(null);

  const today = new Date().toISOString().split('T')[0];

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'SUMMER2026') {
      setDiscount(0.20);
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setPromoApplied(false);
      alert("Invalid Promo Code. Try SUMMER2026!");
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const totalPassengers = adults + children;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setHasSearched(true);
    setResults([]);
    
    try {
      const res = await fetch('/api/flights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to, date, passengers: totalPassengers })
      });
      const json = await res.json();
      if (json.success) {
        setResults(json.data);
      } else {
        alert("Failed to fetch flights. (Make sure backend is running!)");
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const destinations = [
    { id: 1, title: 'Bali, Indonesia', price: '$599', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Paris, France', price: '$899', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Tokyo, Japan', price: '$1099', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <>
      <section className="hero-section" style={{ paddingBottom: hasSearched ? '24px' : '80px' }}>
        <h1 className="hero-title text-gradient">Your Journey Begins Here</h1>
        <p className="hero-subtitle">Experience the world with premium comfort and seamless booking. We bring the best destinations to your fingertips.</p>
        
        <form className="search-widget" onSubmit={handleSearch}>
          <div className="flex-col" style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>From</label>
            <input type="text" className="input-field" placeholder="Departure City" value={from} onChange={(e) => setFrom(e.target.value)} required />
          </div>
          <div className="flex-col" style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>To</label>
            <input type="text" className="input-field" placeholder="Destination City" value={to} onChange={(e) => setTo(e.target.value)} required />
          </div>
          <div className="flex-col" style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Date</label>
            <input type="date" className="input-field" value={date} min={today} onChange={(e) => setDate(e.target.value)} required />
          </div>
          
          <div className="flex-col" style={{ textAlign: 'left', position: 'relative' }}>
            <label style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Passengers</label>
            <div 
              className="input-field" 
              style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{totalPassengers} Traveler{totalPassengers !== 1 ? 's' : ''}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            
            {showDropdown && (
              <div className="glass-card" style={{ 
                position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', padding: '16px', zIndex: 10, background: 'rgba(20, 20, 25, 0.98)', display: 'flex', flexDirection: 'column', gap: '16px' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Adults</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>12+ years</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setAdults(Math.max(1, adults - 1)); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                    <span style={{ minWidth: '20px', textAlign: 'center' }}>{adults}</span>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setAdults(adults + 1); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>Children</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>2-11 years</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setChildren(Math.max(0, children - 1)); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                    <span style={{ minWidth: '20px', textAlign: 'center' }}>{children}</span>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setChildren(children + 1); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="btn-primary" style={{ height: '46px', marginBottom: '2px' }} disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search Flights'}
          </button>
        </form>
      </section>

      {hasSearched && (
        <section className="flight-results-container">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Search Results for {from} to {to}</h2>
          
          {isLoading ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[1, 2, 3].map(i => <div key={i} className="glass-card skeleton" style={{ height: '100px', width: '100%' }}></div>)}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {results.map(flight => (
                <div key={flight.id} className="glass-card flight-card">
                  <div className="flight-info">
                    <div>
                      <div className="flight-time">{flight.from}</div>
                      <div className="flight-city">{from || 'Departure'}</div>
                    </div>
                    <div className="flight-duration">
                      <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{flight.duration}</span>
                      <div className="flight-line"></div>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{flight.airline}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="flight-time">{flight.to}</div>
                      <div className="flight-city">{to || 'Destination'}</div>
                    </div>
                  </div>
                  <div className="flight-price-box">
                    <div className="flight-price">{flight.price}</div>
                    <button className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.875rem' }} onClick={() => setSelectedFlight(flight)}>Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <>
          {/* Features Section */}
          <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }} className="text-gradient">Why Travel With TripNow?</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem' }}>Engineered by frontend experts, powered by AI.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                <div className="glass-card" style={{ textAlign: 'center', padding: '40px 32px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '24px' }}>🤖</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Smart AI Routing</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>Our Gemini-powered engine dynamically calculates the most efficient and scenic routes for your journey in milliseconds.</p>
                </div>
                <div className="glass-card" style={{ textAlign: 'center', padding: '40px 32px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '24px' }}>💎</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Premium Experience</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>A seamless, glassmorphism UI designed for modern travelers who value exceptional aesthetics and speed.</p>
                </div>
                <div className="glass-card" style={{ textAlign: 'center', padding: '40px 32px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '24px' }}>🛡️</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Secure Bookings</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>Enterprise-grade security ensures your data and transactions are completely protected throughout the process.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section style={{ padding: '80px 24px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }} className="text-gradient">Loved By Travelers</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem' }}>Don't just take our word for it.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {[
                  { name: "Sarah Jenkins", role: "Frequent Flyer", text: "The AI flight generation is insanely fast. I booked my trip to Paris in under 2 minutes. Best UI I have ever used.", rating: "⭐⭐⭐⭐⭐" },
                  { name: "Michael Chen", role: "Digital Nomad", text: "TripNow's glassmorphism interface is a breath of fresh air. It feels so premium, yet it's incredibly simple to navigate.", rating: "⭐⭐⭐⭐⭐" },
                  { name: "Priya Sharma", role: "Vacationer", text: "Applying promo codes and seeing the dynamic calculation right in the booking modal was so satisfying. Highly recommended!", rating: "⭐⭐⭐⭐⭐" }
                ].map((review, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '32px' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{review.rating}</div>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px', fontStyle: 'italic' }}>"{review.text}"</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 'bold' }}>{review.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{review.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div style={{ padding: '80px 48px 0', maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '8px' }}>Trending Destinations</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem' }}>Discover the most popular spots right now.</p>
            </div>
            <div className="destinations-grid">
              {destinations.map(dest => (
                <div key={dest.id} className="destination-card">
                  <img src={dest.img} alt={dest.title} className="destination-img" />
                  <div className="destination-overlay">
                    <h3 className="destination-title">{dest.title}</h3>
                    <div className="destination-price">From {dest.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section style={{ padding: '80px 24px', textAlign: 'center' }}>
            <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 32px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }}>Never Miss a Flight Deal</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px', fontSize: '1.125rem' }}>Subscribe to our newsletter and get exclusive AI-curated travel offers directly in your inbox.</p>
              <form style={{ display: 'flex', gap: '16px', maxWidth: '500px', margin: '0 auto' }} onSubmit={e => { e.preventDefault(); alert('Subscribed successfully!'); }}>
                <input type="email" className="input-field" placeholder="Enter your email" required style={{ flex: 1, padding: '16px 24px' }} />
                <button type="submit" className="btn-primary" style={{ padding: '16px 32px' }}>Subscribe</button>
              </form>
            </div>
          </section>
        </>

      {selectedFlight && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '500px', background: 'rgba(20,20,25,0.95)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Confirm Booking</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <div style={{ fontWeight: 'bold' }}>{selectedFlight.airline}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{from} to {to}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold' }}>{date}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>{selectedFlight.from} - {selectedFlight.to}</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Base Ticket Price</span>
                <span>{selectedFlight.price}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Adults</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setAdults(Math.max(1, adults - 1)); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                  <span style={{ minWidth: '20px', textAlign: 'center' }}>{adults}</span>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setAdults(adults + 1); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Children</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setChildren(Math.max(0, children - 1)); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                  <span style={{ minWidth: '20px', textAlign: 'center' }}>{children}</span>
                  <button type="button" onClick={(e) => { e.stopPropagation(); setChildren(children + 1); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <input type="text" className="input-field" placeholder="Promo Code (e.g. SUMMER2026)" value={promoCode} onChange={e => setPromoCode(e.target.value)} style={{ padding: '8px 12px', flex: 1 }} disabled={promoApplied} />
                <button type="button" className="btn-primary" onClick={applyPromo} style={{ padding: '8px 16px', background: promoApplied ? 'rgba(34, 197, 94, 0.2)' : 'var(--accent-color)', color: promoApplied ? '#4ade80' : 'white', border: promoApplied ? '1px solid #4ade80' : 'none' }}>
                  {promoApplied ? 'Applied ✓' : 'Apply'}
                </button>
              </div>

              {promoApplied && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4ade80', fontSize: '0.875rem' }}>
                  <span>Discount (SUMMER2026)</span>
                  <span>-20%</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '16px', borderTop: '1px dashed rgba(255,255,255,0.2)', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                <span>Total Amount</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {promoApplied && (
                    <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: 'rgba(255,255,255,0.4)' }}>
                      ${(Number(selectedFlight.price.replace(/[^0-9.-]+/g,"")) * totalPassengers).toFixed(2)}
                    </span>
                  )}
                  <span>${(Number(selectedFlight.price.replace(/[^0-9.-]+/g,"")) * totalPassengers * (1 - discount)).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-primary" style={{ flex: 1, background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }} onClick={() => setSelectedFlight(null)}>Cancel</button>
              <button className="btn-primary" style={{ flex: 1 }} onClick={() => onNavigate('success')}>Pay & Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- MAIN APP ---

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('tripNowUser');
    if (savedUser) setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tripNowUser');
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <>
      <div style={{ background: 'linear-gradient(90deg, var(--accent-color), #8b5cf6)', color: 'white', textAlign: 'center', padding: '10px', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>
        🎉 Limited Time Offer: Use code <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px', margin: '0 4px' }}>SUMMER2026</span> for 20% OFF all AI-generated flight bookings!
      </div>
      <div className="mesh-background"></div>
      
      {/* Navbar */}
      <nav className="navbar glass-card" style={{ margin: '24px', borderRadius: '100px', position: 'sticky', top: '24px', zIndex: 100 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="nav-logo">TripNow.</a>
        <div className="nav-links">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} style={{ color: currentPage === 'home' ? 'white' : '' }}>Flights</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('hotels'); }} style={{ color: currentPage === 'hotels' ? 'white' : '' }}>Hotels</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('offers'); }} style={{ color: currentPage === 'offers' ? 'white' : '' }}>Offers</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('support'); }} style={{ color: currentPage === 'support' ? 'white' : '' }}>Support</a>
        </div>
        
        {user ? (
          <div className="flex-row">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('bookings'); }} style={{ color: currentPage === 'bookings' ? 'white' : 'rgba(255,255,255,0.7)', textDecoration: 'none', marginRight: '16px', fontWeight: 'bold' }}>My Bookings</a>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Hi, {user.split('@')[0]}</span>
            <button onClick={handleLogout} style={{ background: 'transparent', color: 'var(--accent-color)', border: '1px solid var(--accent-color)' }} className="btn-primary">Logout</button>
          </div>
        ) : (
          <button onClick={() => setCurrentPage('signin')} className="btn-primary" style={{ padding: '8px 24px' }}>Sign In</button>
        )}
      </nav>

      <main style={{ minHeight: '70vh' }}>
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'hotels' && <HotelsPage />}
        {currentPage === 'offers' && <OffersPage />}
        {currentPage === 'support' && <SupportPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'bookings' && <BookingsPage />}
        {currentPage === 'success' && <BookingSuccess onHome={() => setCurrentPage('home')} />}
        {currentPage === 'signin' && (
          <SignIn onLogin={(email) => { setUser(email); setCurrentPage('home'); }} />
        )}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </>
  );
}

export default App;
