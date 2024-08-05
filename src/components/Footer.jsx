import React from 'react'
import { motion } from 'framer-motion'
import { RiInstagramFill } from 'react-icons/ri'
import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div id='contact' className="border-b border-neutral-900 pb-5">
                <div className="h-full flex flex-col  gap-8 items-center justify-between p-10 sm:p-7">
                    <motion.h2 whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: .5 }}
                        className=' text-center text-4xl text-neutral-500'>Let's Talk</motion.h2>
                    <div className=" flex items-center justify-center gap-8 sm:gap-5">
                        <motion.a 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:.5}}
                            href="https://www.linkedin.com/in/derkaoui-yassir-497b5a298/"
                            className="box font-medium text-white flex items-center justify-center gap-3 flex-col md:flex-row"
                        >
                            <FaLinkedin className=" text-white text-3xl hover:scale-125 cursor-pointer" />
                            <p>Linkedin</p>
                        </motion.a>
                        <motion.a
                           whileInView={{opacity:1,x:0}}
                           initial={{opacity:0,x:-100}}
                           transition={{duration:1}}
                            href="https://github.com/Derkaoui05"
                            className="box font-medium text-white  flex items-center justify-center gap-3 flex-col md:flex-row"
                        >
                            <IoLogoGithub className=" text-white text-3xl hover:scale-125 cursor-pointer" />
                            <p>Github</p>
                        </motion.a>
                        <motion.a
                           whileInView={{opacity:1,x:0}}
                           initial={{opacity:0,x:-100}}
                           transition={{duration:1}}
                            href="https://www.instagram.com/d.ysr777"
                            className="box font-medium text-white  flex items-center justify-center gap-3 flex-col md:flex-row"
                        >
                            <RiInstagramFill className=" text-white text-3xl hover:scale-125 cursor-pointer" />
                            <p>Instagram</p>
                        </motion.a>
                    </div>
                    <motion.div 
                       whileInView={{opacity:1,x:0}}
                       initial={{opacity:0,x:100}}
                       transition={{duration:1}}
                    className="sm:text-[12px] text-3xl">
                        | Developed By <span className='text-purple-500  duration-200 hover:border-b hover:border-purple-800 hover:cursor-pointer transition-colors hover:text-purple-800'> Derkaoui Yassir </span>
                        <a href="#"></a> |
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Footer