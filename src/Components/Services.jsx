import React from 'react'
import { CgWebsite } from "react-icons/cg";
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {DiRedis} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {FaInstagram} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaCamera} from "react-icons/fa"
import Rana from "../assets/RAN logo1.png"
import ran from '../assets/Rancom.jpeg'
import { BsAppIndicator } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { TbHealthRecognition } from "react-icons/tb";
import { GiWeightScale } from "react-icons/gi";
import { FaAddressCard } from "react-icons/fa";
import {motion} from "framer-motion"
import { IoLogoApple } from "react-icons/io";
import { SiDavinciresolve } from "react-icons/si";

const Services = () => {
  return (
    
    <div className="border-b border-neutral-800  pb-24">
        <motion.h1
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Our Services</motion.h1>

    <div className=" flex items-center text-center justify-center gap-6 h-80 ">
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:0.5}}
        className="rounded-2xl border-4 h-80 w-60 border-neutral-800 p-20 ">
            <CgWebsite className="text-7xl text-cyan-400 "/><br/>
            <h1>Web design& <br/>Development</h1>
        </motion.div>
        <motion.div  whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1.5}} className="rounded-2xl h-80 w-60 border-4 border-neutral-800 p-20">
            < FaYoutube className=" text-7xl text-red-700"/><br/>
            <h1 >Content <br/>Makeing</h1>
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x: 100}}
          transition={{duration:0.5}}
        className="rounded-2xl h-80 w-60 border-4 border-neutral-800 p-20">
            <BsAppIndicator  className="text-7xl text-cyan-400"/><br/>
            <h1>App Design& <br/>Development</h1>
        </motion.div>
        
      
       
    </div>
    <br/>
    <div className=" flex items-center text-center justify-center gap-6 h-80">
        <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x: -100}}
            transition={{duration:1}}
        className="rounded-2xl h-80 w-60 border-4 border-neutral-800 p-20">
            <FaInstagram className="text-7xl text-pink-300 "/><br/>
            <h1>Insta Poster</h1>
        </motion.div>
        <div className="rounded-2xl h-80 w-60 border-4 border-neutral-800 p-20">
            <IoLogoApple className="  text-7xl text--400"/><br/>
            <h1>Logo<br/> Design</h1>
        </div>
        <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x: 100}}
            transition={{duration:1}}
         className="rounded-2xl h-80 w-60 border-4  border-neutral-800 p-20">
            <FaCamera className="text-7xl text-blue-400"/><br/>
            <h1>Photography</h1>
        </motion.div>
        
      
       
    </div>
    <br/>
    <div className=" flex items-center text-center justify-center gap-6 h-80">
        <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x: -100}}
            transition={{duration:1}}
        className="rounded-2xl h-80 w-60 border-4 border-neutral-800 p-20">
            <FaAddressCard  className="text-7xl text-cyan-400 "/><br/>
            <h1>Digital <br/> visting Card</h1>
        </motion.div>
        <motion.div  whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y: 100}}
           transition={{duration:1.5}} className="rounded-2xl h-80 w-60 border-4 border-neutral-800 p-20">
            <TbHealthRecognition className="  text-7xl text-green-400"/><br/>
            <h1>Nutrition</h1>
        </motion.div>
        <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x: 100}}
            transition={{duration:1}}
         className="rounded-2xl h-80 w-60 border-4 border-neutral-800 p-20">
            <SiDavinciresolve className="text-7xl text-blue-400"/><br/>
            <h1>Video Editing</h1>
        </motion.div>
        
      
       
    </div>
   
    </div>
  
    
  )
}

export default Services