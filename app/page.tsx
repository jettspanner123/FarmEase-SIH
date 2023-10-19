"use client";
import React, {useState} from "react";
import Lottie from "lottie-react";
import PhoneAnimationData from "../app/src/phone_tab_animation.json"
import {useScroll, motion, useTransform, useMotionValue, useSpring} from "framer-motion";
import NavbarLarge from "@/app/components/NavbarLarge";
import LeftScrollSlider from "@/app/components/LeftScrollSlider";
import RevealText from "@/app/components/RevealText";

export default function Home() {
    const [smoothMousePosition, setSmoothMousePosition] = useState({x: 0, y: 0})
    const [loader, setLoader] = React.useState(false);
    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])

    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setSmoothMousePosition({x: e.clientX, y: e.clientY})


            return () => {
                window.removeEventListener("mousemove", () => {
                });
            }

        })
    }, [])

    const {scrollYProgress} = useScroll();
    const top = useTransform(scrollYProgress, [0, 1], ["150vh", "0vh"]);
    return (
        <React.Fragment>

            {/*this is the loader */}
            <motion.div style={{backgroundImage: `radial-gradient(circle farthest-side at 0px 0px, #000076 0%, #0d151c 50%`}} animate={{top: loader ? '0' : '-100vh'}} transition={{duration: 1, ease: [0.65, 0, 0.35, 1]}}
                        className={`  fixed top-[-100vh] w-screen h-screen z-[1000] pointer-events-none text-[4rem] stroke-2 stroke-black font-bold text-white flex justify-center items-center`}> Loading
                FarmerWorld.
            </motion.div>
                <NavbarLarge setLoader={setLoader}/>
                <div style={{
                    backgroundImage: `radial-gradient(circle farthest-side at ${smoothMousePosition.x}px ${smoothMousePosition.y}px, #004d2b 0%, transparent 50%)`,
                }} className={`bg-black text-white w-screen h-[300vh] relative`}>
                    <motion.h1 animate={{y: 0}} initial={{y: -500}}
                               transition={{y: {duration: 1.5, ease: [0.83, 0, 0.17, 1]}}}
                               className={'text-center font-bold text-[6rem] absolute top-[7rem] w-full '}>Ease Of
                        Farming,
                    </motion.h1>
                    <motion.h1 animate={{y: 0}} initial={{y: -500}}
                               transition={{y: {duration: 1.5, ease: [0.83, 0, 0.17, 1], delay: 0.05}}}
                               className={`text-center font-bold text-[5rem] absolute top-[15rem] w-full`}>At Your
                        Doorsteps.
                    </motion.h1>
                    <motion.div animate={{y: 0}} initial={{y: 700}}
                                transition={{y: {duration: 1.5, ease: [0.83, 0, 0.17, 1]}}}
                                className={`w-screen flex justify-center  absolute  top-[21rem]`}>
                        <div className={`w-[60%]  `}>
                            <Lottie animationData={PhoneAnimationData}/>
                        </div>
                    </motion.div>
                </div>
                <motion.section style={{top}}
                                className={'bg-[#1c1c1c] border-t-4 border-[#004d2b] w-screen absolute h-[300vh] rounded-t-[5rem]'}>
                    <div className={`mt-[5rem]`}>
                        <h1 className={`font-bold text-[4rem] text-white mx-[2rem]`}>About:</h1>
                        <LeftScrollSlider/>
                        <div className={`mt-[10rem] w-full flex justify-center h-[46rem]  items-center`}>
                            <div className={'h-full   relative  flex-1 overflow-hidden'}>
                                <h1 style={{backgroundImage: 'radial-gradient(circle farthest-side at 0px 0px, #004d2b 0%, transparent 100%)'}}
                                    className={'w-full text-center text-[8vw] text-white font-bold border-2 border-white p-6 '}>FarmEase.</h1>
                            </div>
                            <div
                                className={`h-full bg-green-50 flex-1 bg-transparent border-2 border-white flex flex-col  items-center p-10`}>
                                <RevealText customStyles={'text-white text-[2.5rem] text-justify'}
                                            reveal_text={"Farmease is a comprehensive platform that equips farmers with all"}
                                            reveal_div_customStyles={'bg-gradient-to-r from-green-300 to-white'}/>
                                <RevealText customStyles={'text-white text-[2.5rem] text-justify'}
                                            reveal_text={"the necessary tools, including a marketplace where they can easily"}
                                            reveal_div_customStyles={'bg-gradient-to-r from-green-300 to-white'}/>
                                <RevealText customStyles={'text-white text-[2.5rem] text-justify'}
                                            reveal_text={'buy and sell the products they desire.  It provides them with a wide range of essential tools, along with a user-friendly marketplace, facilitating effortless transactions for buying and selling their desired agricultural products.'}
                                            reveal_div_customStyles={'bg-gradient-to-r from-green-300 to-white'}/>
                            </div>
                        </div>
                        <div className={`mt-[10rem] relative text-white flex justify-center items-center w-screen `}>

                        </div>
                    </div>
                </motion.section>
        </React.Fragment>
)
}