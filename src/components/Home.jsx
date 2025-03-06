import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import Typed from "typed.js";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react"

import akImage from "../images/ak.jpg";
import gifimage from "../images/df.gif";

function Home() {
  useEffect(() => {
    gsap.to(".box", {
      y: 10,
      rotation: 360,
      duration: 3,
    });
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Youtuber",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy()
    };
  }, []);

  return (
    <div
      className="main-container flex    max-md:h-[150vh] max-md:flex-col-reverse  "
      id="home"
    >
      <div className="  h-[80vh] w-1/2 max-md:w-full  flex flex-col justify-center items-center gap-15">
        <div className=" autotxt bk flex flex-col justify-center gap-4 pl-32 w-full max-[1380px]:mt-50 max-[480px]:mt-30 flex-wrap max-lg:w-full   max-lg:justify-center max-lg:pl-20  ">
          <motion.h1  initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:1}} className="text-white text-3xl  max-xl:text-2xl font-bold">
            Hello it's Me
          </motion.h1>
          <motion.h1 initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:1}} className="text-white text-4xl max-xl:text-2xl font-bold ">
            Atul Kumar Chourasia
          </motion.h1>
          <motion.h1 initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}} className="text-white text-4xl  max-xl:text-2xl font-bold">
            And I am a{" "}
            <span ref={el} className="text-cyan-500">
              Frontend Developer
            </span>
          </motion.h1>
          <motion.p initial={{opacity:0,translateY:"-100%"}}  whileInView={{opacity:1,translateY:"0"}} transition={{duration:0.5}}  className=" descri text-white text-xl max-lg:text-md leading-10  w-[29vw]  max-lg:w-full max-md:w-[60vw]">
            I'm a Web Devloper with experience for over 1 year expertise is to
            create and website design,frontened design and many more.
          </motion.p>
        </div>

        <div className="icons flex gap-12  flex-wrap  w-[80%]  pl-5 max-[1580px]:pl-0  max-[1390px]:gap-7 max-[1580px]:justify-center   max-md:gap-5 max-md:w-full">
          <a href="https://www.facebook.com/share/1E5hCScsJY/">
          <motion.div initial={{opacity:0,translateY:"-100px"}}  whileInView={{opacity:1,translateY:"0px"}} transition={{duration:1}} className="border-2 p-2 border-white rounded-full">
            <FaFacebook className="text-3xl text-cyan-300 cursor-pointer  max-md:text-xl  transition duration-300 ease-in-out hover:scale-[1.3]" />
          </motion.div>
          </a>
          <a href="https://www.instagram.com/atul_kumar_chourasia/?hl=en">
          <motion.div initial={{opacity:0,translateY:"-100px"}}  whileInView={{opacity:1,translateY:"0px"}} transition={{duration:0.7}}  className="border-2 p-2 border-white rounded-full" >
            <FaInstagram className="text-3xl text-cyan-300 cursor-pointer max-md:text-xl   transition duration-300 ease-in-out hover:scale-[1.3]" />
          </motion.div>
          </a>

          <a href="https://x.com/home?lang=en">
          <motion.div initial={{opacity:0,translateY:"-100px"}}  whileInView={{opacity:1,translateY:"0px"}} transition={{duration:0.5}}  className="border-2 p-2 border-white rounded-full">
            <FaSquareXTwitter className="text-3xl text-cyan-300 cursor-pointer max-md:text-xl   transition duration-300 ease-in-out hover:scale-[1.3]" />
          </motion.div>
          </a>

          <a href="https://github.com/atul64796">
          <motion.div initial={{opacity:0,translateY:"-100px"}}  whileInView={{opacity:1,translateY:"0px"}} transition={{duration:0.8}}  className="border-2 p-2 border-white rounded-full">
            <FaGithub className="text-3xl text-cyan-300 cursor-pointer max-md:text-xl   transition duration-300 ease-in-out hover:scale-[1.3]" />
          </motion.div>
          </a>

          <a href="https://www.linkedin.com/in/atul-kumar-chourasia-36494827a/">
          <motion.div initial={{opacity:0,translateY:"-100px"}}  whileInView={{opacity:1,translateY:"0px"}} transition={{duration:0.8}}  className="border-2 p-2 border-white rounded-full">
            <FaLinkedin className="text-3xl text-cyan-300 cursor-pointer  max-md:text-xl   transition duration-300 ease-in-out hover:scale-[1.3]" />
          </motion.div>
          </a>

          <a href="https://www.youtube.com/@AtulKumarChourasia">
          <motion.div initial={{opacity:0,translateY:"-100px"}}  whileInView={{opacity:1,translateY:"0px"}} transition={{duration:0.8}}  className="border-2 p-2 border-white rounded-full ">
            <FaYoutube className="text-3xl text-cyan-300 cursor-pointer  max-md:text-xl   transition duration-300 ease-in-out hover:scale-[1.3]" />
          </motion.div>
          </a>

        </div>
        <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}} transition={{duration:0.8}}  className="btn   w-[75%]">
          <motion.button    className="text-white border-2 p-4 font-bold rounded-4xl shadow-2xl hover:shadow-green-500 active:shadow-green-500 active:bg-green-400 active:text-black active:border-1   text-xl flex hover:bg-green-400 hover:text-black cursor-pointer transition duration-300 ease-in-out hover:font-bold max-md:m-auto max-lg:m-auto">
           <a href="/Atul-kumar-chourasia.pdf" download='myfile.pdf'> Download Resume</a>
          </motion.button>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}}   className="  h-[80vh] w-1/2 flex justify-center items-center max-md:w-full  ">
        <div className=" box h-[50vw]  w-[50vw] max-w-[450px] max-h-[450px]  z-[-1]  shadow-2xl shadow-cyan-50/100 border-6 rounded-full    max-lg:w-[350px] max-lg:h-[350px]">
          <img src={gifimage} alt="" className="rounded-full " />
          <img
            src={akImage}
            alt=""
            className="rounded-full  absolute bottom-0 "
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
