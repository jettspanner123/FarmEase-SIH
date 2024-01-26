"use client";
import React from "react";
import FullPageDiv from "@/app/components/FullPageDiv";
import {motion, useAnimate, useScroll, useTransform} from "framer-motion";
import PhoneModel from "@/app/components/PhoneModel";
import DashBoardNavbar from "@/app/components/DashboardNavbar";
import {FaTruckPickup} from "react-icons/fa6";
import {PiLockersBold} from "react-icons/pi";
import {IoTrashBin} from "react-icons/io5";

const Page = () => {
    const rootRef = React.useRef<HTMLElement | null>(null);
    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import('locomotive-scroll')).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0})
    React.useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setMousePosition({x: event.clientX, y: event.clientY})
        })
        return () => {
            window.addEventListener("mousemove", (event) => {
            });
        }
    }, [])
    const {scrollYProgress} = useScroll();
    const top = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"])

    const [boxProperties, setBoxProperties] = React.useState({height: '15rem', width: '25rem', position: ''})
    const [loaderState, setLoaderState] = React.useState(false);




    const [firstDivRef, setAnimationDiv] = useAnimate();








    return <React.Fragment>
        <DashBoardNavbar/>
        {/*this is the loader*/}
        <motion.div animate={{x: loaderState ? '0' : '-100vw'}} transition={{ease: [0.83, 0, 0.17, 1]}}
                    className={`fixed transition-all duration-700 bg-gradient-to-br from-[#007c44] to-black top-0  w-screen h-screen z-[100]`}/>
        <FullPageDiv classStyles={'text-white h-[200vh]'}>
            <section
                style={{backgroundImage: `radial-gradient(circle farthest-side at 45vw 100vh, #074d2d 0%, transparent 100%`}}
                className={`h-screen w-full relative flex justify-center items-center`}>
                <div style={{transform: `translate(${mousePosition.x / 100}px, 0`}}>
                    <motion.h1 animate={{scale: 1, y: 0}} initial={{scale: 1.35, y: -1000}} transition={{
                        y: {duration: 1, delay: 0.3, ease: [0.83, 0, 0.17, 1]},
                        scale: {delay: 1, duration: 1.5, ease: [0.83, 0, 0.17, 1]}
                    }} style={{transform: `translate(${mousePosition.x / 100}px,0`}}
                               className={`text-[11rem] w-screen text-center  thick_text sticky  font-bold `}>Ease Of
                        Farming
                    </motion.h1>
                </div>
                <motion.div animate={{y: 0}} initial={{y: 1000}}
                            transition={{duration: 1.5, delay: 1.5, ease: [0.83, 0, 0.17, 1]}}
                            className={` flex justify-center items-center mt-[4rem] w-[30%] absolute `}>
                    <div className={'rounded-[10rem]'} style={{transform: `translate(-${mousePosition.x / 100}px, 0`}}>
                        <PhoneModel/>
                    </div>
                </motion.div>

            </section>
            <motion.section ref={rootRef} style={{top}}
                            className={`w-[100vw] p-10 border-t-4 border-[#008f4f] mb-10 h-[200vh] absolute  bg-[#212121] left-0 rounded-t-[5rem]`}>
                <motion.h1 className={`m-10 font-bold text-[4rem] inline-block relative`}>
                    Attributes & Tools:
                    <motion.div whileInView={{width: "100%"}} initial={{width: "0%"}}
                                transition={{width: {duration: 1, delay: 0.05, ease: [0.83, 0, 0.17, 1]}}}
                                className={`w-full h-[1rem] rounded-xl bg-white absolute bottom-[-1rem]`}/>
                </motion.h1>


                <div className={`grid grid-cols-4 w-full px-10 place-items-center gap-x-[2rem] -gap-y-[4rem]`}>
                    <div
                        ref={firstDivRef}
                        onClick={() => {
                            setAnimationDiv(firstDivRef.current, {scale: 5, color: "white"}, {scale: {delay: 1, duration: 1}, color: {delay: 0, duration: 0.5}})
                            setAnimationDiv(firstDivRef.current, {zIndex: 1, position: "relative"})
                            setTimeout(() => {
                                window.location.assign("/krishiTransport")
                            }, 1000)
                        }}
                        className={`bg-[#252525] gap-[3rem] hover:bg-white hover:scale-105 transition-all duration-700 hover:text-black hover:shadow-white h-[50vh] mt-[6rem] w-full shadow-2xl shadow-black flex justify-center items-center col-span-4 rounded-[5rem] p-[2.5rem]`}>
                        <h1 className={`m-10  font-bold text-[4rem] resize-none inline-block relative`}>
                            Krishi Transport Portal
                        </h1>
                        <FaTruckPickup size={100}/>


                    </div>


                    <div
                        className={`bg-white text-black hover:bg-[#212121] transition-all duration-700 hover:scale-105 hover:shadow-white hover:text-white flex gap-[3rem] justify-center shadow-2xl shadow-black items-center h-[50vh] mt-[6rem] w-full col-span-3 rounded-[5rem] p-[2.5rem]`}>
                        <h1 className={`m-10  font-bold text-[4rem] resize-none inline-block relative`}>
                            Krishi Vault
                        </h1>
                        <PiLockersBold size={100}/>
                    </div>


                    <div
                        className={`bg-[#00ce72] group  shadow-2xl shadow-black overflow-hidden h-[50vh] mt-[6rem] w-full  col-span-1 rounded-[5rem] p-[2.5rem] relative`}>
                        <h1 className={`m-10 text-white font-bold text-[2rem] resize-none inline-block relative`}>

                        </h1>

                        <div className={`text-black flex justify-center items-center`}>
                            <IoTrashBin size={50}/>
                        </div>
                        <div
                            className={`absolute font-bold group-hover:h-full transition-all duration-700 text-white text-[1.5rem] flex justify-center items-center bottom-0 bg-[#252525] w-full h-[8rem] left-0 `}>
                            Krishi Eco Earnings
                        </div>
                    </div>
                </div>

            </motion.section>
        </FullPageDiv>
    </React.Fragment>
}
export default Page;
