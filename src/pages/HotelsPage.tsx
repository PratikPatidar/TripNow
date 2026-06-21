const HotelsPage = () => (
  <div style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px', textAlign: 'center' }} className="text-gradient">Premium Stays</h1>
    <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '48px' }}>Book world-class hotels perfectly matched with your flights.</p>
    
    <div className="destinations-grid">
      {[
        { id: 1, title: 'The Ritz, Paris', price: '$450/night', img: '/hotels/paris.jpg' },
        { id: 2, title: 'Aman, Tokyo', price: '$800/night', img: '/hotels/tokyo.jpg' },
        { id: 3, title: 'Four Seasons, Bali', price: '$350/night', img: '/hotels/bali.jpg' }
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

export default HotelsPage;
