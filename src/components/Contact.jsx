import React ,{useRef}from 'react'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { motion } from "motion/react"

function Contact() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
   const form = useRef();

const onSubmit = () =>{
    

    emailjs.sendForm(
        "service_o0b4jbd",
        "template_tl1x82e",
        form.current,{
            publicKey : "syE1G3J4Ym9FEWtF8"
        }).then(()=>{
            console.log('Success');
            alert("Email Sent Successfully !")
            form.current.reset();
        }).catch((errors)=>{
            console.log("FAILED..",errors)
        });
   
};


  return (
    <div className='h-[100vh]' id='contact'>
      <motion.h1   initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}} className='text-4xl text-white text-center underline decoration-3  font-bold'>Contact <span className='text-cyan-400'>Me</span></motion.h1>
      <div className='  flex justify-center items-center mt-10'>
        <div className='w-full rounded-lg flex justify-center  items-center h-full  '> 
    
        <div className=' text-white w-5xl h-full  max-lg:w-full p-10' >
        <form action="" className=' flex flex-col justify-center   items-center gap-10' ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex w-full justify-evenly  max-lg:flex-col max-lg:gap-6'>
           
            <div className='flex flex-col gap-4 w-[45%] max-lg:w-[95%] m-auto '>
            <motion.input initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}}  transition={{duration:0.5}} type="text" placeholder='Enter Your Name' {...register("name",{required:true})} className=' border-2 border-cyan-300 h-15 relative pl-4 rounded-lg ' />
            {errors.name && <span className='pl-3 text-sm text-cyan-300 mb-4'>Name is required</span>}
            </div>

            <div className='flex flex-col gap-4 w-[45%] max-lg:w-[95%] m-auto '>
            <motion.input   initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.7}}  type="tel" placeholder='Enter Your Phone Number' {...register("phone",{required:true})} className=' border-2 border-cyan-300 h-15 pl-4 rounded-lg' />
            {errors.phone && <span className='text-sm pl-3 text-cyan-300 mb-4'>Phone is required</span>}
            </div>

            </div>
            <div className='flex flex-col gap-4 w-[97%]'>
            <motion.input initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.8}} type="email" placeholder='Enter Your Email ' {...register("email",{required:true})} className='w-[97%] border-2 border-cyan-300 h-15 rounded-lg pl-4 m-auto' />
            {errors.email && <span className='text-sm text-cyan-300 pl-6'>Email is required</span>}
            </div>
            <motion.textarea initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.9}} className='border-2 p-6 w-[95%] rounded-xl border-cyan-300 ' {...register("message",{required:true})} placeholder='Write Some message' rows="9"/>
            <motion.input initial={{opacity:0,translateY:"-100%"}}  whileInView={{opacity:1,translateY:"0%"}} transition={{duration:0.2}} type="submit" className='border-2  w-full rounded-full  p-4 text-2xl hover:bg-cyan-300 transition ease-in hover:text-black hover:shadow-2xl hover:shadow-cyan-400 hover:font-bold bg-green-400 text-black border-black hover:border-0 cursor-pointer' />
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
