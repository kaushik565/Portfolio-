import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiLocationMarker, HiMail, HiDownload, HiPhone } from 'react-icons/hi'

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px]">

          {/* 1. Large Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bento-card p-8 flex flex-col justify-between relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <h1 className="text-9xl font-black text-white">QA</h1>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-wider mb-4">
                QA SUPERVISOR | IT SPECIALIST
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Quality-Driven <span className="text-zinc-500">Excellence</span><br /> in Medical Diagnostics.
              </h1>
              <p className="text-zinc-400 max-w-sm text-sm leading-relaxed">
                Bridging Quality Assurance with IT. Expert in ISO 13485, GMP compliance, and React-based quality dashboards. Building data-driven solutions for manufacturing excellence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-accent transition-colors text-sm">
                View Projects
              </a>
              <a href="/Penke%20Lakshmana%20Sai%20Kaushik.docx" download className="border border-zinc-700 text-white px-6 py-3 rounded-full font-bold hover:bg-surfaceLight transition-colors flex items-center gap-2 text-sm">
                <HiDownload /> Resume
              </a>
            </div>
          </motion.div>

          {/* 2. Photo/Avatar Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bento-card overflow-hidden relative group"
          >
            <img
              src="/WhatsApp Image 2026-01-30 at 8.35.59 PM.jpeg"
              alt="Penke Lakshmana Sai Kaushik"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h2 className="text-white font-bold text-lg leading-tight">Penke Lakshmana<br />Sai Kaushik</h2>
                <p className="text-zinc-400 text-xs mt-1">QA Supervisor</p>
              </div>
            </div>
          </motion.div>

          {/* 3. Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-1 row-span-1 bento-card p-6 flex flex-col justify-center gap-4 group"
          >
            <h3 className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['ISO 13485', 'React.js', 'QMS', 'Python', 'GMP'].map(tech => (
                <span key={tech} className="px-2 py-1 bg-surfaceLight rounded-md text-xs font-mono text-zinc-300 border border-border group-hover:border-accent/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 4. Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 row-span-1 bento-card p-6 flex flex-col justify-between group"
          >
            <HiPhone className="text-2xl text-accent mb-2" />
            <div>
              <p className="text-zinc-500 text-xs font-bold uppercase">Phone</p>
              <p className="text-white font-bold text-sm">+91-8886875787</p>
            </div>
          </motion.div>

          {/* 5. Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 row-span-1 bento-card p-6 flex items-center justify-around"
          >
            <a href="https://github.com/kaushik565" target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceLight rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://linkedin.com/in/lakshmana-sai-kaushik-p-b10697183" target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceLight rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="mailto:lakshmanasaikaushik565@gmail.com" className="p-3 bg-surfaceLight rounded-full hover:bg-accent hover:text-black transition-all hover:scale-110">
              <HiMail className="text-xl" />
            </a>
          </motion.div>

          {/* 6. Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 row-span-1 bento-card p-6 flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 bg-accent/10 text-accent rounded-lg">
                <HiLocationMarker className="text-xl" />
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-bold uppercase">Location</p>
              <p className="text-white font-bold text-sm leading-tight group-hover:text-accent transition-colors">Visakhapatnam,<br />Andhra Pradesh</p>
            </div>
          </motion.div>

          {/* 7. Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 bento-card bg-accent text-zinc-900 p-6 flex items-center justify-between group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative z-10">
              <p className="font-black text-2xl">30 DAYS</p>
              <p className="font-medium text-black/70 text-sm">Notice Period</p>
            </div>
            <div className="rotate-45 p-2 border-2 border-zinc-900 rounded-full relative z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
