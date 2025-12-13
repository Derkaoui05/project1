import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';
import OptimizedImage from '../common/OptimizedImage';
const Projects = () => {
  return (
    <>
      <section id="projects" className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl text-neutral-500"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-6xl lg:w-5/6 flex flex-col lg:flex-row items-start gap-6"
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 lg:h-64 object-cover rounded-lg border border-neutral-800 hover:border-[#0B598D] transition-colors duration-300"
                    containerClassName="w-full h-48 lg:h-64"
                  />
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-2/3">
                  <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
                  <p className="mb-4 text-neutral-400 leading-relaxed max-w-2xl text-justify">{project.description}</p>
                  <div className="mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="mr-2 mb-2 inline-block rounded bg-neutral-900 text-[#0B598D] px-2 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    target="_blank"
                    to={project.url}
                    className="inline-block rounded-lg border border-[#0B598D] bg-transparent px-6 py-2 text-[#0B598D] transition-all duration-300 hover:bg-[#0B598D] hover:text-white hover:shadow-lg hover:shadow-[#0B598D]/25"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
