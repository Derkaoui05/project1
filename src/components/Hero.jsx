import React from 'react'
import { HERO_CONTENT } from '../constants'
import profile from '../assets/profile.png'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <>
            <section id='home' className="border-b border-neutral-900 pb-4 lg:mb-36">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className='pb-16 text-6xl font-normal text-pretty tracking-wider lg:mt-16 lg:text-7xl'>DERKAOUI YASSIR</motion.h1>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-gradient-to-r text-transparent from-[#0B598D] to-[#1593E6] bg-clip-text text-4xl tracking-tight">
                                Full Stack Developer
                            </motion.span>
                            <motion.p
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="my-2 max-w-lg py-6 tracking-tight text-justify">
                                {HERO_CONTENT}
                            </motion.p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center relative">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{duration:1,delay:1}}
                                src={profile} alt="profile-picture" className='rounded-2xl  object-cover aspect-square' />
                            <motion.div 
                             initial={{ x: 100, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             transition={{duration:1,delay:1}}
                            className="absolute inset-0 bg-black/30"></motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
