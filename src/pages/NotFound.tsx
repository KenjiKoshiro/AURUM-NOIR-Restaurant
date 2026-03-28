import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="text-center px-6">
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '8rem', fontWeight: 300, color: 'rgba(201,168,76,0.15)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
        <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#8C8070', lineHeight: 2, maxWidth: '380px', margin: '0 auto 2.5rem', fontWeight: 300 }}>
          The page you're looking for doesn't exist. Let us guide you back to the dining experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-gold px-10 py-3 inline-block"><span>Return Home</span></Link>
          <Link to="/menu" className="btn-outline-gold px-10 py-3 inline-block">View Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;