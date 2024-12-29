import React from 'react';
import { FaRegSmileWink } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MenuMobile = ({ mobile, handleMobile }) => {
  const menu = {
    active: {
        css: "z-30 fixed top-0 left-0 w-full h-screen bg-purple-500 ml-0 duration-300 transition-all"
    },
    notActive: {
        css: "z-30 fixed top-0 left-0 w-full h-screen bg-purple-500 ml-[-100%] duration-300 transition-all"
    }
  }
  return (
    <nav className={mobile ? menu.active.css : menu.notActive.css}>
      <div className="w-full px-5 py-4">
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-2xl text-white font-bold cursor-pointer">
                    LunarTech.
                </h1>
                <button className="text-white hover:opacity-50 duration-200">
                    <IoMdClose onClick={handleMobile} size={35} />
                </button>
            </div>
            <div className="mt-20">
                <ul className="flex flex-col gap-4">
                    <li>
                        <a className="text-white hover:text-neutral-800 duration-200 text-3xl" href="#" rel="noreferrer noopener"># Portfolio</a>
                    </li>
                    <li>
                        <a className="text-white hover:text-neutral-800 duration-200 text-3xl" href="#" rel="noreferrer noopener"># Our Team</a>
                    </li>
                    <li>
                        <a className="text-white hover:text-neutral-800 duration-200 text-3xl" href="#" rel="noreferrer noopener"># Careers</a>
                    </li>
                    <li>
                        <a className="text-white hover:text-neutral-800 duration-200 text-3xl" href="#" rel="noreferrer noopener"># About</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      {/* div bottom */}
      <div className="absolute bottom-16 left-5 w-[90%] p-2 bg-white shadow-lg flex justify-center items-center gap-4 rounded-md
         shadow-purple-800">
        <p className="font-bold text-lg text-purple-600 text-center">
            Be Happy With Our
        </p>
        <span>
            <FaRegSmileWink className="text-purple-600 animate-smile" size={25} />
        </span>
      </div>
    </nav>
  )
}

export default MenuMobile;