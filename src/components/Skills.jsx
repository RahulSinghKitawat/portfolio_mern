import { motion } from 'framer-motion'
import './Skills.css'

const SKILL_GROUPS = [
  { title: 'Languages', tone: 'white', skills: ['C++', 'C', 'Python', 'JavaScript'] },
  { title: 'Frontend', tone: 'yellow', skills: ['HTML', 'CSS', 'React'] },
  { title: 'Backend', tone: 'white', skills: ['Node.js', 'Express'] },
  { title: 'Database', tone: 'coral', skills: ['MongoDB'] },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="rsk-section" data-testid="skills-section">
      <motion.div
        className="rsk-chapter"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <span className="rsk-chapter-num">02</span>
        <span className="rsk-chapter-rule" />
        <p className="rsk-eyebrow">Skills</p>
      </motion.div>

      <motion.h2
        className="rsk-section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        What I work with
      </motion.h2>

      <motion.p
        className="rsk-section-sub"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Languages and tools grouped the way they&apos;d sit in a real stack.
      </motion.p>

      <div className="rsk-skills-grid">
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            className={`rsk-skill-card ${group.tone}`}
            key={group.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            data-testid={`skill-card-${group.title.toLowerCase()}`}
          >
            <h3>{group.title}</h3>
            <div className="rsk-chip-row">
              {group.skills.map((s) => (
                <span className="rsk-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
