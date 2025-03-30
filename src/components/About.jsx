import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  // Define our content separately for better control
  const present_ac = "I am presently a Research Intern at Microsoft, where I'm working on the intersection of ML and Systems.";
  const aboutContent = ABOUT_TEXT;
  
  return (
    <div>
      <div className='border-b border-neutral-800'>
        <div className="pb-4">
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.0 }}
            className='my-20 text-center text-4xl mt-8 w-full lg:w-1/2 lg:p-8 mx-auto pb-0 mb-2'
          >
            About Me
          </motion.h2>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.0 }}
          className='w-full lg:w-1/2 flex mx-auto pb-16'
        >
          <div className="text-white tracking-narrow font-light px-4 flex flex-col justify-center text-center">
            <p className="font-medium mb-4">
              {present_ac}
            </p>
            <p className="mt-4">
              {aboutContent}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;