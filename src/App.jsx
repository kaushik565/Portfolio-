import { useState } from 'react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary selection:bg-accent selection:text-black">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
