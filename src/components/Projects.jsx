import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'
import { fadeIn, staggerContainer } from '../utils/motion'

const Projects = () => {
  const projects = [
    {
      title: 'QA Performance Dashboard (React)',
      description: 'React-based dashboard tracking QA performance across three manufacturing sites with charts, graphs, averages, and Pareto analysis for management reporting.',
      tags: ['React.js', 'JavaScript', 'Data Visualization', 'KPI Reporting'],
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/kaushik565',
      demo: 'https://github.com/kaushik565',
    },
    {
      title: 'Batch Mix-Up Detection & Prevention JIG',
      description: 'Automated JIG system with Python logic to verify cartridge identification and prevent batch mix-ups, strengthening IPQA controls aligned with GMP and ISO 13485.',
      tags: ['Python', 'Automation', 'GMP', 'ISO 13485'],
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/kaushik565',
      demo: 'https://github.com/kaushik565',
    },
    {
      title: 'Live Cricket Scoring System',
      description: 'Real-time cricket scoring application inspired by IPL-style match dashboards, offering live updates, stats tracking, and interactive scorecards.',
      tags: ['React', 'Node.js', 'Socket.io', 'Real-time'],
      color: 'from-orange-500 to-amber-500',
      github: 'https://github.com/kaushik565',
      demo: 'https://github.com/kaushik565',
    },
    {
      title: 'Industrial Safety Reporting App',
      description: 'Mobile/web application designed for industrial environments to report safety incidents, near-misses, and observations with analytics dashboards.',
      tags: ['React Native', 'Firebase', 'Safety', 'Analytics'],
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/kaushik565',
      demo: 'https://github.com/kaushik565',
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-2">Featured Work</h2>
            <p className="text-zinc-400">Quality automation, dashboards, and full-stack applications.</p>
          </div>
          <a href="https://github.com/kaushik565" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-white hover:text-accent transition-colors">
            View GitHub <FaExternalLinkAlt />
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                gyroscope={true}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#a3e635"
                glarePosition="all"
                className="h-full"
              >
                <div className="bento-card group flex flex-col h-full">
                  {/* Image Section (Gradient) */}
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color}`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-4 left-4 text-white font-black text-4xl opacity-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      0{index + 1}
                    </div>
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded group-hover:border-accent/50 group-hover:text-accent transition-colors">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-surfaceLight hover:bg-white hover:text-black text-white py-2 rounded-lg font-medium text-sm transition-all text-center flex items-center justify-center gap-2">
                          <FaGithub /> Code
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 border border-zinc-700 hover:border-accent hover:text-accent text-white py-2 rounded-lg font-medium text-sm transition-all text-center flex items-center justify-center gap-2">
                          <FaExternalLinkAlt /> View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
