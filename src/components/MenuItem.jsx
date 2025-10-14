import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ menu, index }) => {
    const [isHover,setIsHover] = useState(false)
    return (
        <>
            <Link to={menu.uri} className='w-10 h-10 rounded-full flex items-center justify-center group cursor-pointer hover:bg-gradient-to-br 
            hover:from-blue-100 hover:via-blue-300 hover:to-blue-500 relative'
            onMouseEnter={()=>setIsHover(true)} aria-description='' onMouseLeave={()=>setIsHover(false)}
            >
                <menu.Icon className={`text-[#a7a7a7] group-hover:text-[#020010] text-xl`} />
               <AnimatePresence>
                {
                    isHover && (
                        <motion.div 
                        initial={{opacity:0,x:-25}}
                        animate={{opacity:1,x:0}}
                        exit={{opacity:0,x:-25}}
                        transition={{duration:0.5}}
                        className='absolute hidden md:block bg-white rounded-md px-6 py-2 -left-[120px]  ' style={{boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)"}}>
                        <p className='text-[#020010] after:absolute after:-right-1 after:top-3 after:w-2 after:h-2 after:bg-white after:rotate-45'>
                            {menu?.name}
                        </p>
                    </motion.div>
                    )
                }
               </AnimatePresence>
            </Link>

        </>
    )
}

export default MenuItem