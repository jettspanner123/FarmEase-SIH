import {motion} from "framer-motion";
import React from "react";

const DashBoardNavbar = () => {
    return  <motion.div  animate={{y: 0}} initial={{y: -200}} transition={{duration: 1.5, delay: 2, ease: [0.83, 0, 0.17, 1]}} >
        <motion.nav className={`fixed shadow-2xl shadow-black flex justify-between items-center text-white z-[100] blur_it background_dedo border-[0.5px] border-gray-500 p-6 w-[50%] h-[2rem] rounded-full top-[1rem] left-1/2 -translate-x-1/2`}>
            <h1 className={`font-bold text-[1rem]`}>FarmEase</h1>
            <ul className={`flex gap-[1rem] items-center`}>
                <li className={`text-gray-400 hover:text-white transition-all duration-500 p-2 cursor-default rounded-full`}>Dashboard</li>
                <li className={`text-gray-400 hover:text-white transition-all duration-500 p-2 cursor-default rounded-full`}>ChatBot</li>
                <li className={`text-gray-400 hover:text-white transition-all duration-500 p-2 cursor-default rounded-full`}>E-Commerce</li>
            </ul>
        </motion.nav>
    </motion.div>
}

export default DashBoardNavbar;
