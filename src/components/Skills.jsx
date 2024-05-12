import React from 'react'
import { RiBootstrapLine, RiHtml5Line, RiJavaLine, RiNextjsLine, RiReactjsLine, RiTailwindCssLine, RiWordpressLine } from 'react-icons/ri'
import { SiMysql, SiShadcnui, SiTypescript } from 'react-icons/si'
import { animate, motion } from 'framer-motion'

const iconVariants =(duration)=>({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

const Skills = () => {
    return (
        <>
            <section id='skills' className='border-b border-neutral-900 pb-24'>
                <motion.h2 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className='my-20 text-center text-neutral-500 text-4xl'>Skills</motion.h2>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neurtral-800 p-4">
                        <RiReactjsLine className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neurtral-800 p-4">
                        <RiTailwindCssLine className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neurtral-800 p-4">
                        <RiJavaLine className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neurtral-800 p-4">
                        <RiWordpressLine className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neurtral-800 p-4">
                        <SiShadcnui className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neurtral-800 p-4">
                        <SiMysql className='text-7xl text-cyan-400' />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default Skills