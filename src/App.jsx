import { ThemeProvider } from './context/ThemeContext.jsx'
import { useLenis } from './hooks/useLenis'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function Shell() {
  useLenis()
  return (
    <div data-testid="portfolio-root">
      <Nav />
      <Hero />
      <Marquee />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  )
}
