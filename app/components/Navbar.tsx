'use client'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="nav-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(253, 246, 238, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e8d5b8',
          padding: '0 40px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Mobile hamburger */}
        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        {/* Left nav links — desktop */}
        <div className="nav-desktop-links" style={{ gap: '36px', flex: 1 }}>
          {navLinks.slice(0, 2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#5C3317',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link
          href="/"
          className="nav-logo"
          onClick={closeMenu}
          style={{
            textDecoration: 'none',
            textAlign: 'center',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            className="nav-logo-text"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '22px',
              fontWeight: 700,
              color: '#3B1F0A',
              letterSpacing: '0.08em',
              lineHeight: 1,
            }}
          >
            NANDA
            <br />
            <span
              className="nav-logo-sub"
              style={{ fontSize: '11px', letterSpacing: '0.35em', fontWeight: 400, color: '#8B4513' }}
            >
              EMPORIUM
            </span>
          </div>
        </Link>

        {/* Right nav links — desktop */}
        <div
          className="nav-desktop-links"
          style={{ gap: '36px', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          {navLinks.slice(2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#5C3317',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/9779856027044"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#fdf6ee',
              background: '#8B4513',
              padding: '8px 18px',
              textDecoration: 'none',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            WhatsApp
          </a>
        </div>

        {/* Spacer on mobile to balance hamburger */}
        <div className="nav-mobile-toggle" style={{ visibility: 'hidden', pointerEvents: 'none' }} aria-hidden>
          <svg width="24" height="24" />
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((item) => (
          <Link key={item.label} href={item.href} className="nav-mobile-link" onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <a
          href="https://wa.me/9779856027044"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-mobile-cta"
          onClick={closeMenu}
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="nav-spacer" style={{ height: '72px' }} />
    </>
  )
}
