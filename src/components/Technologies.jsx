import React from 'react'
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { animate, motion } from "framer-motion";

const wiggle = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const Technologies = () => {
  return (
    <div>
      <div className="border-b border-neutral-800 pb-24">
        <div className="pb-4">
            <motion.h2 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.0 }}
            className='my-20 text-center text-4xl mt-8 w-full lg:w-1/2 lg:p-8 mx-auto pb-0 mb-2'>Technologies</motion.h2>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.0 }}
            className="flex flex-wrap items-center justify-center gap-4">
              <motion.div 
              variants={wiggle(1.0)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-blue-700">
                  <FaPython className='text-6xl text-yellow-400 '/>
              </motion.div>
              <motion.div 
              variants={wiggle(0.8)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                  <SiPytorch className='text-6xl text-orange-500 '/>
              </motion.div>
              <motion.div 
              variants={wiggle(1.0)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                  <SiOpencv className='text-6xl text-blue-500 '/>
              </motion.div>
              <motion.div 
              variants={wiggle(1.2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                  <SiJupyter className='text-6xl text-orange-500 '/>
              </motion.div>
              <motion.div 
              variants={wiggle(1.2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                  <SiMysql className='text-6xl text-red-500 '/>
              </motion.div>
              <motion.div 
              variants={wiggle(1.0)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-black">
                  <SiJavascript className='text-6xl text-yellow-500'/>
              </motion.div>
              <motion.div 
              variants={wiggle(0.8)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                  <SiGit className='text-6xl text-orange-500 '/>
              </motion.div>
              <motion.div 
              variants={wiggle(1.0)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                  <SiCplusplus className='text-6xl text-blue-700 '/>
              </motion.div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
