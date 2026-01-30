const Skills = () => {
  const skillCategories = [
    {
      title: 'Quality & Compliance',
      icon: '✓',
      skills: [
        'ISO 13485',
        'Quality Management Systems (QMS)',
        'In-Process Quality Assurance (IPQA)',
        'CAPA (Corrective & Preventive Actions)',
        'Audits & Documentation',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Technical Skills',
      icon: '💻',
      skills: [
        'Java (Core)',
        'Selenium Automation (Learning)',
        'JavaScript',
        'React',
        'Node.js',
        'Socket.IO (Real-time systems)',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        'Git & GitHub',
        'VS Code',
        'Postman',
        'Firebase / MongoDB',
        'Linux & Windows',
      ],
      color: 'from-pink-500 to-pink-600',
    },
  ]

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">My </span>
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-white/80 text-lg">A blend of quality expertise and modern technology</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group glass p-8 rounded-3xl hover:scale-105 transform transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-5xl w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-white/90 text-lg hover:text-yellow-300 transition-colors group/item"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-300 to-pink-400 group-hover/item:scale-150 transition-transform">
                    </span>
                    <span className="flex-1">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Skill Badges */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Java', 'JavaScript', 'React', 'Node.js', 'Selenium',
              'Socket.IO', 'MongoDB', 'Firebase', 'Git', 'Linux',
              'ISO 13485', 'QMS', 'IPQA', 'CAPA', 'Audits'
            ].map((tech, index) => (
              <span
                key={index}
                className="glass px-6 py-3 rounded-full text-white font-semibold hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
