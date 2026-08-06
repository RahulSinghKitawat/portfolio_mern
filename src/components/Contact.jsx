import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <div className="rsk-contact-band" data-testid="contact-band">
      <section id="contact" className="rsk-contact-inner">
        <motion.div
          className="rsk-chapter rsk-contact-chapter"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <span className="rsk-chapter-num contact">04</span>
          <span className="rsk-chapter-rule contact" />
          <p className="rsk-eyebrow contact">Contact</p>
        </motion.div>

        <motion.h2
          className="rsk-contact-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Got a project?
          <br />
          Let&apos;s talk.
        </motion.h2>

        <motion.p
          className="rsk-contact-sub"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Open to internship opportunities, freelance work, and interesting collaborations.
        </motion.p>

        <div className="rsk-contact-cards">
          <motion.a
            className="rsk-contact-card"
            href="mailto:rahulsingh989811@gmail.com"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="contact-email"
          >
            <div className="rsk-contact-icon">
              <Mail size={18} />
            </div>
            <div>
              <div className="rsk-contact-card-label">Email</div>
              <div className="rsk-contact-card-value">rahulsingh989811@gmail.com</div>
            </div>
          </motion.a>
          <motion.a
            className="rsk-contact-card"
            href="tel:+916350611797"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            data-testid="contact-phone"
          >
            <div className="rsk-contact-icon">
              <Phone size={18} />
            </div>
            <div>
              <div className="rsk-contact-card-label">Phone</div>
              <div className="rsk-contact-card-value">+91 63506 11797</div>
            </div>
          </motion.a>
        </div>
      </section>
    </div>
  )
}
