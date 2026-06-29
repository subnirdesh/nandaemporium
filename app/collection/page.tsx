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

const collections = [
  {
    title: "Women's Collection",
    tag: 'For Her',
    desc: 'Elegant ethnic and traditional wear for every occasion — from everyday sarees to grand wedding lehengas.',
    items: ['Sarees', 'Lehengas', 'Wedding Wear', 'Shawls', 'Pashmina', 'Ethnic Outfits'],
    gradient: 'linear-gradient(160deg, #2d1205, #5C2D0A)',
  },
  {
    title: "Men's Collection",
    tag: 'For Him',
    desc: 'Sharp formal and traditional styles — suits for the office, kurta sets for festivals, sherwanis for weddings.',
    items: ['Suits', 'Kurta', 'Sherwani', 'Waistcoats', 'Formal Wear', 'Traditional Sets'],
    gradient: 'linear-gradient(160deg, #3d1a0a, #6B3520)',
  },
  {
    title: 'Kids Collection',
    tag: 'Little Ones',
    desc: 'Adorable outfits for newborns through teens — comfortable, colourful, and perfect for every celebration.',
    items: ['Newborn', 'Toddler Wear', 'Kids Ethnic', 'Party Wear', 'School Formals', 'Festival Outfits'],
    gradient: 'linear-gradient(160deg, #1a0a05, #4a2010)',
  },
  {
    title: 'Wedding Collection',
    tag: 'Big Day',
    desc: 'Complete wedding looks for bride, groom, and the entire family — from engagement to reception.',
    items: ['Bridal Lehengas', 'Groom Sherwanis', 'Family Sets', 'Engagement Wear', 'Reception Looks', 'Ceremony Outfits'],
    gradient: 'linear-gradient(160deg, #2a1508, #8B4513)',
  },
  {
    title: 'Accessories',
    tag: 'Finishing Touch',
    desc: 'Complete your look with curated accessories — the details that make every outfit shine.',
    items: ['Jewellery', 'Bags', 'Footwear', 'Dupattas', 'Belts', 'Stoles'],
    gradient: 'linear-gradient(160deg, #160b04, #3d2010)',
  },
  {
    title: 'Festival & Occasion',
    tag: 'Celebrate',
    desc: 'Outfits for Dashain, Tihar, weddings, and every special moment in Nepali family life.',
    items: ['Dashain', 'Tihar', 'Weddings', 'Formal Events', 'Everyday Wear', 'Custom Styling'],
    gradient: 'linear-gradient(160deg, #1a0d04, #5C3317)',
  },
]

const occasions = [
  'Weddings', 'Dashain', 'Tihar', 'Engagements', 'Formal Events', 'Everyday Wear', 'Newborn', 'Receptions',
]

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="image-placeholder" style={{ background: 'rgba(26, 13, 4, 0.04)' }}>
      <div style={{
        width: 48, height: 48, border: '1px solid #D4A855', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#D4A855', fontSize: 20, position: 'relative', zIndex: 1,
      }}>
        ◈
      </div>
      <p style={{
        fontFamily: 'system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.25em',
        textTransform: 'uppercase', color: '#8B6848', margin: 0, position: 'relative', zIndex: 1,
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: '#b89a7a',
        margin: 0, position: 'relative', zIndex: 1,
      }}>
        Photo coming soon
      </p>
    </div>
  )
}

export default function Collection() {
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
          width: '600px', height: '600px', border: '1px solid #D4A855',
          borderRadius: '50%', opacity: 0.05, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: '#D4A855', marginBottom: '24px',
          }}>
            Nanda Emporium · Pokhara
          </p>
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 700, color: '#fdf6ee',
            lineHeight: 0.95, margin: '0 0 32px', letterSpacing: '-0.02em',
          }}>
            Our<br />
            <span style={{ color: '#D4A855' }}>Collections</span>
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
            From newborn essentials to grand wedding attire — premium ethnic and traditional clothing for every age, occasion, and budget.
          </p>
        </div>
      </section>

      <div style={{ height: '3px', background: 'linear-gradient(90deg, #8B4513, #D4A855, #8B4513)' }} />

      {/* Intro */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="section-pad-x section-pad-y-md"
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
      >
        <motion.p variants={fadeUp} style={{
          fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '20px',
        }}>
          Browse by category
        </motion.p>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#1a0d04',
          lineHeight: 1.15, margin: '0 0 24px',
        }}>
          Everything You Need,<br />All in One Place
        </motion.h2>
        <motion.p variants={fadeUp} style={{
          fontFamily: 'system-ui, sans-serif', fontSize: '16px', color: '#7A5C3D',
          lineHeight: 1.9, margin: 0,
        }}>
          Visit our store in Pokhara to explore the full range in person. Our team is ready to help you find the right outfit for any occasion.
        </motion.p>
      </motion.section>

      {/* Catalog grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="section-pad-x"
        style={{ paddingBottom: '100px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="collection-catalog-grid">
          {collections.map((cat) => (
            <motion.article key={cat.title} variants={cardReveal} style={{ background: '#fdf6ee', border: '1px solid #e8d5b8' }}>
              <ImagePlaceholder label={cat.tag} />
              <div className="collection-card-body" style={{ background: cat.gradient }}>
                <p style={{
                  fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.3em',
                  color: '#D4A855', textTransform: 'uppercase', margin: '0 0 10px',
                }}>
                  {cat.tag}
                </p>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 700, color: '#fdf6ee', margin: '0 0 12px', lineHeight: 1.1,
                }}>
                  {cat.title}
                </h3>
                <p style={{
                  fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#c4a882',
                  margin: '0 0 20px', lineHeight: 1.7,
                }}>
                  {cat.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.items.map((item) => (
                    <span key={item} style={{
                      fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.08em',
                      color: '#D4A855', border: '1px solid rgba(212,168,85,0.35)',
                      padding: '6px 12px', textTransform: 'uppercase',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Occasions */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="section-pad-x section-pad-y-md"
        style={{ background: '#f5e6d0', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.p variants={fadeUp} style={{
            fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#8B4513', fontFamily: 'system-ui, sans-serif', marginBottom: '16px',
          }}>
            Occasions we dress for
          </motion.p>
          <motion.h2 variants={fadeUp} style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#1a0d04', margin: '0 0 32px',
          }}>
            For Every Celebration
          </motion.h2>
          <motion.div variants={fadeUp} className="occasion-tags">
            {occasions.map((occ) => (
              <span key={occ} style={{
                fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#5C3317', background: '#fdf6ee',
                border: '1px solid #e8d5b8', padding: '12px 20px',
              }}>
                {occ}
              </span>
            ))}
          </motion.div>
        </div>
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
          See it in person
        </motion.p>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: '#fdf6ee',
          lineHeight: 1.15, margin: '0 0 20px',
        }}>
          Visit Our Store in Pokhara
        </motion.h2>
        <motion.p variants={fadeUp} style={{
          fontFamily: 'system-ui, sans-serif', fontSize: '15px', color: '#c4a882',
          lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px',
        }}>
          The best way to explore our collections is in store. Our team will help you choose the perfect outfit for your occasion and budget.
        </motion.p>
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#1a0d04', background: '#D4A855',
            padding: '16px 36px', textDecoration: 'none', fontWeight: 600,
          }}>
            Get Directions
          </Link>
          <a href="https://wa.me/9779856027044" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#D4A855', border: '1px solid #D4A855',
            padding: '16px 36px', textDecoration: 'none',
          }}>
            WhatsApp Us
          </a>
        </motion.div>
      </motion.section>

    </main>
  )
}
