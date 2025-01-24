import React from 'react';
import closeup from '../assets/pic.png';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pb-16 border-b border-neutral-800">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="transition ease-in-out bg-gradient-to-r from-orange-600 via-yellow-500 to-red-600 bg-clip-text pb-12 text-4xl tracking-narrow lg:mt-16 lg:text-6xl text-transparent animate-gradient bg-300% mt-8 sm:mt-12 md:mt-16"
          >
            Aashutosh A V
          </motion.span>
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center mt-4"
          >
            <img
              src={closeup}
              alt="Aashutosh A V"
              className="rounded-2xl w-full lg:w-auto h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
