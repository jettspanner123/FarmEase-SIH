import React from "react";
import {motion} from "framer-motion";


interface RevealTextProps {
    customStyles: String,
    reveal_text: String,
    reveal_div_customStyles: String
}

const RevealText = ({customStyles, reveal_text, reveal_div_customStyles}: RevealTextProps) => {
    return <h1 className={`${customStyles} relative inline-block`}>
        {reveal_text}
        <motion.div whileInView={{width: "0%"}}
                    transition={{width: {delay: 0.2, duration: 1, ease: [0.65, 0, 0.35, 1]}}} initial={{width: "100%"}}
                    className={`${reveal_div_customStyles} absolute bottom-0 right-0 w-full h-full`}/>
    </h1>
};

export default RevealText;