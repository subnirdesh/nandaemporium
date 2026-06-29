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

const values = [
  { title: 'Budget to Premium', desc: 'Wide price range for every customer — quality clothing at every budget.' },
  { title: 'All Ages & Occasions', desc: 'From newborns to adults, everyday wear to grand wedding attire.' },
  { title: 'Wedding Specialists', desc: 'Complete wedding collections for bride, groom, and the entire family.' },
  { title: 'Styling Support', desc: 'Our team helps you choose the right outfit for any occasion or budget.' },
  { title: 'Trusted in Pokhara', desc: 'Over a decade of trusted service to families across Gandaki Province.' },
  { title: 'One-Stop Shop', desc: 'Clothing, accessories, and essentials — everything under one roof.' },
]

const stats = [
  { label: 'Location', value: 'Pokhara', sub: 'Gandaki Province, Nepal' },
  { label: 'Specialty', value: 'Newborn to Wedding', sub: 'Complete family clothing' },
  { label: 'Promise', value: 'Good Style, Fair Price', sub: 'Tradition meets affordability' },
]

export default function About() {
  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#fbf5ec' }}>

      {/* Hero */}
      <section
        className="contact-hero"
        style={{
          background: 'radial-gradient(1100px 540px at 50% 30%, rgba(212,168,85,0.18), transparent 60%), linear-gradient(180deg, #160b04, #0f0703)',
          padding: '100px 40px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', border: '1px solid #D4A855',
          borderRadius: '50%', opacity: 0.05, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: '#D4A855', marginBottom: '24px',
          }}>
            Pokhara, Nepal · Est. 2013
          </p>
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 700, color: '#fdf6ee',
            lineHeight: 0.95, margin: '0 0 32px', letterSpacing: '-0.02em',
          }}>
            Our<br />
            <span style={{ color: '#D4A855' }}>Story</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ height: '1px', width: '60px', background: '#D4A855' }} />
            <div style={{ width: '6px', height: '6px', background: '#D4A855', transform: 'rotate(45deg)' }} />
            <div style={{ height: '1px', width: '60px', background: '#D4A855' }} />
          </div>
          <p style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '15px', color: '#c4a882',
            lineHeight: 1.8, maxWidth: '560px', margin: '0 auto',
          }}>
            A family-owned clothing destination trusted by Pokhara families — where tradition, modern fashion, and affordability come together.
          </p>
        </div>
      </section>

      <div style={{ height: '3px', background: 'linear-gradient(90deg, #8B4513, #D4A855, #8B4513)' }} />

      {/* Story split */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="section-pad-x section-pad-y-lg"
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
        <div className="about-split">
          <motion.div variants={fadeUp}>
            <div className="image-placeholder" style={{
              aspectRatio: '4 / 5', background: '#f0dfc8', border: '1px solid #e8d5b8',
              borderRadius: 0,
            }}>
              <div style={{
                width: 64, height: 64, border: '1px solid #D4A855', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#D4A855', fontSize: 24, position: 'relative', zIndex: 1,
              }}>
                ◈
              </div>
              <p style={{
                fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#8B6848', margin: 0, position: 'relative', zIndex: 1,
              }}>
                Store photo
              </p>
              <p style={{
                fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: '#b89a7a',
                margin: 0, position: 'relative', zIndex: 1,
              }}>
                Photo coming soon
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p style={{
              fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '20px',
            }}>
              Who we are
            </p>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#1a0d04',
              lineHeight: 1.15, margin: '0 0 28px',
            }}>
              Pokhara&apos;s Complete<br />Clothing Destination
            </h2>
            <p style={{
              fontFamily: 'system-ui, sans-serif', fontSize: '16px', color: '#7A5C3D',
              lineHeight: 1.9, margin: '0 0 24px',
            }}>
              Nanda Emporium is Pokhara&apos;s complete clothing destination — from newborn essentials to grand wedding attire. We bring together tradition, modern fashion, and affordability under one roof.
            </p>
            <p style={{
              fontFamily: 'system-ui, sans-serif', fontSize: '16px', color: '#7A5C3D',
              lineHeight: 1.9, margin: '0 0 32px',
            }}>
              Good style, fair pricing, and a reliable shopping experience — that&apos;s what families across Gandaki Province have come to expect from us. We don&apos;t just sell clothes; we help you choose what works best.
            </p>
            <p style={{
              fontSize: '22px', fontStyle: 'italic', color: '#8B4513', margin: 0,
            }}>
              परम्परा र सौन्दर्यको संगम
            </p>
            <p style={{
              fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: '#8B6848',
              margin: '8px 0 0', letterSpacing: '0.05em',
            }}>
              Where tradition meets beauty
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="section-pad-x"
        style={{ paddingBottom: '80px', maxWidth: '1100px', margin: '0 auto' }}
      >
        <div className="about-stats">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardReveal}
              style={{
                background: 'linear-gradient(160deg, #160b04, #2a1508)',
                padding: '40px 32px', textAlign: 'center',
              }}
            >
              <p style={{
                fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#D4A855', margin: '0 0 12px',
              }}>
                {stat.label}
              </p>
              <p style={{
                fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#fdf6ee',
                margin: '0 0 8px', lineHeight: 1.2,
              }}>
                {stat.value}
              </p>
              <p style={{
                fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: '#c4a882', margin: 0,
              }}>
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-pad-x section-pad-y-lg"
        style={{ background: '#f5e6d0' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{
                fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
                color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '16px',
              }}>
                What we stand for
              </p>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#1a0d04', margin: 0,
              }}>
                Why Families Choose Us
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="why-us-grid"
          >
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={cardReveal}
                style={{
                  background: '#fdf6ee', border: '1px solid #e8d5b8', padding: '32px',
                }}
              >
                <div style={{ height: '2px', width: 32, background: '#D4A855', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1a0d04', margin: '0 0 6px' }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#7A5C3D',
                  margin: 0, lineHeight: 1.8,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission quote */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="section-pad-x section-pad-y-md"
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.div variants={fadeUp} style={{
          borderLeft: '2px solid #D4A855', paddingLeft: '32px', textAlign: 'left',
        }}>
          <p style={{
            fontSize: 'clamp(24px, 4vw, 32px)', fontStyle: 'italic', color: '#1a0d04',
            lineHeight: 1.5, margin: '0 0 16px',
          }}>
            &ldquo;Premium ethnic and traditional clothing for every age and occasion. Trusted by families in Pokhara for over a decade.&rdquo;
          </p>
          <p style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#8B6848',
            letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0,
          }}>
            — Nanda Emporium
          </p>
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="section-pad-x section-pad-y-lg"
        style={{
          background: 'radial-gradient(900px 500px at 50% 30%, rgba(212,168,85,0.16), transparent 60%), linear-gradient(180deg, #160b04, #0f0703)',
          textAlign: 'center',
        }}
      >
        <motion.p variants={fadeUp} style={{
          fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.4em',
          textTransform: 'uppercase', color: '#D4A855', marginBottom: '20px',
        }}>
          Come visit
        </motion.p>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: '#fdf6ee',
          lineHeight: 1.15, margin: '0 0 20px',
        }}>
          Experience Nanda Emporium<br />
          <span style={{ color: '#D4A855' }}>in Person</span>
        </motion.h2>
        <motion.p variants={fadeUp} style={{
          fontFamily: 'system-ui, sans-serif', fontSize: '15px', color: '#c4a882',
          lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px',
        }}>
          Walk through our collections, meet our team, and find the perfect outfit for your next occasion.
        </motion.p>
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/collection" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#1a0d04', background: '#D4A855',
            padding: '16px 36px', textDecoration: 'none', fontWeight: 600,
          }}>
            View Collections
          </Link>
          <Link href="/contact" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#D4A855', border: '1px solid #D4A855',
            padding: '16px 36px', textDecoration: 'none',
          }}>
            Contact Us
          </Link>
        </motion.div>
      </motion.section>

    </main>
  )
}
