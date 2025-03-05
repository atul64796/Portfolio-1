import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { motion } from "motion/react"

function Navbar() {
    
  const [open, setopen] = useState(false)
 




  return (
    <>
     <FaBars className='bar-line fixed' onClick={(()=>{
      setopen(true);
     })}/>
    <nav style={{left:open ?'0%':"-100%"}} >
   
    <TbXboxXFilled className="bar-cross" onClick={(()=>{
    setopen(false);
    })}/>
    <motion.span initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}}  className='Logo'>Portfolio</motion.span>
        <ul>
        <motion.li  initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.2}} > <a href="#home" className='lst' onClick={(()=>{setopen(false)})}>Home</a></motion.li>
        <motion.li initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} > <a href="#abt" className='lst' onClick={(()=>{setopen(false)})}>About</a></motion.li>
        <motion.li initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} > <a href="#skills" className='lst' onClick={(()=>{setopen(false)})}>Skills</a></motion.li>
        <motion.li initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} > <a href="#journey" className='lst' onClick={(()=>{setopen(false)})}>My Journey</a></motion.li>
        <motion.li initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} > <a href="#proj" className='lst' onClick={(()=>{setopen(false)})}>Projects</a></motion.li>
        <motion.li initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} > <a href="#contact" className='lst' onClick={(()=>{setopen(false)})}>Contact</a></motion.li>
       
        </ul>
    </nav>
    </>
  )
}

export default Navbar
