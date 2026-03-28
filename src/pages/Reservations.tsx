import { useState } from 'react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '19:00',
    guests: '2', occasion: 'none', specialRequests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', date: '', time: '19:00', guests: '2', occasion: 'none', specialRequests: '' });
    }, 4000);
  };

  const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  const occasions = [
    { value: 'none', label: 'No Special Occasion' },
    { value: 'birthday', label: 'Birthday Celebration' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'business', label: 'Business Dinner' },
    { value: 'celebration', label: 'Celebration' },
  ];
  const today = new Date().toISOString().split('T')[0];

  const labelStyle = { fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#8C8070', display: 'block', marginBottom: '0.5rem' };
  const inputStyle = { width: '100%', padding: '12px 16px', borderRadius: 0 };

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20 text-center">
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>An Invitation</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>Reserve Your Table</h1>
          <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: '#8C8070', lineHeight: 2, maxWidth: '480px', margin: '0 auto', fontWeight: 300 }}>
            Tables at Aurum & Noir are limited. We invite you to secure your place for an evening of extraordinary cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 luxury-card p-10" style={{ background: 'rgba(14,14,14,0.9)' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '2rem' }}>Reservation Details</h2>

            {submitted ? (
              <div className="text-center py-12">
                <div style={{ width: '64px', height: '64px', border: '1px solid #C9A84C', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#C9A84C', fontSize: '1.5rem' }}>✓</span>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>Reservation Received</h3>
                <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#8C8070', lineHeight: 2, fontWeight: 300 }}>
                  A confirmation has been sent to <span style={{ color: '#C9A84C' }}>{formData.email}</span>.<br />
                  We look forward to welcoming you on {formData.date} at {formData.time}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="luxury-input" style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="luxury-input" style={inputStyle} placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="luxury-input" style={inputStyle} placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label style={labelStyle}>Guests *</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} required className="luxury-input" style={inputStyle}>
                      {guestOptions.map(n => <option key={n} value={n}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Date *</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required min={today} className="luxury-input" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Time *</label>
                    <select name="time" value={formData.time} onChange={handleChange} required className="luxury-input" style={inputStyle}>
                      {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Occasion</label>
                  <select name="occasion" value={formData.occasion} onChange={handleChange} className="luxury-input" style={inputStyle}>
                    {occasions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Special Requests</label>
                  <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={4} className="luxury-input" style={{ ...inputStyle, resize: 'none' }} placeholder="Allergies, seating preferences, dietary requirements..." />
                </div>
                <button type="submit" className="btn-gold w-full py-4">
                  <span>Confirm Reservation</span>
                </button>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', color: '#4A4040', textAlign: 'center', letterSpacing: '0.05em' }}>
                  For same-day reservations, please call (555) 123-4567.
                </p>
              </form>
            )}
          </div>

          {/* Info Panels */}
          <div className="lg:col-span-2 space-y-6">
            <div className="luxury-card p-8">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#C9A84C', marginBottom: '1.25rem' }}>Hours</h3>
              <ul style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: '#8C8070', lineHeight: 2.4, fontWeight: 300 }}>
                <li className="flex justify-between"><span>Mon – Thu</span><span style={{ color: '#F5F0E8' }}>5pm – 10pm</span></li>
                <li className="flex justify-between"><span>Fri – Sat</span><span style={{ color: '#F5F0E8' }}>5pm – 11pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span style={{ color: '#F5F0E8' }}>4pm – 9pm</span></li>
              </ul>
            </div>

            <div className="luxury-card p-8">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#C9A84C', marginBottom: '1.25rem' }}>Private Dining</h3>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: '#8C8070', lineHeight: 1.9, fontWeight: 300, marginBottom: '1.25rem' }}>
                Our private dining rooms accommodate groups of 10 to 50. Bespoke menus crafted on request.
              </p>
              <button className="btn-outline-gold w-full py-3">Enquire</button>
            </div>

            <div className="luxury-card p-8">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#C9A84C', marginBottom: '1.25rem' }}>Cancellation</h3>
              <ul style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', color: '#8C8070', lineHeight: 2, fontWeight: 300 }} className="space-y-2">
                <li>· 24-hour notice to avoid a $25 per person fee</li>
                <li>· Groups of 8+ require 48-hour notice</li>
                <li>· Late arrivals beyond 15 minutes may forfeit the reservation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;