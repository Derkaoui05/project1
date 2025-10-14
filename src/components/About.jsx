import React from 'react'
import about from '../assets/dev.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <section id='about' className="border-b border-neutral-900 pb-4">
                <motion.h2 
                  initial={{opacity:0,y:100}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:1.5}}
                className='my-20 text-center text-neutral-500 text-4xl'>About Me</motion.h2>
                <div className="flex flex-wrap">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex items-center justify-center">
                            <img src={about} alt="aboutImg" className='rounded-2xl' />
                        </div>
                    </motion.div>
                    <motion.div
                     whileInView={{opacity:1,x:0}}
                     initial={{opacity:0,x:100}}
                     transition={{duration:1}}
                    className="w-full lg:w-1/2">
                        <div className="flex items-center justify-center lg:justify-start">
                            <p className='my-2 max-w-xl py-6 text-justify'>{ABOUT_TEXT}</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default About