import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { showToast } from './Toast'

const Contact = () => {
  const handleEmailCopy = () => {
    navigator.clipboard.writeText('lakshmanasaikaushik565@gmail.com')
    showToast('✉️ Email copied to clipboard!', 'success')
  }

  return (
    <section id="contact" className="section-padding pb-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Let's work <br />
              <span className="text-accent underline decoration-4 decoration-white/20 underline-offset-8">together.</span>
            </h2>
            <div className="space-y-6">
              <div
                onClick={handleEmailCopy}
                className="bento-card p-6 flex items-center gap-4 group cursor-pointer hover:border-accent/50 transition-colors"
              >
                <div className="p-4 bg-accent/10 rounded-full text-accent">
                  <HiMail className="text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="text-zinc-500 text-sm font-bold uppercase">Click to Copy</p>
                  <p className="text-white text-lg font-medium">lakshmanasaikaushik565@gmail.com</p>
                </div>
                <span className="text-accent text-2xl opacity-0 group-hover:opacity-100 transition-opacity">📋</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/lakshmana-sai-kaushik-p-b10697183"
                  target="_blank" rel="noopener noreferrer"
                  className="bento-card p-6 flex flex-col justify-center items-center gap-2 hover:bg-[#0077b5] hover:text-white group transition-colors"
                >
                  <FaLinkedin className="text-3xl text-zinc-400 group-hover:text-white" />
                  <span className="font-bold text-zinc-300 group-hover:text-white">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/kaushik565"
                  target="_blank" rel="noopener noreferrer"
                  className="bento-card p-6 flex flex-col justify-center items-center gap-2 hover:bg-white hover:text-black group transition-colors"
                >
                  <FaGithub className="text-3xl text-zinc-400 group-hover:text-black" />
                  <span className="font-bold text-zinc-300 group-hover:text-black">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
