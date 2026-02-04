import { useState } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import CursorFollower from './components/CursorFollower'
import { ToastContainer } from './components/Toast'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary selection:bg-accent selection:text-black relative">
      <CursorFollower />
      <ParticleBackground />
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Stats />
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
        <ScrollToTop />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
