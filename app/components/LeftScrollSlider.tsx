import React from "react";
import {useScroll, useTransform, motion} from "framer-motion";

const LeftScrollSlider = () => {
    const optionRef = React.useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll();

    const x = useTransform(scrollYProgress, [0,0.5], ["-100rem", "0rem"])
    const options = ['SOMETHHING', 'somethingg2', 'somethinee3', 'somethingg2']
    return <motion.div style={{x}} className={`w-[150vw] px-[3rem] flex gap-[2rem] mt-[5rem]`}>
        {options.map((item, index) => {
            return <div className={'bg-[#afecd1] hover:scale-110 transition-all duration-500 delay-100 h-[20rem] w-[35rem] rounded-xl'}/>
        })}
    </motion.div>
}
export default LeftScrollSlider;