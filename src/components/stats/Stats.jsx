import { motion } from 'framer-motion';
import React from 'react';
import { stats } from '../../data/data';
import CardStats from './card-stats/CardStats';

const Stats = () => {
  const url_image = "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [statsCard, setStatsCard] = React.useState([]);
  const imageVariants = {
    hidden: {
      opacity: 0,
      transform: "translateX(50px)"
    },
    visible: {
      opacity: 1,
      transform: "translateX(0)",
      transition: {
        duration: .6,
        ease: "easeInOut"
      }
    }
  }
  React.useEffect(() => {
    setStatsCard(stats);
  }, []);

  return (
    <section className="w-full pt-28">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24 overflow-x-hidden">
            {/* img */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ amount: .5 }} 
              variants={imageVariants} className="w-full lg:w-[80%] h-[450px] relative"
            >
                <img className="object-cover w-full h-full rounded-3xl shadow-lg border-4 border-purple-500 shadow-purple-400" src={url_image}
                />
                <div className="w-full h-full absolute top-0 left-0 bg-purple-600/50 rounded-3xl" />
            </motion.div>
            {/* text */}
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-5xl">
                    Over 30,000
                </h1>
                <p className="font-bold text-2xl">
                    Remote professionals provide essential services to businesses globally, delivering support from any location.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-4">
                    {statsCard.map((stat) => (
                        <CardStats key={stat.id * Math.random()} {...stat} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Stats;