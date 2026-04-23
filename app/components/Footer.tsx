import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1a0d04', color: '#f5e6d0' }}>

      {/* Top decorative bar */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #8B4513, #D4A855, #8B4513)' }} />

      {/* Main footer content */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '64px 40px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '48px',
      }}>

        {/* Column 1 — Brand */}
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '28px',
            fontWeight: 700,
            color: '#fdf6ee',
            letterSpacing: '0.05em',
            marginBottom: '4px',
          }}>
            NANDA
          </div>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.35em',
            color: '#D4A855',
            marginBottom: '20px',
          }}>
            EMPORIUM — POKHARA
          </div>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '13px',
            color: '#b89a7a',
            lineHeight: 1.8,
            margin: '0 0 24px',
          }}>
            From newborn to wedding — premium ethnic and traditional clothing for every occasion. Trusted in Pokhara since 2003.
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '16px',
            fontStyle: 'italic',
            color: '#D4A855',
          }}>
            परम्परा र सौन्दर्यको संगम
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#D4A855',
            marginBottom: '24px',
          }}>
            Explore
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Home', href: '/' },
              { label: "Women's Collection", href: '/collection' },
              { label: "Men's Collection", href: '/collection' },
              { label: 'Wedding Wear', href: '/collection' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '13px',
                  color: '#b89a7a',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#D4A855',
            marginBottom: '24px',
          }}>
            Visit Us
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#8B6848', margin: '0 0 4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Location</p>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#b89a7a', margin: 0, lineHeight: 1.7 }}>
                Pokhara, Gandaki Province<br />Nepal
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#8B6848', margin: '0 0 4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Phone / WhatsApp</p>
              <a href="tel:+9779856027044" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#b89a7a', textDecoration: 'none' }}>
                +977 9856027044
              </a>
            </div>
            <div>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#8B6848', margin: '0 0 4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Hours</p>
              <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#b89a7a', margin: 0, lineHeight: 1.7 }}>
                Sun – Fri: 9:30 AM – 7:00 PM<br />
                Saturday: 10:00 AM – 7:00 PM
              </p>
            </div>
            {/* Social */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <a href="https://instagram.com/nanda_emporium" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.15em', color: '#D4A855', textDecoration: 'none', textTransform: 'uppercase' }}>
                Instagram
              </a>
              <a href="https://wa.me/9779856027044" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.15em', color: '#D4A855', textDecoration: 'none', textTransform: 'uppercase' }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid #2a1508',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#5C3D25', margin: 0 }}>
          © {new Date().getFullYear()} Nanda Emporium. All rights reserved.
        </p>
        <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#5C3D25', margin: 0 }}>
          Pokhara, Nepal
        </p>
      </div>
    </footer>
  )
}