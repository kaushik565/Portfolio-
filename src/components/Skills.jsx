import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { fadeIn, staggerContainer } from '../utils/motion'

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    quality: true,
    technical: true,
    data: false,
    operations: false
  })

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const categories = [
    {
      id: 'quality',
      name: "Quality & Regulatory",
      icon: "🏆",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "ISO 13485 Documentation", level: 95, years: 2 },
        { name: "GMP Compliance", level: 90, years: 2 },
        { name: "Quality Management System (QMS)", level: 92, years: 2 },
        { name: "In-Process QA (IPQA)", level: 88, years: 1 },
        { name: "CAPA & Deviations", level: 85, years: 1 },
        { name: "Root Cause Analysis", level: 87, years: 2 },
        { name: "Internal Audits", level: 80, years: 1 },
        { name: "SOP Preparation", level: 90, years: 2 }
      ]
    },
    {
      id: 'technical',
      name: "Technical Skills",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React.js", level: 85, years: 3 },
        { name: "JavaScript", level: 82, years: 3 },
        { name: "HTML & CSS", level: 88, years: 4 },
        { name: "Dashboard Development", level: 80, years: 2 },
        { name: "Python (Automation)", level: 75, years: 2 },
        { name: "Data Analysis", level: 78, years: 2 }
      ]
    },
    {
      id: 'data',
      name: "Data & Analysis",
      icon: "📊",
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "MS Excel (Pivot, Charts)", level: 92, years: 5 },
        { name: "KPI Reporting", level: 88, years: 2 },
        { name: "Quality Data Analysis", level: 85, years: 2 },
        { name: "Pareto Analysis", level: 82, years: 2 },
        { name: "MS PowerPoint", level: 90, years: 5 },
        { name: "MS Word", level: 88, years: 5 }
      ]
    },
    {
      id: 'operations',
      name: "QA Operations",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Line Clearance & Closure", level: 90, years: 1 },
        { name: "Batch Record Review", level: 88, years: 1 },
        { name: "OOS Investigation", level: 82, years: 1 },
        { name: "Non-Conformance (NC)", level: 85, years: 1 },
        { name: "Good Documentation Practices", level: 92, years: 2 },
        { name: "Document Control", level: 90, years: 2 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-zinc-950">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
            Technical <span className="text-zinc-600">Expertise.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            Bridging Quality Assurance with Information Technology. Expert in ISO 13485, GMP environments, and modern web technologies for process optimization.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              variants={fadeIn('up', 'tween', catIndex * 0.1, 0.5)}
              className="bento-card overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-surfaceLight/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-zinc-500 text-sm">{category.skills.length} skills</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategories[category.id] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="text-2xl text-accent" />
                </motion.div>
              </button>

              {/* Skills List */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCategories[category.id] ? 'auto' : 0,
                  opacity: expandedCategories[category.id] ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="group"
                    >
                      {/* Skill Name & Years */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-zinc-500 font-mono">
                            {skill.years}+ {skill.years === 1 ? 'year' : 'years'}
                          </span>
                          <span className="text-accent text-sm font-bold font-mono">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-surfaceLight rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Total Skills', value: '26+' },
            { label: 'Categories', value: '4' },
            { label: 'Avg. Proficiency', value: '87%' },
            { label: 'Years of Exp', value: '6+' }
          ].map((stat, index) => (
            <div key={index} className="bento-card p-4 text-center">
              <p className="text-3xl font-black text-accent mb-1">{stat.value}</p>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
