import { motion } from 'framer-motion';
import React from 'react';
import { testimonials } from '../../data/data';
import CardTestimonial from './card-testimonial/CardTestimonial';

const Testimonials = () => {
  const cardsVariants = {
    hidden: {
        opacity: 0,
        y: 80
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .6,
            ease: "easeInOut"
        }
    }
  }
  const [testm, setTestm] = React.useState([]);
  React.useEffect(() => {
    setTestm(testimonials);
  }, []);
  return (
    <section className="w-full pt-32">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="w-full">
            {/* text */}
            <motion.div 
                initial={{ opacity: 0, y: -30 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .4, ease: "easeInOut" }}
                className="w-full text-center flex flex-col gap-2"
            >
                <h3 className="text-sm text-purple-400">
                    ___Client Reviews
                </h3>
                <h2 className="text-3xl lg:text-4xl text-neutral-700 font-bold">
                    Our all reviews by enterprises
                </h2>
            </motion.div>  
            {/* cards */}
            <motion.div 
                initial="hidden" 
                whileInView="visible" 
                variants={cardsVariants}
                className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
            >
                {testm.map((testimonial) => (
                    <CardTestimonial key={testimonial.id * Math.random()} {...testimonial} />
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;