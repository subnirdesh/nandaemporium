'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(253, 246, 238, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e8d5b8',
        padding: '0 40px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Left nav links */}
        <div style={{ display: 'flex', gap: '36px', flex: 1 }}>
          {['Home', 'Collection'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
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
              {item}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" style={{ textDecoration: 'none', textAlign: 'center', flex: 1, display: 'flex', justifyContent: 'center' }}>
          {/* Replace the below div with an <img> tag when you have the logo file */}
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#3B1F0A',
            letterSpacing: '0.08em',
            lineHeight: 1,
          }}>
            NANDA<br />
            <span style={{ fontSize: '11px', letterSpacing: '0.35em', fontWeight: 400, color: '#8B4513' }}>EMPORIUM</span>
          </div>
          {/* Once you have your logo, replace the above div with:
          <img src="/logo.png" alt="Nanda Emporium" style={{ height: '48px', objectFit: 'contain' }} />
          Just place logo.png in your /public folder */}
        </Link>

        {/* Right nav links */}
        <div style={{ display: 'flex', gap: '36px', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          {['About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
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
              {item}
            </Link>
          ))}
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/977YOURNUMBER"
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
            }}
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Spacer so content doesnt hide under fixed navbar */}
      <div style={{ height: '72px' }} />
    </>
  )
}