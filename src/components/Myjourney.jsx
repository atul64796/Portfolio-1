import React from 'react'
import { motion } from "motion/react"




function Myjourney() {
    
  return (
    <div className=' mt-20 ' id='journey'>
        <motion.h1 initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}}  className='text-white font-bold text-4xl text-center underline '>My <span className='text-cyan-400'>Journey</span></motion.h1>
        
    
    
      <div className="journey-container  h-full flex justify-center items-center pt-16 max-lg:flex-col gap-14 ">
        <div className='jr-left w-1/2  flex flex-col justify-center gap-5 items-center max-lg:w-[90%] '>

            <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}} transition={{duration:0.5}} className='border-1 w-[40vw]   p-10 flex flex-col  gap-5 shadow-2xl shadow-cyan-300 max-lg:w-full rounded-xl'>
                    <h1 className='text-white text-3xl  font-bold max-lg:text-2xl'>📚 Education</h1>
                    <p className='text-xl text-white max-lg:text-lg'>10th Grade – Xavier’s Model Secondary School</p>
                    <p className='text-xl text-white max-lg:text-lg'>12th Grade – Jagacha High School </p>
                    <p className='text-xl text-white max-lg:text-lg'>Currently Pursuing BCA – Netaji Subhas Engineering College (Current SGPA: 7.6)</p>
            </motion.div>
            <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}} transition={{duration:0.5}} className='border-1 w-[40vw]  p-10 flex flex-col shadow-2xl shadow-cyan-300 gap-5 max-lg:w-full rounded-xl'>
                    <h1 className='text-white text-3xl  font-bold max-lg:text-2xl'>💼 Internship Experience</h1>
                    <h2 className='text-white text-2xl  font-bold max-lg:text-xl'>GAOTEK (3-Month Internship)</h2>
                    <p className='text-xl text-white max-lg:text-lg'>Technologies Learned: HTML, CSS, JavaScript, SQL, PHP</p>
                    <p className='text-lg text-white max-lg:text-sm'>During my internship, I learned to build e-commerce websites using WordPress, HTML, CSS, JavaScript, SQL, and PHP. I worked on frontend development, customizing themes and plugins, and gained experience in backend development by managing databases with PHP and SQL. Additionally, I explored SEO, security, and website optimization to enhance performance.</p>       
            </motion.div>
        </div>
        
        <div className='jr-left w-1/2  flex flex-col justify-center gap-5 items-center max-lg:w-[90%] '>
            <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}} transition={{duration:0.5}}  className='border-1  w-[40vw]  p-10 flex flex-col shadow-2xl shadow-cyan-300   gap-5 max-lg:w-full rounded-xl'>
                    <h1 className='text-white text-3xl  font-bold max-lg:text-2xl'>🎯 Future Goals</h1>
                    <p className='text-xl text-white max-lg:text-lg'>Become a Full-Stack Developer by mastering React, Node.js, and MongoDB.</p>
                    <p className='text-xl text-white max-lg:text-lg'>Build and launch web applications, including a classroom management system, a doctor appointment booking app, and a women’s safety application.</p>
                    <p className='text-xl text-white max-lg:text-lg'>Improve problem-solving skills through DSA and competitive coding.</p>
            </motion.div>
            <motion.div initial={{opacity:0,scale:0}}  whileInView={{opacity:1,scale:1}} transition={{duration:0.5}} className='border-1 w-[40vw]   shadow-2xl shadow-cyan-300 p-10 flex flex-col  gap-5 max-lg:w-full rounded-xl'>
                    <h1 className='text-white text-3xl  font-bold'>📜 Certifications</h1>
                    <p className='text-xl text-white max-lg:text-lg'>Internship Certification – GAOTEK (Web Development)
                    Successfully completed a 3-month internship at GAOTEK, gaining hands-on experience in e-commerce website development using WordPress, HTML, CSS, JavaScript, SQL, and PHP.</p>
                    <p className='text-xl text-white max-lg:text-lg'>Internship Certification – GAOTEK (Digital Marketing)
                    Learned key digital marketing strategies, including SEO, social media marketing, content marketing, and analytics, to enhance online brand presence and engagement.</p>
                    
            </motion.div>
        </div>
      </div>
   
    </div>
  )
}

export default Myjourney
