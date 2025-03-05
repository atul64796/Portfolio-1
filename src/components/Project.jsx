import React from "react";

import Projectx from "../assets/Projectx.js";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination ,Autoplay } from "swiper/modules";
import { motion } from "motion/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Project() {
  return (
    <div className="h-[110vh]  " id="proj">
      <motion.h1 initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}}  className="text-4xl text-white text-center pt-20 underline font-bold  decoration-2">
        Project<span className="text-cyan-300">s</span>
      </motion.h1>
      
      <div className="flex mt-30 p-5 ">
        <Swiper
          modules={[Navigation, Pagination,Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay:2000,
            disableOnInteraction:false
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation // Enables arrows
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
            869: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 }, // Laptops & Desktops
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="Project-container flex items-center justify-center   ">
          {Projectx.map((project, index) => {
            if (index >= 5) return;
            return (
                <SwiperSlide key={project.id}> <div key={project.id} className="flex justify-center  h-[65vh] ">
                 <div  initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}} className=" w-[94%] bg-gradient-to-r  cursor-grab h-[59vh] p-9 border-1 border-cyan-300 flex flex-col gap-6 shadow-xl shadow-green-300 rounded-3xl bg-[#080d23]">
                  <h1  initial={{opacity:0,translateX:"-100%"}}  whileInView={{opacity:1,translateX:"0"}} transition={{duration:0.5}} className=" text-3xl text-center font-bold text-white">
                    {project.title}
                  </h1>
                  <img src={project.img} alt="" className="h-[28vh] w-full rounded-2xl " />
                  <p className=" text-xl text-center text-white">{project.desc}</p>
                </div>
              </div></SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
