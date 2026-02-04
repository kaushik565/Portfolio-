import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiLocationMarker, HiMail, HiDownload, HiPhone } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px]">

          {/* 1. Large Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bento-card p-8 flex flex-col justify-between relative group overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <h1 className="text-9xl font-black text-white">QA</h1>
            </motion.div>

            {/* Animated gradient background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-wider mb-4"
              >
                <TypeAnimation
                  sequence={[
                    'QA SUPERVISOR',
                    2000,
                    'IT SPECIALIST',
                    2000,
                    'QUALITY ENGINEER',
                    2000,
                    'FULL STACK DEV',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                Quality-Driven <span className="text-zinc-500">Excellence</span><br /> in Medical Diagnostics.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-zinc-400 max-w-sm text-sm leading-relaxed"
              >
                Bridging Quality Assurance with IT. Expert in ISO 13485, GMP compliance, and React-based quality dashboards. Building data-driven solutions for manufacturing excellence.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8 relative z-10"
            >
              <motion.a
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-accent transition-colors text-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(163, 230, 53, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/Penke%20Lakshmana%20Sai%20Kaushik.docx"
                download
                className="border border-zinc-700 text-white px-6 py-3 rounded-full font-bold hover:bg-surfaceLight transition-colors flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.05, borderColor: "#a3e635" }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload /> Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 2. Photo/Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bento-card overflow-hidden relative group"
          >
            <motion.img
              src="/WhatsApp Image 2026-01-30 at 8.35.59 PM.jpeg"
              alt="Penke Lakshmana Sai Kaushik"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-white font-bold text-lg leading-tight">Penke Lakshmana<br />Sai Kaushik</h2>
                <p className="text-zinc-400 text-xs mt-1">QA Supervisor</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 3. Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.03 }}
            className="col-span-1 md:col-span-1 row-span-1 bento-card p-6 flex flex-col justify-center gap-4 group"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-zinc-500 text-sm font-mono uppercase tracking-widest"
            >
              Core Stack
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              {['ISO 13485', 'React.js', 'QMS', 'Python', 'GMP'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-2 py-1 bg-surfaceLight rounded-md text-xs font-mono text-zinc-300 border border-border group-hover:border-accent/50 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 150 }}
            whileHover={{ y: -5 }}
            className="col-span-1 row-span-1 bento-card p-6 flex items-center justify-around"
          >
            <motion.a
              href="https://github.com/kaushik565"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surfaceLight rounded-full hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/lakshmana-sai-kaushik-p-b10697183"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-surfaceLight rounded-full hover:bg-[#0077b5] hover:text-white transition-all"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="mailto:lakshmanasaikaushik565@gmail.com"
              className="p-3 bg-surfaceLight rounded-full hover:bg-accent hover:text-black transition-all"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiMail className="text-xl" />
            </motion.a>
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
            initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.7, delay: 0.7, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 bento-card bg-accent text-zinc-900 p-6 flex items-center justify-between group overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            />
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-black text-2xl">30 DAYS</p>
              <p className="font-medium text-black/70 text-sm">Notice Period</p>
            </motion.div>
            <motion.div
              className="rotate-45 p-2 border-2 border-zinc-900 rounded-full relative z-10"
              whileHover={{ rotate: 90, scale: 1.2 }}
              animate={{ rotate: [45, 50, 45] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
