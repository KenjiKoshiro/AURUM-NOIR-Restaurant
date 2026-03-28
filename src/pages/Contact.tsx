import { useState } from 'react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  const departments = [
    { name: 'General', email: 'hello@aurumetnoir.com', phone: '(555) 123-4567' },
    { name: 'Reservations', email: 'reserve@aurumetnoir.com', phone: '(555) 123-4568' },
    { name: 'Private Events', email: 'events@aurumetnoir.com', phone: '(555) 123-4569' },
    { name: 'Press & Media', email: 'press@aurumetnoir.com', phone: '(555) 123-4570' },
  ];

  const faqs = [
    { question: 'What is the dress code?', answer: 'Smart casual to formal. We recommend guests embrace the occasion — the dining room has its own quiet elegance.' },
    { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely. Please note restrictions at booking and our chef will craft suitable alternatives without compromise.' },
    { question: 'Is valet parking available?', answer: 'Yes, complimentary valet is available for all dining guests from 4:30pm.' },
    { question: 'Can I bring my own wine?', answer: 'We welcome personal cellar selections at a corkage fee of $45 per bottle, maximum two per table.' },
  ];

  const labelStyle = { fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#8C8070', display: 'block', marginBottom: '0.5rem' };
  const inputStyle = { width: '100%', padding: '12px 16px', borderRadius: 0 };

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <div className="container mx-auto px-6 py-24">
        <div className="mb-20 text-center">
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '1rem' }}>Get in Touch</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>Contact Us</h1>
          <div className="gold-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="luxury-card p-10">
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '2rem' }}>Send a Message</h2>

            {contactSubmitted ? (
              <div className="text-center py-12">
                <div style={{ width: '60px', height: '60px', border: '1px solid #C9A84C', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#C9A84C', fontSize: '1.3rem' }}>✓</span>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, color: '#F5F0E8', marginBottom: '1rem' }}>Message Sent</h3>
                <div className="gold-line" style={{ marginBottom: '1rem' }} />
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: '#8C8070', lineHeight: 2 }}>We will respond within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} required className="luxury-input" style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} required className="luxury-input" style={inputStyle} placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Subject *</label>
                  <input type="text" name="subject" value={contactForm.subject} onChange={handleContactChange} required className="luxury-input" style={inputStyle} placeholder="How can we help?" />
                </div>
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" value={contactForm.message} onChange={handleContactChange} required rows={5} className="luxury-input" style={{ ...inputStyle, resize: 'none' }} placeholder="Your message..." />
                </div>
                <button type="submit" className="btn-gold w-full py-4">
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="luxury-card p-8">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#C9A84C', marginBottom: '1.5rem' }}>Departments</h3>
              <div className="space-y-6">
                {departments.map((d, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div style={{ width: '36px', height: '36px', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#C9A84C' }}>{d.name[0]}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.1em', color: '#F5F0E8', textTransform: 'uppercase', marginBottom: '4px' }}>{d.name}</div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', color: '#8C8070', lineHeight: 2, fontWeight: 300 }}>
                        <div>{d.email}</div>
                        <div>{d.phone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-card p-8">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#C9A84C', marginBottom: '1.5rem' }}>FAQ</h3>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <details key={i} style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                    <summary style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', letterSpacing: '0.06em', color: '#EAE3D5', padding: '12px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {faq.question}
                      <span style={{ color: '#C9A84C', fontSize: '0.8rem' }}>+</span>
                    </summary>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: '#8C8070', lineHeight: 1.9, fontWeight: 300, paddingBottom: '12px' }}>
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;