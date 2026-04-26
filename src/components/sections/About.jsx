import { motion } from 'framer-motion';
import profile from '../../assets/profile.png';
import { ABOUT_TEXT } from '../../data/personal';
import OptimizedImage from '../common/OptimizedImage';

const About = ({ isImageHere = false }) => {
  return (
    <>
      <section id="about" className="border-b border-neutral-900 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-neutral-500 text-4xl"
        >
          Meet Me
        </motion.h2>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="relative flex items-center justify-center w-full max-w-[400px] mx-auto aspect-square">
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
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 text-justify leading-loose">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
