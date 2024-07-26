import React from 'react'
import {PROJECTS } from '../PROJECT/constants'
import {motion} from 'framer-motion'

const Work = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1.5}}
         className="my-20 text-center text-4xl">projects</motion.h1>
        <div>
         
            {PROJECTS.map((project,index )=>(
                <div 
               key={index} className="mb-8 flex flex-warp lg:justify-center">
                    <motion.div   whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:0.5}} className="w-full lg:w-1/4">
                    <img src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className='mb-6 rounded'/></motion.div>
                      <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}} className='w-full max-w-xl lg:w-3/4' >
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className ='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key= {index} className="p-5 mr-2rounded bg-neutr900 px-2 py-1 text-sm font-medium text-purple-500">
                        {tech}
                        
                      </span>
                     
                      
                      
                     
                      
                    ))}
                      <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                ><button herf={project.url}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            
                >{project.Demo}</button></motion.div>
                    
                    
                </motion.div>
              
                
               </div>
                
              
            ))}
        
         </div>
    </div>
  )
}

export default Work