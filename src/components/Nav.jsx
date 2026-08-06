import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '../utils/scrollTo'
import { useTheme } from '../context/ThemeContext.jsx'
import './Nav.css'

const NAV_ITEMS = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = ['home', 'skills', 'projects', 'contact']

function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      data-testid="theme-toggle"
      className={`rsk-theme-toggle ${compact ? 'compact' : ''}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span className="rsk-theme-toggle-track" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            className="rsk-theme-toggle-icon"
            initial={{ y: -14, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: 14, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {isDark ? <Sun size={16} strokeWidth={2.4} /> : <Moon size={16} strokeWidth={2.4} />}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="rsk-nav" data-testid="portfolio-nav">
        <div className="rsk-mark">
          <div className="rsk-mark-box">RSK</div>
          <span className="rsk-mark-name">Rahul Singh Kitawat</span>
        </div>

        <div className="rsk-desktop-only rsk-nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-link-${item.id}`}
              className={`rsk-nav-link ${active === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            data-testid="nav-cta-sayhi"
            className="rsk-nav-cta"
            onClick={() => handleNavClick('contact')}
          >
            Say hi
          </button>
          <ThemeToggle />
        </div>

        <div className="rsk-mobile-only rsk-mobile-actions">
          <ThemeToggle compact />
          <button
            className="rsk-menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            data-testid="nav-open-menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="rsk-overlay"
            data-testid="nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rsk-overlay-top">
              <ThemeToggle compact />
              <button
                className="rsk-overlay-close"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                data-testid="nav-close-menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="rsk-overlay-links">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                  onClick={() => handleNavClick(item.id)}
                  data-testid={`nav-mobile-${item.id}`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + NAV_ITEMS.length * 0.06, duration: 0.35 }}
                onClick={() => handleNavClick('contact')}
                data-testid="nav-mobile-sayhi"
              >
                Say hi
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
