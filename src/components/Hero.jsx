import { HiDownload, HiArrowRight, HiSparkles } from 'react-icons/hi'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`, transition: 'transform 0.3s ease-out' }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass text-white px-6 py-3 rounded-full text-sm font-medium animate-fade-in-up">
            <HiSparkles className="text-yellow-300" />
            <span>Available for Opportunities</span>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Penke Lakshmana
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Sai Kaushik
              </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl text-white/90">
              <span className="px-4 py-2 glass-dark rounded-full">Quality Assurance Engineer</span>
              <span className="text-yellow-300">•</span>
              <span className="px-4 py-2 glass-dark rounded-full">Automation Learner</span>
              <span className="text-pink-300">•</span>
              <span className="px-4 py-2 glass-dark rounded-full">Application Developer</span>
            </div>
          </div>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Crafting <span className="font-bold text-yellow-300">quality-driven solutions</span> with expertise in medical device manufacturing, 
            expanding into <span className="font-bold text-pink-300">Java automation</span> and <span className="font-bold text-purple-300">full-stack development</span>. 
            Building reliable, real-time applications with excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50"
            >
              <span className="relative z-10">View My Work</span>
              <HiArrowRight className="group-hover:translate-x-2 transition-transform text-xl relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 glass text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 hover:bg-white/20 shadow-xl"
            >
              <HiDownload className="text-xl group-hover:animate-bounce" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/kaushik565"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-2xl text-white hover:text-yellow-300 hover:scale-110 hover:rotate-6 transform transition-all duration-300 hover:shadow-2xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/lakshmana-sai-kaushik-p-b10697183"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-2xl text-white hover:text-blue-300 hover:scale-110 hover:rotate-6 transform transition-all duration-300 hover:shadow-2xl"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:lakshmanasaikaushik565@gmail.com"
              className="glass p-4 rounded-2xl text-white hover:text-pink-300 hover:scale-110 hover:rotate-6 transform transition-all duration-300 hover:shadow-2xl"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
