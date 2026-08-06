import { motion } from 'framer-motion'
import './Marquee.css'

const SKILLS = ['C++', 'C', 'Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express', 'MongoDB']

export default function Marquee() {
  const items = [...SKILLS, ...SKILLS, ...SKILLS]

  return (
    <motion.div
      className="rsk-marquee-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      data-testid="marquee"
    >
      <div className="rsk-marquee-track">
        {items.map((skill, i) => (
          <div className="rsk-marquee-item" key={i}>
            {skill} <span className="dot">◆</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
