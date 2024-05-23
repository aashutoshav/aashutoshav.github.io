import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 px-4 lg:px-16'>
      <div className="pb-4">
        <h2 
        className='my-20 text-center text-4xl mt-8 w-full lg:w-3/4 lg:p-8 mx-auto pb-0 mb-2'>Research Experience & Projects</h2>
      </div>
      <div className='mx-auto'>
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full flex flex-col pb-16">
            <motion.h3
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className='text-2xl text-center text-white mb-8'>
                  <span className="inline-block border-b-2 border-transparent transition-colors duration-300 hover:border-yellow-400">{project.title}</span>
                </motion.h3>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 2.0 }}
            className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center`}>
              <img src={project.image} alt={project.title} className="rounded-3xl w-full lg:w-[35%] object-cover mb-4 lg:mb-0 lg:mr-8 lg:ml-8" />
              <div className="text-white tracking-narrow font-light px-4 flex flex-col justify-center lg:text-left w-full lg:w-1/2">
                <p className="mt-4">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold">Ideas</h4>
                  <ul className="list-disc list-inside">
                    {project.ideas.map((idea, index) => (
                      <li key={index}>{idea}</li>
                    ))}
                  </ul>
                </div>
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="mt-4 text-amber-500 underline hover:text-cyan-500">View Code on GitHub</a>
                <a href="https://drive.google.com/file/d/14ttHASOqPl0FLSXCOF3tsY_m7PxlAjVM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className=" text-amber-500 underline hover:text-cyan-500">View Description in my Resume</a>
              </div>
            </motion.div>
            {
              project.deets && (
                <div className="mt-8 text-white text-center font-semibold">
                  <ul className="list-disc list-inside text-lg"> {/* Adjust font size here */}
                    {project.deets.map((detail, index) => (
                      <li key={index} className="mb-2">{detail} •</li>
                    ))}
                  </ul>
                </div>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
