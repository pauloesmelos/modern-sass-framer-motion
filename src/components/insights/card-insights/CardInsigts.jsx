import { motion } from 'framer-motion';
import React from 'react';

const CardInsigts = ({ icon, date, title, description }) => {
  const cardVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: .4,
        ease: "easeInOut"
      }
    },
    hidden: {
      opacity: 0,
      scale: 0
    }
  }
  return ( // amount = viewport da tela em que a animação é feitada
    <motion.div
        whileHover={{ transform: "translateY(-10px)" }} 
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        className="flex flex-col gap-2 bg-gray-100 border-4 border-white p-4 w-full lg:w-[500px] shadow-lg"
    >
      <div className="w-full flex justify-between">
        <span className="p-3 text-purple-700 bg-purple-300 rounded-full">
            {icon}
        </span>
        <p className="text-sm text-neutral-500">
            {date}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold">
            {title}
        </h3>
      </div>
      <div>
        <p className="text-neutral-500">
            {description}
        </p>
      </div>
    </motion.div>
  )
}

export default CardInsigts;