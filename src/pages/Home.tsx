import { Link } from 'react-router-dom';

const Home = () => {
  const featuredDishes = [
    {
      name: 'Black Truffle Risotto',
      description: 'Carnaroli rice, aged Parmesan, white truffle oil, Périgord truffle',
      price: '$52',
      image: '/dish-truffle-risotto.jpg',
      tag: 'Chef\'s Signature',
    },
    {
      name: 'Atlantic Salmon',
      description: 'Pan-seared, champagne beurre blanc, caviar, seasonal micro herbs',
      price: '$48',
      image: '/hero-background.jpg',
      tag: 'Seasonal',
    },
    {
      name: 'Valrhona Soufflé',
      description: 'Dark 72% chocolate, Tahitian vanilla glacé, gold leaf',
      price: '$28',
      image: '/dish-chocolate-dessert.jpg',
      tag: 'Dessert',
    },
  ];

  const testimonials = [
    {
      quote: 'A transcendent dining experience. Every course arrived like a work of art.',
      author: 'Isabelle M.',
      role: 'Culinary Editor, Le Monde',
    },
    {
      quote: 'The finest table in the city. An evening I will long remember.',
      author: 'Charles T.',
      role: 'Guest, Three Visits',
    },
    {
      quote: 'Impeccable, refined, sublime. Aurum & Noir stands alone.',
      author: 'Jessica L.',
      role: 'First Visit',
    },
  ];

  return (
    <div style={{ background: '#0A0A0A' }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '92vh' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.25)',
          }}
        />
        {/* Gold vignette overlay */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.95) 40%, transparent 100%)' }} />

        <div className="container relative mx-auto px-6 flex items-center" style={{ minHeight: '92vh' }}>
          <div className="max-w-2xl animate-fade-up">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 400 }}>
              Est. 2015 · Two Michelin Stars
            </div>

            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3.5rem, 7vw, 6rem)', fontWeight: 300, lineHeight: 1.05, color: '#F5F0E8', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
              Where Darkness<br />
              <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Meets Gold</em>
            </h1>

            <div className="gold-line" style={{ margin: '0 0 1.75rem 0' }} />

            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', lineHeight: 2, color: '#8C8070', fontWeight: 300, marginBottom: '2.5rem', maxWidth: '480px' }}>
              An intimate world of extraordinary cuisine crafted by Michelin-starred hands. Every evening, a story told through flavour, texture, and art.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/reservations" className="btn-gold px-10 py-4 inline-block text-center">
                <span>Reserve a Table</span>
              </Link>
              <Link to="/menu" className="btn-outline-gold px-10 py-4 inline-block text-center">
                Explore Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }} />
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-6">
          <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#C9A84C', letterSpacing: '0.2em' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
        </div>
      </div>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Culinary Artistry
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>
              Signature Creations
            </h2>
            <div className="gold-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="luxury-card group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'brightness(0.7)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)' }} />
                  <div
                    className="absolute top-4 left-4"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.4)', padding: '4px 10px' }}
                  >
                    {dish.tag}
                  </div>
                  <div
                    className="absolute bottom-4 right-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 500, color: '#C9A84C' }}
                  >
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#F5F0E8', marginBottom: '0.5rem' }}>{dish.name}</h3>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: '#8C8070', lineHeight: 1.8, fontWeight: 300 }}>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: '#0D0D0D' }}>
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Acclaim
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: '#F5F0E8' }}>
              Guest Impressions
            </h2>
            <div className="gold-line" style={{ marginTop: '1rem' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="luxury-card p-8 text-center">
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#C9A84C', lineHeight: 1, marginBottom: '1rem', opacity: 0.5 }}>"</div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', fontStyle: 'italic', color: '#EAE3D5', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {t.quote}
                </p>
                <div style={{ width: '30px', height: '1px', background: 'rgba(201,168,76,0.4)', margin: '0 auto 1rem' }} />
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', fontWeight: 500, color: '#C9A84C', letterSpacing: '0.1em' }}>{t.author}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', color: '#8C8070', marginTop: '3px', letterSpacing: '0.08em' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div
            className="relative overflow-hidden text-center py-20 px-8"
            style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'linear-gradient(135deg, rgba(20,20,20,0.9) 0%, rgba(30,20,10,0.9) 100%)' }}
          >
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />
            <div className="relative">
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>
                An Invitation
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>
                Join Us for an Unforgettable Evening
              </h2>
              <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: '#8C8070', lineHeight: 2, maxWidth: '480px', margin: '0 auto 2.5rem', fontWeight: 300 }}>
                Tables are limited. Each evening is an exclusive, intimate experience crafted entirely for you.
              </p>
              <Link to="/reservations" className="btn-gold px-12 py-4 inline-block">
                <span>Reserve Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;