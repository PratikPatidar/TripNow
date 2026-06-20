import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import HotelsPage from './pages/HotelsPage';
import OffersPage from './pages/OffersPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import BookingsPage from './pages/BookingsPage';
import BookingSuccess from './pages/BookingSuccess';
import Footer from './components/Footer';

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

