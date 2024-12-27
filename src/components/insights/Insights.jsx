import { motion } from 'framer-motion';
import React from 'react';
import { insights } from '../../data/data';
import CardInsigts from './card-insights/CardInsigts';

const Insights = () => {
  const card = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: .2,
        ease: "easeInOut"
      }
    },
    hidden: {
      opacity: 0,
      scale: 0
    }
  }
  const url_avatar = "https://images.unsplash.com/photo-1549473448-5d7196c91f48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [insightsList, setInsightsList] = React.useState([]);
  React.useEffect(() => {
    setInsightsList(insights);
  }, []);

  return (
    <section className="w-full py-36 lg:py-14">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
            {/* insigth */}
            <div className="w-full col-span-1 flex flex-col gap-4">
                <motion.h2 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ amount: 0.5 }} 
                  variants={card} 
                  className="font-bold text-xl"
                >
                    Industry Insigths
                </motion.h2>
                <motion.p 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ amount: 0.1 }} 
                  variants={card} 
                  className="text-neutral-500 w-full max-w-[80%]"
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quos blanditiis quisquam nobis sunt harum maiores libero non ipsam animi. 
                </motion.p>
                <div className="flex items-center gap-4 mt-4">
                    <div className="w-[50px] h-[50px]">
                        <img className="w-full h-full object-cover rounded-full border-2 border-purple-600" src={url_avatar} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-medium">
                            Michel Runner
                        </h3>
                        <span className="text-neutral-400 text-sm">CEO, Founder</span>
                    </div>
                </div>
            </div>
            {/* card insights data */}
            <div className="flex flex-col md:flex-row items-center gap-4">
                {insightsList.map((insight) => (
                    <CardInsigts key={insight.id * Math.random()} {...insight} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Insights;