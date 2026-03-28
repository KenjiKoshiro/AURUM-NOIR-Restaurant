import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  // Reset visibility on route change
  useEffect(() => {
    setVisible(true);
    setScrolled(false);
    setLastY(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(10,10,10,0.6)',
        borderBottom: scrolled
          ? '1px solid rgba(201,168,76,0.22)'
          : '1px solid rgba(201,168,76,0.07)',
        boxShadow: scrolled ? '0 8px 48px rgba(0,0,0,0.65)' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition:
          'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}
      className="fixed top-0 z-50 w-full backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div
                style={{
                  border: '1px solid #C9A84C',
                  transform: 'rotate(45deg)',
                  transition: 'transform 0.4s ease',
                }}
                className="absolute inset-0 rounded-sm group-hover:rotate-90"
              />
              <span
                style={{
                  color: '#C9A84C',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                A
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: '#F5F0E8',
                  transition: 'color 0.3s ease',
                }}
              >
                AURUM <span style={{ color: '#C9A84C' }}>&</span> NOIR
              </div>
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: '#8C8070',
                  textTransform: 'uppercase',
                  marginTop: '-2px',
                }}
              >
                Fine Dining
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    color: isActive ? '#C9A84C' : '#8C8070',
                    paddingBottom: '3px',
                    position: 'relative',
                    transition: 'color 0.35s ease',
                  }}
                  className={cn('group')}
                >
                  {item.name}
                  {/* Animated underline */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '1px',
                      background: '#C9A84C',
                      width: isActive ? '100%' : '0%',
                      transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}
                    className="group-hover:w-full"
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link to="/reservations" className="btn-gold rounded-none px-7 py-3">
            <span>Reserve</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;