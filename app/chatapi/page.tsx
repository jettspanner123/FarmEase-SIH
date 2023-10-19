"use client";
import React from 'react';
import {motion} from "framer-motion";


const Page = () => {
    return <React.Fragment>
        <motion.div animate={{x: '-100vw'}} transition={{x: {delay: 0.5, duration: 1, ease: [0.83, 0, 0.17, 1]}}}
                    className={'fixed w-screen top-0 bg-gradient-to-br from-[#007c44] to-black h-screen'}/>
        <div className={`text-white`}>
            hello world
        </div>
    </React.Fragment>
}


export default Page;