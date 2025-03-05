import React from "react";
import { motion } from "framer-motion"; // Use framer-motion for animations

import htmlimg from "../images/html.png";
import cssimg from "../images/css.png";
import javaimg from "../images/java.png";
import reactimg from "../images/react.png";
import tailwindimg from "../images/tailwind.png";

import teamimg from "../images/team.png";
import speakingimg from "../images/speaking.png";
import activelistening from "../images/listen.png";
import presentimg from "../images/present.png";
import problemimg from "../images/problem.png";


const skills = [
  { name: "HTML", img: htmlimg, level: "90%" },
  { name: "CSS", img: cssimg, level: "85%" },
  { name: "JavaScript", img: javaimg, level: "70%" },
  { name: "React", img: reactimg, level: "65%" },
  { name: "Tailwind", img: tailwindimg, level: "80%" },
];


const communication =[
{name:"Team Collaboration", img:teamimg, level:"75%"},
{name:"Public Speaking", img:speakingimg, level:"85%"},
{name:"Active Listening", img:activelistening, level:"75%"},
{name:"Presentation Skills", img:presentimg, level:"65%"},
{name:"Problem Solving", img:problemimg, level:"85%"},
];



function Skills() {
  return (
    <div id="skills" >
      <motion.h1   initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}} className="text-5xl text-white text-center mt-10 mb-36">My <span className="text-cyan-300 ">skills</span></motion.h1>
      <div className="h-full  border-white flex max-lg:flex-col max-lg:not-first:items-center gap-15">
      <div className=" w-1/2  max-lg:w-full flex items-center flex-col justify-center" >
      <motion.h1 initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}}  className="text-3xl text-white max-sm:mb-10">Technical Skills</motion.h1>
      {skills.map((skills,index)=>(
         <div key={index} className=" w-full max-lg:w-[80%] h-30 flex justify-center items-center gap-3 ">
          <img src={skills.img} alt={skills.name} className="h-14" />
          <div className="flex flex-col  w-[60%] max-sm:w-full gap-2">
          <span className="text-xl text-white">{skills.name}</span>
          <div className="bg-black h-2 rounded-4xl relative  ">
          <motion.div  initial={{ width: "0%" }}
          whileInView={{ width: skills.level }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-4xl relative "
                    style={{ maxWidth: skills.level }}>
         
          </motion.div>
          </div>
          </div>
        </div>
      ))}
      </div>
      <div className=" w-1/2 max-lg:w-[80%]   flex items-center flex-col justify-center" >
       <motion.h1 initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}} className="text-3xl text-white max-sm:mb-10">Communication Skills</motion.h1>
      {communication.map((skills,index)=>(
        
         <div key={index} className="  w-full h-30 flex justify-center items-center gap-3 ">
         
          <img src={skills.img} alt={skills.name} className="h-14" />
          <div className="flex flex-col  w-[60%] max-sm:w-full gap-2">
          <span className="text-xl text-white">{skills.name}</span>
          <div className="bg-black h-2 rounded-4xl relative  ">
          <motion.div  initial={{ width: "0%" }}
          whileInView={{ width: skills.level }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-blue-500 to-green-500  h-2 rounded-4xl relative "
                    style={{ maxWidth: skills.level }}>
         
          </motion.div>
          </div>
          </div>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default Skills;
