import { Code2, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import './Projects.css'

const PROJECTS = [
  {
    file: 'task-manager',
    bar: 'indigo',
    title: 'MERN Task Manager',
    desc: 'A full-stack task tracker with user authentication and CRUD operations — React on the front end, Express + MongoDB underneath.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    hasDemo: true,
  },
  {
    file: 'result-system',
    bar: 'coral',
    title: 'Student Result Management System',
    desc: 'A console-based system for storing and calculating student records, built to practice core data structures and file handling in C++.',
    tags: ['C++', 'Data Structures', 'File I/O'],
    hasDemo: false,
  },
  {
    file: 'weather-app',
    bar: 'yellow',
    title: 'Weather Dashboard',
    desc: 'A responsive React app pulling live weather data from a public API and presenting it through a clean, minimal interface.',
    tags: ['React', 'JavaScript', 'API'],
    hasDemo: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="rsk-section" data-testid="projects-section">
      <motion.div
        className="rsk-chapter"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <span className="rsk-chapter-num">03</span>
        <span className="rsk-chapter-rule" />
        <p className="rsk-eyebrow">Work</p>
      </motion.div>

      <motion.h2
        className="rsk-section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        Selected projects
      </motion.h2>

      <motion.p
        className="rsk-section-sub"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A few things built while learning the stack.
      </motion.p>

      <div className="rsk-project-grid">
        {PROJECTS.map((p, i) => (
          <motion.article
            className="rsk-project-card"
            key={p.file}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            data-testid={`project-card-${p.file}`}
          >
            <div className={`rsk-project-bar ${p.bar}`}></div>
            <div className="rsk-project-body">
              <div className="rsk-project-file">
                <span className="rsk-project-dot" aria-hidden="true" />
                {p.file}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="rsk-project-tags">
                {p.tags.map((t) => (
                  <span className="rsk-project-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="rsk-project-links">
                <a href="#" data-testid={`project-github-${p.file}`}>
                  <Code2 size={14} /> GitHub
                </a>
                {p.hasDemo && (
                  <a href="#" data-testid={`project-demo-${p.file}`}>
                    <ArrowUpRight size={14} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="rsk-project-note">Sample entries — swap in your own repositories, links, and descriptions.</p>
    </section>
  )
}
