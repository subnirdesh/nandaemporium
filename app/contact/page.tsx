'use client'
import { type ChangeEvent, type FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', occasion: '', message: '', company: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#fdf6ee' }}>

      {/* ── HERO HEADER ── */}
      <section style={{
        background: '#1a0d04',
        padding: '100px 40px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          border: '1px solid #D4A855', borderRadius: '50%', opacity: 0.05,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px', height: '400px',
          border: '1px solid #D4A855', borderRadius: '50%', opacity: 0.04,
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '10px', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: '#D4A855', marginBottom: '24px',
          }}>
            हामीलाई भेट्नुहोस् · Find Us
          </p>
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 88px)',
            fontWeight: 700, color: '#fdf6ee',
            lineHeight: 0.95, margin: '0 0 32px',
            letterSpacing: '-0.02em',
          }}>
            Let's Find Your<br />
            <span style={{ color: '#D4A855' }}>Perfect Outfit</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ height: '1px', width: '60px', background: '#D4A855' }} />
            <div style={{ width: '6px', height: '6px', background: '#D4A855', transform: 'rotate(45deg)' }} />
            <div style={{ height: '1px', width: '60px', background: '#D4A855' }} />
          </div>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '15px', color: '#c4a882',
            lineHeight: 1.8, maxWidth: '500px',
            margin: '0 auto',
          }}>
            Visit us in Pokhara or send a message — we're here to help you find the right look for every occasion and budget.
          </p>
        </div>
      </section>

      {/* Gold bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #8B4513, #D4A855, #8B4513)' }} />

      {/* ── MAIN CONTENT ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'start' }}>

        {/* LEFT — Info */}
        <div>
          {/* Visit Us */}
          <div style={{ marginBottom: '56px' }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B4513', marginBottom: '20px' }}>
              हाम्रो पसल
            </p>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a0d04', margin: '0 0 28px', lineHeight: 1.1 }}>
              Visit Our Store
            </h2>

            {/* Info cards */}
            {[
              {
                label: 'Location',
                np: 'ठेगाना',
                value: 'Pokhara, Gandaki Province, Nepal',
                sub: 'Find us in the heart of Pokhara',
                icon: '◈',
              },
              {
                label: 'Phone & WhatsApp',
                np: 'फोन',
                value: '+977 9856027044',
                sub: 'Call or WhatsApp anytime',
                icon: '◈',
              },
              {
                label: 'Store Hours',
                np: 'समय',
                value: 'Sun – Fri: 9:00 AM – 7:00 PM',
                sub: 'Saturday: 10:00 AM – 5:00 PM',
                icon: '◈',
              },
              {
                label: 'Instagram',
                np: 'इन्स्टाग्राम',
                value: '@nanda_emporium',
                sub: 'Follow us for new arrivals',
                icon: '◈',
              },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', gap: '20px', marginBottom: '28px',
                paddingBottom: '28px', borderBottom: '1px solid #e8d5b8',
              }}>
                <div style={{
                  width: '40px', height: '40px', background: '#1a0d04',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: '#D4A855', fontSize: '16px',
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B4513', margin: '0 0 4px' }}>
                    {item.label} · {item.np}
                  </p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 700, color: '#1a0d04', margin: '0 0 2px' }}>
                    {item.value}
                  </p>
                  <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: '#8B6848', margin: 0 }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick WhatsApp CTA */}
          <a
            href="https://wa.me/9779856027044?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20your%20clothing%20collection."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              background: '#25D366', color: '#fff', padding: '18px 32px',
              textDecoration: 'none', width: '100%',
              fontFamily: 'system-ui, sans-serif', fontSize: '12px',
              letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>

          {/* Quote */}
          <div style={{
            marginTop: '40px',
            borderLeft: '2px solid #D4A855',
            paddingLeft: '24px',
          }}>
            <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#5C3317', lineHeight: 1.6, margin: '0 0 8px' }}>
              "We don't just sell clothes — we help you choose what works best."
            </p>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#8B6848', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
              Nanda Emporium Team
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div>
          <div style={{
            background: '#1a0d04',
            padding: '48px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative corner */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '80px', height: '80px', borderLeft: '1px solid #D4A855', borderBottom: '1px solid #D4A855', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '80px', height: '80px', borderRight: '1px solid #D4A855', borderTop: '1px solid #D4A855', opacity: 0.3 }} />

            {!submitted ? (
              <>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4A855', marginBottom: '16px' }}>
                  सन्देश पठाउनुहोस्
                </p>
                <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#fdf6ee', margin: '0 0 8px', lineHeight: 1.1 }}>
                  Send Us a Message
                </h2>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#c4a882', margin: '0 0 36px', lineHeight: 1.7 }}>
                  Tell us about your occasion and we'll help you find the perfect outfit.
                </p>

                <form onSubmit={submit}>
                  {/* Name */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B6848', display: 'block', marginBottom: '8px' }}>
                      Your Name · तपाईंको नाम *
                    </label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handle}
                      placeholder="Full name"
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.06)',
                        border: '1px solid #3d1f0a', borderBottom: '1px solid #D4A855',
                        color: '#fdf6ee', padding: '14px 16px',
                        fontFamily: 'system-ui, sans-serif', fontSize: '14px',
                        outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B6848', display: 'block', marginBottom: '8px' }}>
                      Email · इमेल *
                    </label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handle}
                      placeholder="you@example.com"
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.06)',
                        border: '1px solid #3d1f0a', borderBottom: '1px solid #D4A855',
                        color: '#fdf6ee', padding: '14px 16px',
                        fontFamily: 'system-ui, sans-serif', fontSize: '14px',
                        outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B6848', display: 'block', marginBottom: '8px' }}>
                      Phone / WhatsApp · फोन *
                    </label>
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handle}
                      placeholder="+977 XXXXXXXXXX"
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.06)',
                        border: '1px solid #3d1f0a', borderBottom: '1px solid #D4A855',
                        color: '#fdf6ee', padding: '14px 16px',
                        fontFamily: 'system-ui, sans-serif', fontSize: '14px',
                        outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Occasion */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B6848', display: 'block', marginBottom: '8px' }}>
                      Occasion · अवसर
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion} onChange={handle}
                      style={{
                        width: '100%', background: '#2a1005',
                        border: '1px solid #3d1f0a', borderBottom: '1px solid #D4A855',
                        color: formData.occasion ? '#fdf6ee' : '#8B6848',
                        padding: '14px 16px',
                        fontFamily: 'system-ui, sans-serif', fontSize: '14px',
                        outline: 'none', boxSizing: 'border-box', cursor: 'pointer',
                      }}
                    >
                      <option value="">Select an occasion...</option>
                      <option value="wedding">Wedding</option>
                      <option value="dashain">Dashain / Tihar</option>
                      <option value="formal">Formal Event</option>
                      <option value="everyday">Everyday Wear</option>
                      <option value="kids">Kids Clothing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '32px' }}>
                    <label style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8B6848', display: 'block', marginBottom: '8px' }}>
                      Message · सन्देश
                    </label>
                    <textarea
                      name="message" rows={4}
                      value={formData.message} onChange={handle}
                      placeholder="Tell us what you're looking for..."
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.06)',
                        border: '1px solid #3d1f0a', borderBottom: '1px solid #D4A855',
                        color: '#fdf6ee', padding: '14px 16px',
                        fontFamily: 'system-ui, sans-serif', fontSize: '14px',
                        outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handle}
                    autoComplete="off"
                    tabIndex={-1}
                    style={{
                      position: 'absolute',
                      left: '-10000px',
                      top: 'auto',
                      width: '1px',
                      height: '1px',
                      overflow: 'hidden',
                    }}
                    aria-hidden="true"
                  />

                  {error ? (
                    <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: '#ffcf9c', margin: '0 0 16px', lineHeight: 1.6 }}>
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%', background: '#D4A855', color: '#1a0d04',
                      padding: '18px', border: 'none', cursor: 'pointer',
                      fontFamily: 'system-ui, sans-serif', fontSize: '11px',
                      letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700,
                      opacity: submitting ? 0.85 : 1,
                    }}
                  >
                    {submitting ? 'Sending…' : 'Send Message →'}
                  </button>

                  <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#5C3D25', textAlign: 'center', margin: '16px 0 0' }}>
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </>
            ) : (
              /* Success state */
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '64px', height: '64px', border: '2px solid #D4A855', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '24px', color: '#D4A855' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#fdf6ee', margin: '0 0 16px' }}>
                  Message Sent!
                </h3>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '14px', color: '#c4a882', lineHeight: 1.8, margin: '0 0 32px' }}>
                  Thank you, {formData.name}! We'll reply to {formData.email} and reach out to you on {formData.phone} within 24 hours.
                </p>
                <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#D4A855' }}>
                  धन्यवाद 🙏
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section style={{ padding: '0 40px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          background: '#f0dfc8',
          border: '1px solid #e8d5b8',
          height: '320px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513'%3E%3Cpath d='M0 0h1v40H0zm40 0h1v40h-1zM0 0v1h40V0zm0 40v1h40v-1z'/%3E%3C/g%3E%3C/svg%3E")` }} />
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B4513', marginBottom: '12px' }}>
            हाम्रो स्थान · Our Location
          </p>
          <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#1a0d04', margin: '0 0 8px' }}>Nanda Emporium</h3>
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '14px', color: '#7A5C3D', margin: '0 0 24px' }}>
            Pokhara, Gandaki Province, Nepal
          </p>
          <a
            href="https://www.google.com/maps/place/Nanda+Emporium/@28.2231859,83.9852785,17z/data=!3m1!4b1!4m6!3m5!1s0x399595061bd9c399:0x588cf61cc859c2cb!8m2!3d28.2231812!4d83.9878534!16s%2Fg%2F11hdw_jmyj?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'system-ui, sans-serif', fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#fdf6ee', background: '#8B4513',
              padding: '12px 28px', textDecoration: 'none',
            }}
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section style={{ background: '#1a0d04', padding: '80px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4A855', marginBottom: '16px' }}>
              सामान्य प्रश्नहरू
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#fdf6ee', margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            {[
              { q: 'Do you have budget and premium options?', a: 'Yes — we cater to all budgets, from affordable everyday wear to premium wedding outfits.' },
              { q: 'Do you have complete wedding collections?', a: 'Absolutely. We have full wedding looks for bride, groom, and family members.' },
              { q: 'Do you have clothing for all ages?', a: 'Yes, from newborns to adults — we are a complete family clothing destination.' },
              { q: 'Can your team help me choose an outfit?', a: 'Yes! Our team is always ready to assist you based on occasion, style, and budget.' },
            ].map((faq) => (
              <div key={faq.q} style={{
                background: '#2a1005',
                padding: '32px',
                borderLeft: '2px solid #D4A855',
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fdf6ee', margin: '0 0 12px', lineHeight: 1.3 }}>
                  {faq.q}
                </h3>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#c4a882', margin: 0, lineHeight: 1.8 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}