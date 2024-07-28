import React from 'react';
import about from '../assets/Rancompany.jpeg';
import { ABOUT_TEXT } from '../PROJECT/constants';
import logo from '../assets/RAN logo1.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Us</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center gap-10">
            <img
              className="rounded-2xl w-full lg:w-auto"
              src={about}
              alt="About Ran company"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:p-8"
        >
          <img className="p-1 w-40 h-auto mb-4" src={logo} alt="Ran logo" />
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg text-neutral-700">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
