import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaYoutube, FaInstagram, FaCamera, FaAddressCard } from "react-icons/fa";
import { BsAppIndicator } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io";
import { TbHealthRecognition } from "react-icons/tb";
import { SiDavinciresolve } from "react-icons/si";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Our Services
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <CgWebsite className="text-7xl text-cyan-400 mb-4" />
          <h1>Web Design & Development</h1>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <FaYoutube className="text-7xl text-red-700 mb-4" />
          <h1>Content Creation</h1>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <BsAppIndicator className="text-7xl text-cyan-400 mb-4" />
          <h1>App Design & Development</h1>
        </motion.div>
      </div>
      
      <br/>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <FaInstagram className="text-7xl text-pink-300 mb-4" />
          <h1>Instagram Marketing</h1>
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center">
          <IoLogoApple className="text-7xl mb-4" />
          <h1>Logo Design</h1>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <FaCamera className="text-7xl text-blue-400 mb-4" />
          <h1>Photography</h1>
        </motion.div>
      </div>

      <br/>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <FaAddressCard className="text-7xl text-cyan-400 mb-4" />
          <h1>Digital Visiting Card</h1>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <TbHealthRecognition className="text-7xl text-green-400 mb-4" />
          <h1><a href='https://mr-health-nutrition-centre.vercel.app/'>Nutrition</a></h1>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="rounded-2xl border-4 border-neutral-800 p-20 w-60 h-80 text-center"
        >
          <SiDavinciresolve className="text-7xl text-blue-400 mb-4" />
          <h1>Video Editing</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
