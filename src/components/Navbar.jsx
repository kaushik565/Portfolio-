import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'experience', 'contact']

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none`}
    >
      <div
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled
            ? 'bg-surface/80 backdrop-blur-md border border-white/10 shadow-2xl w-[90%] md:w-auto gap-8 md:gap-12'
            : 'bg-transparent w-full container-custom'
          }`}
      >
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tighter text-white z-50">
          kaushik<span className="text-accent">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 relative ${activeSection === link.id
                  ? 'text-accent'
                  : 'text-zinc-400 hover:text-white'
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href="mailto:lakshmanasaikaushik565@gmail.com"
            className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent hover:text-black transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50 p-2 rounded-full bg-surfaceLight/50 backdrop-blur-md"
        >
          {isOpen ? <HiX className="text-xl" /> : <HiMenuAlt4 className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 p-4 bg-surface border border-border rounded-3xl shadow-2xl pointer-events-auto md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block p-4 rounded-xl text-center transition-colors ${activeSection === link.id
                        ? 'bg-accent/10 text-accent border border-accent/30'
                        : 'hover:bg-surfaceLight text-zinc-300 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:lakshmanasaikaushik565@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="block p-4 mt-2 rounded-xl bg-accent text-zinc-900 text-center font-bold"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
