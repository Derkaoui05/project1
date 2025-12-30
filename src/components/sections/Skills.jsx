import React, { useState } from 'react';
import {
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiWordpressLine,
} from 'react-icons/ri';
import {
  SiDocker,
  SiDotnet,
  SiGit,
  SiLaravel,
  SiMysql,
  SiSpring,
  SiTypescript,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const OrbitIcon = ({ Icon, index, total, radius, isPaused }) => {
  const angle = (index / total) * 2 * Math.PI;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: isPaused ? 0 : 360
      }}
      transition={{ 
        opacity: { duration: 0.5, delay: index * 0.1 },
        scale: { duration: 0.5, delay: index * 0.1 },
        rotate: { 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear',
          delay: index * 0.1 
        }
      }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        x: x,
        y: y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
      className="cursor-pointer"
    >
      <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
        <Icon className="text-6xl text-cyan-400" />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const icons = [
    RiReactjsLine,
    RiNextjsLine,
    RiTailwindCssLine,
    SiTypescript,
    RiJavaLine,
    RiWordpressLine,
    SiSpring,
    SiDotnet,
    SiLaravel,
    SiMysql,
    SiGit,
    SiDocker,
  ];

  // Calculate radius based on screen size
  const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 250;

  return (
    <section id="skills" className="border-b border-neutral-900 pb-24 min-h-screen">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-neutral-500 text-4xl"
      >
        Tech Stack
      </motion.h2>
      
      <div className="flex flex-col items-center justify-center px-4">
        <motion.div
          animate={{ rotate: isPaused ? 0 : 360 }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="relative"
          style={{ 
            width: radius * 2 + 200, 
            height: radius * 2 + 200 
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Orbit path */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-800 opacity-30"
            style={{ 
              width: radius * 2, 
              height: radius * 2 
            }}
          />

          {/* Orbiting icons */}
          {icons.map((Icon, index) => (
            <OrbitIcon
              key={index}
              Icon={Icon}
              index={index}
              total={icons.length}
              radius={radius}
              isPaused={isPaused}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;