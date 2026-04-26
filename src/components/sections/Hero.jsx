import { motion } from 'framer-motion';
import profile from '../../assets/profile.png';
import { HERO_CONTENT } from '../../data/personal';
import OptimizedImage from '../common/OptimizedImage';
import SEO from '../common/SEO';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ isImageHere = true }) => {
  return (
    <>
      <SEO />
      <section id="home" className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font text-pretty tracking-wider lg:mt-16 lg:text-7xl"
              >
                DERKAOUI YASSIR
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r text-transparent from-[#0B598D] to-[#1593E6] bg-clip-text text-4xl tracking-tight"
              >
                Full Stack Developer & IT Trainer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-lg py-6  text-justify leading-relaxed"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center relative w-full max-w-[500px] mx-auto aspect-square">
              {isImageHere && (
                <motion.div
                  layoutId="profile-image"
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-10 w-full h-full"
                >
                  <OptimizedImage
                    src={profile}
                    alt="profile-picture"
                    className="rounded-2xl object-cover w-full h-full"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-2xl pointer-events-none"></div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
