'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: i * 0.12 },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

function MarqueeStrip() {
  return (
    <div style={{ background: '#D4A855', padding: '14px 0', overflow: 'hidden' }}>
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap', gap: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {[1, 2].map((n) => (
          <p
            key={n}
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#1a0d04',
              margin: 0,
              fontWeight: 600,
              paddingRight: '48px',
              flexShrink: 0,
            }}
          >
            Women's Wear &nbsp;·&nbsp; Men's Wear &nbsp;·&nbsp; Kids Wear &nbsp;·&nbsp; Wedding Collection &nbsp;·&nbsp; Sarees &nbsp;·&nbsp; Lehengas &nbsp;·&nbsp; Sherwanis &nbsp;·&nbsp; Suits &nbsp;·&nbsp; Accessories &nbsp;·&nbsp; Newborn to Wedding
          </p>
        ))}
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#fbf5ec' }}>

      {/* ── HERO ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          minHeight: '92vh',
          background: 'radial-gradient(1200px 600px at 50% 30%, rgba(212,168,85,0.18), transparent 60%), linear-gradient(180deg, #160b04, #0f0703)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A855' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.523-4.477-10-10-10S0 14.477 0 20s4.477 10 10 10 10-4.477 10-10zm10 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#D4A855',
              marginBottom: '32px',
            }}
          >
            Pokhara, Nepal · Est. 2013 · Nanda Emporium
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            style={{
              fontSize: 'clamp(52px, 10vw, 96px)',
              fontWeight: 700,
              color: '#fdf6ee',
              lineHeight: 0.95,
              margin: '0 0 32px',
              letterSpacing: '-0.02em',
            }}
          >
            From Newborn<br />
            <span style={{ color: '#D4A855' }}>to Wedding</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '32px 0' }}
          >
            <div style={{ height: '1px', width: '60px', background: '#D4A855' }} />
            <motion.div
              animate={{ rotate: 45 }}
              style={{ width: '6px', height: '6px', background: '#D4A855' }}
            />
            <div style={{ height: '1px', width: '60px', background: '#D4A855' }} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '15px',
              color: '#c4a882',
              lineHeight: 1.8,
              marginBottom: '48px',
              maxWidth: '520px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Premium ethnic and traditional clothing for every age and occasion. Trusted by families in Pokhara for over a decade.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link href="/collection" style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1a0d04',
              background: '#D4A855',
              padding: '16px 36px',
              textDecoration: 'none',
              fontWeight: 600,
              boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
            }}>
              Explore Collections
            </Link>
            <Link href="/contact" style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4A855',
              border: '1px solid #D4A855',
              padding: '16px 36px',
              textDecoration: 'none',
              background: 'rgba(212,168,85,0.06)',
            }}>
              Visit Our Store
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <motion.div
            animate={{ height: [48, 64, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, #D4A855)' }}
          />
          <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.3em', color: '#8B6848', textTransform: 'uppercase' }}>Scroll</p>
        </motion.div>
      </motion.section>

      {/* ── MARQUEE STRIP ── */}
      <MarqueeStrip />

      {/* ── INTRO STATEMENT ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
        style={{ padding: '100px 40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.p
          variants={fadeUp}
          style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '24px' }}
        >
          Our Story
        </motion.p>
        <motion.h2
          variants={fadeUp}
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#1a0d04', lineHeight: 1.15, margin: '0 0 32px' }}
        >
          Everything You Need,<br />All in One Place
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{ fontFamily: 'system-ui, sans-serif', fontSize: '16px', color: '#7A5C3D', lineHeight: 1.9, maxWidth: '640px', margin: '0 auto 40px' }}
        >
          Nanda Emporium is Pokhara's complete clothing destination — from newborn essentials to grand wedding attire. We bring together tradition, modern fashion, and affordability under one roof. Good style, fair pricing, and a reliable shopping experience.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link href="/about" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#8B4513', textDecoration: 'none',
            borderBottom: '1px solid #8B4513', paddingBottom: '2px',
          }}>
            Read Our Story
          </Link>
        </motion.div>
      </motion.section>

      {/* ── COLLECTIONS GRID ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
        style={{ padding: '0 40px 100px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '16px' }}>Collections</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#1a0d04', margin: 0 }}>
            Our Collections
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px' }}>
          <motion.div variants={cardReveal} style={{ gridRow: 'span 2' }}>
            <Link href="/collection" style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'linear-gradient(160deg, #2d1205, #5C2D0A)',
                height: '100%',
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', top: '40px', right: '40px', width: '80px', height: '80px', border: '1px solid #D4A855', borderRadius: '50%', opacity: 0.3 }}
                />
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  style={{ position: 'absolute', top: '55px', right: '55px', width: '50px', height: '50px', border: '1px solid #D4A855', borderRadius: '50%', opacity: 0.4 }}
                />
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#D4A855', textTransform: 'uppercase', margin: '0 0 12px' }}>Category</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 700, color: '#fdf6ee', margin: '0 0 12px', lineHeight: 1.1 }}>Women's Collection</h3>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#c4a882', margin: '0 0 24px', lineHeight: 1.7 }}>Sarees, Lehengas, Wedding Wear, Shawls, Pashmina & ethnic outfits</p>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em', color: '#D4A855', textTransform: 'uppercase' }}>View Collection →</span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={cardReveal}>
            <Link href="/collection" style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'linear-gradient(160deg, #3d1a0a, #6B3520)',
                minHeight: '245px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '32px',
              }}>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.3em', color: '#D4A855', textTransform: 'uppercase', margin: '0 0 8px' }}>Category</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 700, color: '#fdf6ee', margin: '0 0 8px' }}>Men's Collection</h3>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: '#c4a882', margin: '0 0 16px' }}>Suits, Kurta, Sherwani, Waistcoats & formal wear</p>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em', color: '#D4A855', textTransform: 'uppercase' }}>View →</span>
              </div>
            </Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            <motion.div variants={cardReveal}>
              <Link href="/collection" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'linear-gradient(160deg, #1a0a05, #4a2010)',
                  minHeight: '245px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                }}>
                  <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.2em', color: '#D4A855', textTransform: 'uppercase', margin: '0 0 6px' }}>Category</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 700, color: '#fdf6ee', margin: '0 0 16px' }}>Kids</h3>
                  <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.15em', color: '#D4A855', textTransform: 'uppercase' }}>View →</span>
                </div>
              </Link>
            </motion.div>
            <motion.div variants={cardReveal}>
              <Link href="/collection" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'linear-gradient(160deg, #2a1508, #8B4513)',
                  minHeight: '245px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                }}>
                  <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.2em', color: '#D4A855', textTransform: 'uppercase', margin: '0 0 6px' }}>Category</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 700, color: '#fdf6ee', margin: '0 0 16px' }}>Wedding</h3>
                  <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.15em', color: '#D4A855', textTransform: 'uppercase' }}>View →</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── WHY US ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{ background: '#f5e6d0', padding: '100px 40px' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '16px' }}>Why us</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#1a0d04', margin: 0 }}>Why Nanda Emporium</h2>
            </motion.div>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}
          >
            {[
              { title: 'Budget to Premium', desc: 'Wide price range for every customer — quality clothing at every budget.' },
              { title: 'All Ages & Occasions', desc: 'From newborns to adults, everyday wear to grand wedding attire.' },
              { title: 'Wedding Specialists', desc: 'Complete wedding collections for bride, groom, and the entire family.' },
              { title: 'Styling Support', desc: 'Our team helps you choose the right outfit for any occasion or budget.' },
              { title: 'Trusted in Pokhara', desc: 'Over a decade of trusted service to families across Gandaki Province.' },
              { title: 'One-Stop Shop', desc: 'Clothing, accessories, and essentials — everything under one roof.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardReveal}
                style={{
                  background: '#fdf6ee',
                  border: '1px solid #e8d5b8',
                  padding: '32px',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  style={{ height: '2px', background: '#D4A855', marginBottom: '20px' }}
                />
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1a0d04', margin: '0 0 6px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#7A5C3D', margin: 0, lineHeight: 1.8 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── WEDDING CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
        style={{
          background: 'radial-gradient(900px 500px at 50% 30%, rgba(212,168,85,0.16), transparent 60%), linear-gradient(180deg, #160b04, #0f0703)',
          padding: '100px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px', height: '500px',
            border: '1px solid #D4A855',
            borderRadius: '50%', opacity: 0.06,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D4A855', marginBottom: '24px' }}
          >
            Wedding collection
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 700, color: '#fdf6ee', lineHeight: 1.1, margin: '0 0 24px' }}
          >
            Complete Wedding<br />
            <span style={{ color: '#D4A855' }}>Looks for Every Ceremony</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px', color: '#c4a882', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto 48px' }}
          >
            From engagement to reception — traditional styles to modern designs for bride, groom, and the entire family. Find the perfect outfit for every moment of your big day.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/collection" style={{
              fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#1a0d04', background: '#D4A855',
              padding: '18px 48px', textDecoration: 'none', fontWeight: 600,
            }}>
              View Wedding Collection
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── VISIT US ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
        style={{ padding: '100px 40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.p
          variants={fadeUp}
          style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '16px' }}
        >
          Visit us
        </motion.p>
        <motion.h2
          variants={fadeUp}
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#1a0d04', margin: '0 0 24px' }}
        >
          Come Visit Us in Pokhara
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px', color: '#7A5C3D', lineHeight: 1.8, marginBottom: '48px' }}
        >
          Experience our full collection in person. Our team is ready to help you find the perfect outfit for any occasion, style, and budget.
        </motion.p>
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link href="/contact" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#fdf6ee', background: '#8B4513',
            padding: '16px 36px', textDecoration: 'none', fontWeight: 600,
          }}>
            Get Directions
          </Link>
          <a href="https://wa.me/9779856027044" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#8B4513', border: '1px solid #8B4513',
            padding: '16px 36px', textDecoration: 'none',
          }}>
            WhatsApp Us
          </a>
        </motion.div>
      </motion.section>

    </main>
  )
}
