import React from 'react'
import {
    RiJavaLine,
    RiNextjsLine,
    RiReactjsLine,
    RiTailwindCssLine,
    RiWordpressLine
} from 'react-icons/ri'
import {SiDocker, SiGit, SiLaravel, SiMysql, SiShadcnui, SiSpring, SiTypescript} from 'react-icons/si'
import {motion} from 'framer-motion'

const iconVariants = (duration, delay, amplitude) => ({
    initial: { y: 0 },
    animate: {
        y: [
            0,
            -amplitude, // Move up
            0,          // Back to center
            amplitude,  // Move down
            0           // Back to center
        ],
        transition: {
            duration: duration,
            ease: "easeInOut", // Smooth wave effect
            repeat: Infinity,
            repeatType: "loop",
            delay: delay, // Offset each icon's wave start
        }
    }
})

const Skills = () => {
    return (
        <section id='skills' className='border-b border-neutral-900 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-neutral-500 text-4xl'
            >
                Skills
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {[
                    { Icon: RiReactjsLine, duration: 2, delay: 0, amplitude: 15 },
                    { Icon: RiNextjsLine, duration: 2.2, delay: 0.2, amplitude: 18 },
                    { Icon: RiTailwindCssLine, duration: 2.4, delay: 0.4, amplitude: 12 },
                    { Icon: SiTypescript, duration: 2.4, delay: 0.4, amplitude: 20 },
                    { Icon: RiJavaLine, duration: 2.6, delay: 0.6, amplitude: 14 },
                    { Icon: RiWordpressLine, duration: 2.8, delay: 0.8, amplitude: 16 },
                    { Icon: SiSpring, duration: 3, delay: 1, amplitude: 14 },
                    { Icon: SiLaravel, duration: 3.2, delay: 1.2, amplitude: 17 },
                    { Icon: SiMysql, duration: 3.4, delay: 1.4, amplitude: 13 },
                    { Icon: SiGit, duration: 3.6, delay: 1.6, amplitude: 15 },
                    { Icon: SiDocker, duration: 3.8, delay: 1.8, amplitude: 18 }
                ].map(({ Icon, duration, delay, amplitude }, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(duration, delay, amplitude)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl  border-4 border-neutral-800 p-4"
                    >
                        <Icon className='text-7xl text-cyan-400' />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills
