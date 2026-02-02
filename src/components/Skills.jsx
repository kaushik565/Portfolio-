import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'

const Skills = () => {
  const categories = [
    {
      name: "Quality & Regulatory",
      skills: [
        "ISO 13485 Documentation",
        "GMP Compliance",
        "Quality Management System (QMS)",
        "In-Process QA (IPQA)",
        "CAPA & Deviations",
        "Root Cause Analysis",
        "Internal Audits",
        "SOP Preparation"
      ]
    },
    {
      name: "Technical Skills",
      skills: [
        "React.js",
        "JavaScript",
        "HTML & CSS",
        "Dashboard Development",
        "Python (Automation)",
        "Data Analysis"
      ]
    },
    {
      name: "Data & Analysis",
      skills: [
        "MS Excel (Pivot, Charts)",
        "KPI Reporting",
        "Quality Data Analysis",
        "Pareto Analysis",
        "MS PowerPoint",
        "MS Word"
      ]
    },
    {
      name: "QA Operations",
      skills: [
        "Line Clearance & Closure",
        "Batch Record Review",
        "OOS Investigation",
        "Non-Conformance (NC)",
        "Good Documentation Practices",
        "Document Control"
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Header */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Technical <br />
              <span className="text-zinc-600">Expertise.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg leading-relaxed max-w-md"
            >
              Bridging Quality Assurance with Information Technology. Expert in ISO 13485, GMP environments, and modern web technologies for process optimization.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
                className="bento-card p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">{cat.name}</h3>
                <ul className="space-y-2">
                  {cat.skills.map(skill => (
                    <li key={skill} className="text-zinc-400 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
