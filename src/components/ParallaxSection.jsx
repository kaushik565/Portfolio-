import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallaxSection = ({ children, speed = 0.5, className = "" }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    )
}

export default ParallaxSection
