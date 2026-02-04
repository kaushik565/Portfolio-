import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { fadeIn, staggerContainer } from '../utils/motion'

const Stats = () => {
    const stats = [
        { value: 6, suffix: '+', label: 'Years in Industry' },
        { value: 4, suffix: '+', label: 'Major Projects' },
        { value: 3, suffix: '', label: 'Companies Worked' },
        { value: 30, suffix: '', label: 'Days Notice' }
    ]

    const AnimatedNumber = ({ value, suffix }) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            let start = 0
            const end = value
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)

            return () => clearInterval(timer)
        }, [value])

        return (
            <span className="text-5xl md:text-6xl font-black text-white">
                {count}{suffix}
            </span>
        )
    }

    return (
        <section className="section-padding bg-surfaceLight">
            <div className="container-custom">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 20px 40px rgba(163, 230, 53, 0.2)"
                            }}
                            className="bento-card p-6 text-center group hover:border-accent/50 transition-colors cursor-default"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                            >
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            </motion.div>
                            <motion.p
                                className="text-zinc-500 mt-2 font-medium text-sm uppercase tracking-wider"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                {stat.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Stats
