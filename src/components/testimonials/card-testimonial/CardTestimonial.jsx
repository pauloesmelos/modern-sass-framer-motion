import { motion } from 'framer-motion';
import React from 'react';

const CardTestimonial = ({ name, feedback, image, position }) => {
  return (
    <motion.div 
    className="w-full max-w-[90%] border shadow-lg flex flex-col gap-4 px-3 py-6 rounded-md cursor-pointer"
    whileHover={{ boxShadow: "0 0 15px #8212DB", scale: 1.06 }}
    >
      <div className="flex justify-center items-center gap-2">
        <img className="object-cover w-[55px] h-[55px] rounded-full border-2 border-purple-500" src={image} />
        <div className="flex flex-col gap-1">
            <h4 className="font-bold">
                {name}
            </h4>
            <span className="text-sm text-neutral-400">
                {position}
            </span>
        </div>
      </div>
      <div className="w-full text-center">
        <p className="text-neutral-800 tracking-wide">
            {feedback}
        </p>
      </div>
    </motion.div>
  )
}

export default CardTestimonial;