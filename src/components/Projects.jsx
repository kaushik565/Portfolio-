import { HiExternalLink, HiCode } from 'react-icons/hi'

const Projects = () => {
  const projects = [
    {
      title: 'Batch Mix-Up Detection JIG',
      emoji: '🧪',
      description: 'Automatic QR scanning jig to prevent batch and line mix-ups using Python validation and ACTJ auto-routing.',
      features: [
        '4-level validation: format, line ID, range, duplicate',
        'Auto-divert to pass/reject bins with LED + buzzer alerts',
        'Tkinter live stats + Flask dashboard with CSV/SQLite logs',
        '100% accuracy across 300+ cartridges tested',
      ],
      tech: ['Python', 'Tkinter', 'Flask', 'SQLite', 'Raspberry Pi', 'GM65 Scanner'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Live Cricket Scoring System',
      emoji: '🏏',
      description: 'A real-time cricket scoring application inspired by IPL-style match dashboards.',
      features: [
        'Admin panel for live scoring',
        'Real-time updates using Socket.IO',
        'Ball-by-ball scoring logic',
        'Live viewer scoreboard',
      ],
      tech: ['React', 'Node.js', 'Socket.IO', 'JavaScript'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Industrial Safety Reporting App',
      emoji: '🦺',
      description: 'A mobile/web application designed for industrial environments to report safety incidents and observations.',
      features: [
        'Incident reporting',
        'Safety observations tracking',
        'Admin review and monitoring',
        'Focus on workplace safety compliance',
      ],
      tech: ['React', 'JavaScript', 'Backend APIs'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Admin Dashboard Applications',
      emoji: '📊',
      description: 'Custom admin panels for managing teams, users, and live data.',
      features: [
        'Role-based controls',
        'Live data updates',
        'Clean dashboard UI',
        'Scalable layout design',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">My </span>
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real-world applications focusing on quality, safety, and real-time performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-3xl overflow-hidden hover:scale-105 transform transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header with 3D Effect */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-8xl opacity-10 absolute animate-float">{project.emoji}</div>
                <div className="text-7xl z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {project.emoji}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-white text-sm">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="text-yellow-300 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <HiExternalLink />
                    Demo
                  </button>
                  <button className="flex items-center justify-center gap-2 glass-dark px-6 py-3 rounded-xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                    <HiCode />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
