import { motion } from "framer-motion";
import React from 'react';
import { IoMenu } from "react-icons/io5";
import MenuMobile from "./mobile/MenuMobile";

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const handleMobile = () => {
    setMobile(state => !state);
  }
  React.useEffect(() => {
    let body = document.body;
    body.style.overflow = (mobile ? "hidden" : "auto");
  }, [mobile]);

  return (
    <header className="w-full">
      <nav className="w-full max-w-[1300px] mx-auto px-5 py-4">
        {/* title, links and button */}
        <div className="w-full flex items-center justify-between">
            <h1 className="text-slate-800 hover:text-purple-600 font-bold text-2xl cursor-pointer duration-200">
                LunarTech.
            </h1>
            <motion.ul 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: .4 }}
                className="hidden md:flex items-center gap-6"
            >
                <motion.li 
                    whileTap={{ scale: 0.8 }}
                    className="text-[1rem] font-medium py-3 border-b-[3px] border-transparent hover:border-b-purple-600 cursor-pointer hover:text-purple-600
                    "
                >
                    <a href="#">Portfolio</a>
                </motion.li>
                <motion.li 
                    whileTap={{ scale: 0.8 }}
                    className="text-[1rem] font-medium py-3 border-b-[3px] border-transparent hover:border-b-purple-600 cursor-pointer hover:text-purple-600"
                >
                    <a href="#">Our Team</a>
                </motion.li>
                <motion.li 
                    whileTap={{ scale: 0.8 }}
                    className="text-[1rem] font-medium py-3 border-b-[3px] border-transparent hover:border-b-purple-600 cursor-pointer hover:text-purple-600"
                >
                    <a href="#">Careers</a>
                </motion.li>
                <motion.li 
                    whileTap={{ scale: 0.8 }}
                    className="text-[1rem] font-medium py-3 border-b-[3px] border-transparent hover:border-b-purple-600 cursor-pointer hover:text-purple-600"
                >
                    <a href="#">About</a>
                </motion.li>
            </motion.ul>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .9 }} 
                className="hidden lg:block px-5 py-2 border-2 border-black rounded-full font-medium hover:bg-purple-600 hover:text-white"
            >
                Register
            </motion.button>
            <button onClick={handleMobile} className="hover:opacity-50 duration-200 md:hidden">
                <IoMenu size={35} />
            </button>
        </div>
      </nav>
      <MenuMobile mobile={mobile} handleMobile={handleMobile} />
    </header>
  )
}

export default Navbar;