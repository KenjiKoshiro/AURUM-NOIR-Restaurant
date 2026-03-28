import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Alexandre Dubois',
      role: 'Executive Chef',
      bio: 'Three Michelin stars and 20 years of French culinary mastery. Alexandre brings poetic precision to every plate.',
      initials: 'AD',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Pastry Chef',
      bio: 'Trained in Paris and Tokyo, Sofia transforms sugar and chocolate into breathtaking sculpture.',
      initials: 'SR',
    },
    {
      name: 'Marcus Chen',
      role: 'Head Sommelier',
      bio: 'Curator of our 500-bottle cellar, Marcus orchestrates pairings that elevate each course.',
      initials: 'MC',
    },
    {
      name: 'Elena Petrova',
      role: 'Restaurant Director',
      bio: 'Elena ensures every guest receives flawless, unobtrusive hospitality from arrival to farewell.',
      initials: 'EP',
    },
  ];

  const milestones = [
    { year: '2015', event: 'Aurum & Noir founded by Chef Alexandre Dubois' },
    { year: '2017', event: 'First Michelin Star awarded' },
    { year: '2019', event: 'Expanded to current location with garden terrace' },
    { year: '2021', event: '"Best Fine Dining Experience" — National Gastronomy Awards' },
    { year: '2023', event: 'Second Michelin Star awarded' },
  ];

  const stats = [
    { value: '500+', label: 'Wine Selections' },
    { value: '2', label: 'Michelin Stars' },
    { value: '9', label: 'Years of Excellence' },
    { value: '50+', label: 'Local Producers' },
  ];

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '55vh' }}>
        <div className="absolute inset-0" style={{ backgroundImage: "url('/about-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.2)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, #0A0A0A 100%)' }} />
        <div className="container relative mx-auto px-6 flex items-end pb-20" style={{ minHeight: '55vh' }}>
          <div className="max-w-2xl animate-fade-up">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Our Story
            </div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: '#F5F0E8', lineHeight: 1.1 }}>
              Crafted in <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>Darkness,</em><br />
              Finished in Gold
            </h1>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>Philosophy</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '0.75rem' }}>A Philosophy of Restraint</h2>
              <div className="gold-line" style={{ margin: '0 0 2rem 0' }} />
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: '#8C8070', lineHeight: 2.2, fontWeight: 300 }} className="space-y-5">
                <p>At Aurum & Noir, we believe that true luxury is felt, not announced. Each dish is a quiet statement — ingredients chosen at the peak of their season, techniques refined over decades, presentations that honour rather than overwhelm.</p>
                <p>We source directly from small farms, fishermen, and artisans we trust. Our menu breathes with the seasons, never fighting nature but dancing with it.</p>
                <p>Beyond the food, we cultivate an atmosphere of warmth beneath our signature darkness — each guest is known, each evening unrepeatable.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="luxury-card p-10 text-center">
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 400, color: '#C9A84C' }}>{stat.value}</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C8070', marginTop: '0.5rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ background: '#0D0D0D' }}>
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>The Artisans</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: '#F5F0E8' }}>Meet the Team</h2>
            <div className="gold-line" style={{ marginTop: '1rem' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="luxury-card p-8 text-center group">
                <div
                  className="mx-auto mb-6 flex items-center justify-center"
                  style={{ width: '80px', height: '80px', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%', transition: 'border-color 0.3s ease' }}
                >
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#C9A84C' }}>{member.initials}</span>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, color: '#F5F0E8', marginBottom: '0.25rem' }}>{member.name}</h3>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1rem' }}>{member.role}</div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: '#8C8070', lineHeight: 1.8, fontWeight: 300 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>Journey</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: '#F5F0E8' }}>Our Milestones</h2>
            <div className="gold-line" style={{ marginTop: '1rem' }} />
          </div>
          <div className="max-w-2xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 items-start" style={{ paddingBottom: '2rem', borderLeft: '1px solid rgba(201,168,76,0.15)', paddingLeft: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-5px', top: '4px', width: '9px', height: '9px', borderRadius: '50%', background: '#C9A84C', boxShadow: '0 0 12px rgba(201,168,76,0.4)' }} />
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 500, color: '#C9A84C', minWidth: '52px' }}>{m.year}</div>
                <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#8C8070', lineHeight: 1.8, fontWeight: 300, paddingTop: '4px' }}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden text-center py-20 px-8" style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'linear-gradient(135deg, rgba(20,20,20,0.9), rgba(30,20,10,0.9))' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />
            <div className="relative">
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1.5rem' }}>
                Experience Our Story Firsthand
              </h2>
              <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
              <Link to="/reservations" className="btn-gold px-12 py-4 inline-block">
                <span>Make a Reservation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;