import React from 'react'
import logo from '../assets/RAN logo1.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaYoutube} from 'react-icons/fa'

import {FaInstagram} from "react-icons/fa"

const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
      x:0,
      opacity:1,
      transition:{duration: 0.5, delay : delay},
  },})

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center '>
            <img 
              variants={container(0)}
              initial="hidden"
              animate="visible"
            className='p-4 w-40 h-30'  src={logo}/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4">

          <a href="#"> <FaLinkedin/></a> 
          <a href="https://www.instagram.com/_key_of_pc_/"> <FaInstagram/></a> 
          <a href="https://www.youtube.com/@Codingjr-uf3sh"><FaYoutube/></a>
            
            

        </div>

    </nav>
  )
}

export default Navbar