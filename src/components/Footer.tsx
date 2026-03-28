const Footer = () => {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.12em', color: '#F5F0E8' }}>
                AURUM <span style={{ color: '#C9A84C' }}>&</span> NOIR
              </div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.55rem', letterSpacing: '0.3em', color: '#8C8070', textTransform: 'uppercase', marginTop: '2px' }}>Fine Dining</div>
            </div>
            <div className="gold-line" style={{ margin: 0 }} />
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', lineHeight: 1.8, color: '#8C8070', fontWeight: 300 }}>
              Where darkness meets gold. An intimate world of extraordinary flavour and timeless elegance.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, color: '#C9A84C', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Hours
            </h3>
            <ul style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', fontWeight: 300, color: '#8C8070', lineHeight: 2.2, letterSpacing: '0.05em' }}>
              <li className="flex justify-between"><span>Mon – Thu</span><span style={{ color: '#F5F0E8' }}>5pm – 10pm</span></li>
              <li className="flex justify-between"><span>Fri – Sat</span><span style={{ color: '#F5F0E8' }}>5pm – 11pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span style={{ color: '#F5F0E8' }}>4pm – 9pm</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, color: '#C9A84C', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Contact
            </h3>
            <ul style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', fontWeight: 300, color: '#8C8070', lineHeight: 2.4, letterSpacing: '0.04em' }}>
              <li style={{ color: '#F5F0E8' }}>123 Gourmet Avenue</li>
              <li>Culinary District</li>
              <li style={{ color: '#F5F0E8', marginTop: '0.5rem' }}>(555) 123-4567</li>
              <li>hello@aurumetnoir.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 500, color: '#C9A84C', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Follow
            </h3>
            <div className="flex space-x-3">
              {['IG', 'FB', 'TW', 'YT'].map((label) => (
                <button
                  key={label}
                  style={{
                    width: '38px', height: '38px',
                    border: '1px solid rgba(201,168,76,0.25)',
                    color: '#8C8070',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.55rem',
                    letterSpacing: '0.05em',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                  }}
                  className="flex items-center justify-center hover:border-amber-400 hover:text-amber-400"
                >
                  {label}
                </button>
              ))}
            </div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', color: '#4A4040', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
              © {new Date().getFullYear()} Aurum & Noir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;