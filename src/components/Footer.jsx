import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative glass text-white py-16 border-t border-white/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
              Kaushik.P
            </h3>
            <p className="text-white/70 leading-relaxed">
              Quality Assurance Engineer | Automation Learner | Application Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-yellow-300 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-yellow-300 group-hover:w-6 transition-all"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-yellow-300 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-yellow-300 group-hover:w-6 transition-all"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-yellow-300 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-yellow-300 group-hover:w-6 transition-all"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-yellow-300 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-yellow-300 group-hover:w-6 transition-all"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-yellow-300 transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-yellow-300 group-hover:w-6 transition-all"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/kaushik565"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark p-4 rounded-2xl hover:scale-110 hover:rotate-6 hover:text-yellow-300 transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/lakshmana-sai-kaushik-p-b10697183"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark p-4 rounded-2xl hover:scale-110 hover:rotate-6 hover:text-blue-300 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:lakshmanasaikaushik565@gmail.com"
                className="glass-dark p-4 rounded-2xl hover:scale-110 hover:rotate-6 hover:text-pink-300 transition-all duration-300"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
            <p className="text-white/70 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Visakhapatnam, India
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70">
            © {currentYear} Penke Lakshmana Sai Kaushik | Built with <span className="text-pink-400">♥</span> and passion for quality & technology
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
