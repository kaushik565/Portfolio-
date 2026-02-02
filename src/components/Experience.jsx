import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'

const Experience = () => {
    const workExperience = [
        {
            year: 'Dec 2024 - Present',
            role: 'Supervisor – Quality Assurance',
            company: 'Molbio Diagnostics Limited',
            location: 'Visakhapatnam',
            description: 'Leading QA operations in ISO 13485 and GMP-regulated diagnostics manufacturing environment.',
            responsibilities: [
                'QMS Documentation: Change Control, Deviations, NC, OOS, CAPA, Incident Reports',
                'SOP preparation, review, and control for ISO 13485 compliance',
                'IPQA: Line Clearance, Line Closure, BMR review, in-process quality monitoring',
                'Document control, audits, and continuous quality improvement',
                'Independent IPQA shift operations ensuring GMP adherence'
            ],
            type: 'current'
        },
        {
            year: 'Aug 2024 - Nov 2024',
            role: 'Supervisor – Quality Assurance (Contract)',
            company: 'Brainsitter India Pvt Ltd',
            location: 'Visakhapatnam',
            description: 'Contract QA Supervisor supporting Molbio Diagnostics manufacturing operations.',
            responsibilities: [
                'Daily in-process quality checks and SOP compliance verification',
                'Batch record verification, reconciliation, and document archival',
                'Quality records maintenance and audit documentation',
                'Cross-functional coordination for quality issue resolution'
            ],
            type: 'past'
        },
        {
            year: 'Feb 2018 - Feb 2019',
            role: 'Diploma Apprentice',
            company: 'Power Grid Corporation of India Limited (PGCIL)',
            location: 'Visakhapatnam',
            description: 'One-year apprenticeship at 400 KV HVAC Substation, Southern Region – I.',
            responsibilities: [
                'Operation and maintenance of high-voltage substation equipment',
                'Electrical systems, safety procedures, and preventive maintenance',
                'Routine inspections, fault identification, and system monitoring',
                'Assisted engineers in critical operations and troubleshooting'
            ],
            type: 'past'
        }
    ]

    const education = [
        {
            year: '2023',
            degree: 'Bachelor of Technology (B.Tech)',
            field: 'Information Technology',
            institution: "Vignan's Institute of Information Technology",
            location: 'Visakhapatnam',
            highlights: [
                'Graduated with strong foundation in IT and software development',
                'Developed multiple quality assurance and automation projects',
                'Bridged QA domain expertise with technical capabilities'
            ]
        },
        {
            year: '2016',
            degree: 'Diploma',
            field: 'Electrical and Electronics Engineering (EEE)',
            institution: 'Behera Polytechnic',
            location: 'Visakhapatnam',
            highlights: [
                'Specialized in Electrical and Electronics Engineering',
                'Foundation for technical problem-solving and systems thinking',
                'Led to apprenticeship at Power Grid Corporation'
            ]
        }
    ]

    return (
        <section id="experience" className="section-padding bg-zinc-950">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                        Professional <span className="text-zinc-600">Journey.</span>
                    </h2>
                    <p className="text-zinc-400">From apprentice to QA supervisor in medical diagnostics.</p>
                </motion.div>

                {/* Work Experience Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <HiBriefcase className="text-3xl text-accent" />
                        <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="relative"
                    >
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-zinc-700 to-transparent"></div>

                        {workExperience.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                                className={`relative flex items-start mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background shadow-lg z-10 ${exp.type === 'current' ? 'bg-accent animate-pulse shadow-accent/50' : 'bg-zinc-600'
                                    }`}></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bento-card p-6 group hover:border-accent/50 transition-colors">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-accent text-sm font-mono font-bold">{exp.year}</span>
                                            {exp.type === 'current' && (
                                                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">Current</span>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <p className="text-zinc-400 font-medium mb-1">{exp.company}</p>
                                        <p className="text-zinc-500 text-sm mb-4">📍 {exp.location}</p>
                                        <p className="text-zinc-400 text-sm mb-4 leading-relaxed italic">{exp.description}</p>

                                        <div className="space-y-2">
                                            {exp.responsibilities.map((resp, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <span className="text-accent mt-1 text-xs">▪</span>
                                                    <span className="text-zinc-400 text-sm leading-relaxed">{resp}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Education Section */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <HiAcademicCap className="text-3xl text-accent" />
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {education.map((edu, index) => (
                            <div key={index} className="bento-card p-6 group hover:border-accent/50 transition-colors">
                                <div className="mb-4">
                                    <span className="text-accent font-mono font-bold text-sm">{edu.year}</span>
                                    <h3 className="text-xl font-bold text-white mt-2 mb-1">{edu.degree}</h3>
                                    <p className="text-lg text-zinc-300 font-medium mb-2">{edu.field}</p>
                                    <p className="text-zinc-400 font-medium text-sm">{edu.institution}</p>
                                    <p className="text-zinc-500 text-xs mt-1">📍 {edu.location}</p>
                                </div>

                                <div className="mt-4 space-y-2 border-t border-zinc-800 pt-4">
                                    {edu.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-accent mt-1">•</span>
                                            <span className="text-zinc-400 text-xs leading-relaxed">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Experience
