import { motion } from "framer-motion";
import React from 'react';
import { faq } from '../../data/data';
import List from './list/List';

const Faq = () => {
  const [faqs, setFaqs] = React.useState([]);
  React.useEffect(() => {
    setFaqs(faq);
  }, []);

  return (
    <section className="w-full py-32">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="w-full">
            {/* title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-500">
                Frequently Asked Questions
            </h1>
            {/* faqs */}
            <motion.div 
              initial={{ opacity: .5, x: -100 }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: .2, ease: "easeInOut" }}
              className="mt-8 flex flex-col gap-4"
            >
              {faqs.map((item) => (
                <List key={item.id * Math.random()} {...item} />
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Faq;