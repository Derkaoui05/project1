import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import moveCursor from 'readline'
const Cursor = () => {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)
    const moveCursor = (e) => {
        gsap.to(cursorRef.current,{
            x:e.clientX,
            y:e.clientY,
            duration:0.2,
        });
        gsap.to(followerRef.current,{
            x:e.clientX,
            y:e.clientY,
            duration: 0.6,
        });
    };
    useEffect(()=>{
        gsap.set(cursorRef,{
            xPercent:100,
            yPercent:100
        });
        gsap.set(followerRef,{
            xPercent : -30,
            yPercent:-30,
        });
        window.addEventListener('mousemove', moveCursor)
    },[])

  return (
    <>
    <div ref={cursorRef} className="w-[6px] h-[6px] overflow-hidden bg-[#d34ded] fixed rounded-full z-[999] "></div>
    <div ref={followerRef} className="w-8 h-8 overflow-hidden bg-transparent fixed rounded-full z-[999] border-2 border-white "></div>
    </>
  )
}

export default Cursor