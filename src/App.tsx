import { useEffect, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { ExperienceSection } from './sections/ExperienceSection'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { startSmoothScroll } from './lib/motion'
import { useReveal } from './hooks/useReveal'

function App() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => startSmoothScroll(), [])
  useReveal(mainRef)

  return (
    <div className="grain">
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
