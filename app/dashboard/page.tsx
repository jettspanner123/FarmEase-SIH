"use client";
import React from "react";
import FullPageDiv from "@/app/components/FullPageDiv";
import {motion} from "framer-motion";
import PhoneModel from "@/app/components/PhoneModel";
import Image from "next/image";
import PhoneChildImage from "../src/phone_child_image.png";
const Page = () => {
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
            window.addEventListener("mousemove", (event)=>{});
        }
    }, [])

    return <FullPageDiv classStyles={'text-white h-[300vh]'}>
        <section className={`h-screen w-full relative flex justify-center items-center`}>
            <div style={{transform: `translate(${mousePosition.x/100}px, 0`}}>
                <motion.h1 animate={{scale: 1, y: 0}} initial={{scale: 1.15, y: -1000}} transition={{y: {duration: 1, delay: 0.3, ease: [0.83, 0, 0.17, 1]}, scale: {delay: 1, duration: 1.5, ease: [0.83, 0, 0.17, 1]}}} style={{transform: `translate(${mousePosition.x/100}px,0`}} className={`text-[13rem]  thick_text sticky tracking-[1rem] font-bold`}>Ease Of Farming</motion.h1>
            </div>
            <motion.div animate={{y: 0}} initial={{y: 1000}} transition={{duration: 1.5, delay:1.5, ease: [0.83, 0, 0.17, 1]}}  className={` flex justify-center items-center w-[30%] absolute`}>
                <div style={{transform: `translate(-${mousePosition.x/100}px, 0`}}>
                    <PhoneModel />
                </div>
            </motion.div>
            <motion.div  animate={{y: 0}} initial={{y: 1000}} transition={{duration: 1.5, delay:1.5, ease: [0.83, 0, 0.17, 1]}}>
                <div  className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}>
                    <Image style={{transform: `translate(-${mousePosition.x/100}px, 0`}}  className={''} src={PhoneChildImage} alt={''} height={590}/>
                </div>
            </motion.div>
        </section>
        <section className={`w-screen h-screen absolute top-[100vh] bg-[#212121] left-0 rounded-t-[5rem]`}>

        </section>
    </FullPageDiv>
}


export default Page;