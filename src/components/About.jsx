import React from "react";
import { useState } from "react";
import { motion } from "motion/react"

import akImage from "../images/ak.jpg";
import gifimage from "../images/df.gif";




function About() {
    const [isExpanded, setisExpanded] = useState(false)

    const toggleReadMore = () => {
        setisExpanded(!isExpanded)
        
    }


  return (
    <div id="abt" >
      <div className=" about-ct flex  space-evenly  p-5   h-[100vh]">
       
    <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="right flex justify-center items-center w-1/2 max-md:hidden  ">

      <div  className=" box h-[40vw] flex justify-center  w-[40vw] max-w-[420px] max-h-[420px]    shadow-2xl shadow-cyan-50/100 rounded-full animate-spinmax-lg:w-[350px] max-lg:h-[350px]">
          <img src={gifimage} alt="" className="rounded-full  " />
          <img src={akImage} alt="" className="rounded-full absolute bottom-1  " />
        </div>
        </motion.div>

        <div className="left w-1/2    max-md:w-full rounded-4xl  flex flex-col justify-center items-center gap-5 p-6">
          <motion.h1 initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}}  className="text-4xl text-white text-center font-bold underline decoration-2">
            About <span className="text-cyan-400">Me</span>
          </motion.h1>
          <p className=" pera text-white text-xl p-7 leading-10 transition duration-200 ease-in-out  ">
            I am a passionate Web Developer with hands-on experience in frontend
            and backend technologies. I have successfully completed a 3-month
            internship at Gao-Tek, where I worked on e-commerce and blog
            websites, gaining real-world experience in web development. I have a
            strong command of HTML, CSS, JavaScript, React.js, MongoDB, and
            MySQL. My expertise extends to building dynamic and responsive web
            applications {isExpanded && (
                <span >
                    using React.js and Node.js. I have a strong understanding of
                    RESTful APIs and have worked with MongoDB and MySQL databases. I
                    have also worked with Git and GitHub for version control and
                    have deployed websites on platforms like Heroku and Netlify. I
                    am a quick learner and a team player with excellent problem
                    solving and communication skills. I am looking for an
                    opportunity to work with a dynamic team to enhance my skills and
                    contribute to the growth of the organization.
                </span>
            )}
          </p>
          <div className="w-full flex justify-center" >

          <button
        onClick={toggleReadMore}
        className=" read  mt-3  text-xl px-16 py-3 shadow-2xl hover:shadow-green-500   border-2 rounded-full text-white font-semibold  hover:bg-green-500  hover:text-black cursor-pointer transition duration-200"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
