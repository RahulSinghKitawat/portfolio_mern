import { useEffect, useRef } from 'react'
import { Mail, Phone, ArrowDown } from 'lucide-react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { scrollToSection } from '../utils/scrollTo'
import './Hero.css'

// Masked line-by-line word reveal. Each word rises from below a clip mask.
function RevealLine({ text, className = '', delay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={`rsk-reveal-line ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="rsk-reveal-word-wrap">
          <motion.span
            className="rsk-reveal-word"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Parallax for sticker + subtle scale for headline
  const stickerY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 140])
  const stickerRotate = useTransform(scrollYProgress, [0, 1], prefersReduced ? [6, 6] : [6, -14])
  const headlineY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -40])

  useEffect(() => {
    // Nothing extra; motion handles reveal on mount
  }, [])

  return (
    <section id="home" className="rsk-hero" ref={heroRef} data-testid="hero-section">
      <motion.div
        className="rsk-hero-sticker"
        aria-hidden="true"
        style={{ y: stickerY, rotate: stickerRotate }}
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        RSK
      </motion.div>

      <motion.div
        className="rsk-stamp"
        initial={{ opacity: 0, y: 14, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span className="rsk-stamp-dot" aria-hidden="true"></span>
        Open for internships
      </motion.div>

      <motion.h1 className="rsk-headline" style={{ y: headlineY }}>
        <span className="rsk-headline-line">
          <RevealLine text="Rahul Singh" delay={0.25} />
        </span>
        <span className="rsk-headline-line line2">
          <RevealLine text="Kitawat." delay={0.45} />
        </span>
      </motion.h1>

      <motion.p
        className="rsk-role"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
      >
        B.Tech Computer Science — 3rd Year Student
      </motion.p>

      <motion.p
        className="rsk-bio"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.95 }}
      >
        I design and build full-stack products — from React interfaces down to the databases underneath.
        Third-year CS student, sharpening the craft one project at a time.
      </motion.p>

      <motion.div
        className="rsk-hero-actions"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05 }}
      >
        <button
          className="rsk-btn rsk-btn-primary"
          onClick={() => scrollToSection('contact')}
          data-testid="hero-cta-lets-talk"
        >
          Let&apos;s talk
        </button>
        <button
          className="rsk-btn rsk-btn-ghost"
          onClick={() => scrollToSection('projects')}
          data-testid="hero-cta-see-work"
        >
          See my work
        </button>
      </motion.div>

      <motion.div
        className="rsk-hero-contact"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.15 }}
      >
        <a href="mailto:rahulsingh989811@gmail.com" data-testid="hero-email-link">
          <Mail size={15} /> rahulsingh989811@gmail.com
        </a>
        <a href="tel:+916350611797" data-testid="hero-phone-link">
          <Phone size={15} /> +91 63506 11797
        </a>
      </motion.div>

      <motion.div
        className="rsk-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.span
          className="rsk-scroll-cue-line"
          animate={prefersReduced ? {} : { scaleY: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        />
        <span className="rsk-scroll-cue-text">SCROLL</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  )
}
