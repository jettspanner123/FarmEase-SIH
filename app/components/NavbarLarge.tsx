import React from "react";
import {PiBracketsAngleBold} from 'react-icons/pi'
import {CiLogin} from "react-icons/ci"
import {motion} from "framer-motion";

interface NavbarLargeProps {
    setLoader: Function,
}
const NavbarLarge = ({setLoader}: NavbarLargeProps) => {
    return <motion.div animate={{y: 0}} initial={{y: -100}} transition={{ease: [0.65, 0, 0.35, 1], duration: 1, delay: 1}} className={`blur_it bg-transparent items-center text-white fixed top-0 z-10 w-screen flex justify-between px-10 py-6`}>
        <div className={`text-[2rem] font-bold hover:tracking-[1rem] transition-all duration-500 cursor-default`}>FARMEASE</div>
        <ul className={'flex gap-[1rem]'}>
            <li onClick={():void => {
                setLoader(true);
                setTimeout(() => {
                    window.location.assign('/login')
                    // @ts-ignore
                }, [1000]);

            }} className={`p-4 rounded-xl hover:bg-white hover:text-[#004d2b] transition-all duration-500`}><CiLogin size={30}/></li>
            <li className={`p-4 rounded-xl hover:bg-white hover:text-[#004d2b] transition-all duration-500`}><PiBracketsAngleBold size={30}/></li>
        </ul>
    </motion.div>
}
export default NavbarLarge;