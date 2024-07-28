import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { IoLogoJavascript, IoLogoFirebase, IoLogoFigma } from 'react-icons/io5';
import { SiAdobeillustrator, SiCanva, SiAdobephotoshop, SiGamemaker, SiUnrealengine } from 'react-icons/si';
import { BiLogoBlender, BiLogoUnity } from 'react-icons/bi';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 mx-auto">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        TECH
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-red-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoTailwindCss className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoFirebase className="text-7xl text-red-700" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
      </motion.div>
      <br />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoFigma className="text-7xl text-red-900" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAdobeillustrator className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCanva className="text-7xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAdobephotoshop className="text-7xl text-cyan-800" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoBlender className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoUnity className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGamemaker className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiUnrealengine className="text-7xl text-gray-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
