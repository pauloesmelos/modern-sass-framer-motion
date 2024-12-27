import { motion } from 'framer-motion';
import React from 'react';
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const url_image = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section className="w-full h-[85vh] pt-[100px] lg:pt-[200px]">
      <div className="w-full h-full max-w-[1300px] mx-auto px-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* hero */}
          <motion.div 
            initial={{ opacity: 0, transform: "translateX(-30px)" }} 
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: .4, ease: "easeInOut" }}
            className="w-full lg:col-span-1 flex flex-col gap-3 lg:gap-7"
          >
            <span className="text-sm text-neutral-400 font-medium">
              ___Innovation Requires Courage
            </span>
            <h1 className="text-5xl font-bold text-black">
              Beign Innovatores Requires Courage
            </h1>
            <p className="text-neutral-800">
              Understanding your capacity for risk can guide your business into untapped opportunities, helping you navigate growth.
            </p>
            <div className="flex items-center gap-10 mt-4 lg:mt-10">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }} 
                className="px-5 py-3 bg-black text-white font-medium rounded-full duration-100 hover:bg-purple-600 btn-shadow"
              >
                Book
              </motion.button>
              <motion.div whileHover={{ transform: "translateY(-5px)" }} className="flex items-center gap-4 cursor-pointer group">
                <div className="p-3 bg-black group-hover:bg-purple-700 rounded-3xl flex flex-col items-center">
                  <FaPlay size={15} className="text-white" />
                </div>
                <span className="text-purple-600 text-sm font-medium">
                  Watch Video
                </span>
              </motion.div>
            </div>
          </motion.div>
          {/* image */}
          <motion.div 
            initial={{ opacity: 0, transform: "translateY(50px)" }} 
            whileInView={{ opacity: 1, transform: "translateY(0)" }} 
            transition={{ duration: .4 }} 
            className="w-[80%] lg:w-full h-[300px] md:h-[400px] lg:h-[50vh] lg:col-span-1 relative]"
          >
            <img className="object-cover w-full h-full rounded-[50px] shadow-lg shadow-purple-400 border-b-4 border-b-purple-600" src={url_image} />
            {/* overlay */}
            <div className="w-full h-full absolute top-0 left-0 bg-purple-600/40 duration-200 rounded-[50px]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero;