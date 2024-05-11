import React from 'react'
import { Menus } from '../constants'
import MenuItem from './MenuItem'
import { motion } from 'framer-motion'

const Menu = () => {
  return (
    <>
        <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{duration:1,delay:1.4}}
        className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-28 flex justify-center items-end  lg:items-center pb-8 lg:pb-0 z-50">
            <div className="px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,.3)] flex flex-row lg:flex-col items-center justify-center gap-5 duration-200 backdrop-blur-md">
                {
                    Menus && Menus.map((item,index)=>(
                        <MenuItem key={index} menu={item} index={index} />
                    ))
                }
            </div>
        </motion.div>
    </>
  )
}

export default Menu