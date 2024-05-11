import React from 'react'
import logo from '../assets/logo.png'
import { FaGithub,FaInstagram,FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <>
        <nav id='home' className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className='mx-2 w-10' alt="" />
            </div>
            <div className='m-8 flex items-center justify-center cursor-pointer gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaSquareXTwitter />
            </div>
        </nav>
    </>
  )
}

export default Navbar