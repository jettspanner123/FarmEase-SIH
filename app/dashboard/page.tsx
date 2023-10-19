"use client";
import React from "react";
import FullPageDiv from "@/app/components/FullPageDiv";
import {motion, useScroll, useTransform} from "framer-motion";
import PhoneModel from "@/app/components/PhoneModel";
import DashBoardNavbar from "@/app/components/DashboardNavbar";
import ReactDOM from "react-dom";

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
    const top = useTransform(scrollYProgress, [0, 0.4], ["100vh", "0vh"])
    const attributeOptions = [{title: 'ChatBot', link: '/chatapp'}, {title: 'E-Commerce', link: '/eC'}, {title: 'Weather', link: '/weather'}, {title: 'News', link: '/news'}]

    const [boxProperties, setBoxProperties] = React.useState({height: '15rem', width: '25rem', position: ''})

    const options = [
        {title: 'ChatAPI', link: 'chatapi'},
        {title: 'E-Commerce', link: 'eC'},
        {title: 'Weather', link: 'weatherToday'}
    ]

    const [loaderState, setLoaderState] = React.useState(false);
    return <React.Fragment>
        <DashBoardNavbar/>
        {/*this is the loader*/}
        <motion.div animate={{x: loaderState ? '0' : '-100vw'}} transition={{ease: [0.83, 0, 0.17, 1]}} className={`fixed transition-all duration-700 bg-gradient-to-br from-[#007c44] to-black top-0  w-screen h-screen z-[100]`} />
        <FullPageDiv classStyles={'text-white h-[200vh]'}>
            <section
                style={{backgroundImage: `radial-gradient(circle farthest-side at 45vw 100vh, #074d2d 0%, transparent 100%`}}
                className={`h-screen w-full relative flex justify-center items-center`}>
                <div style={{transform: `translate(${mousePosition.x / 100}px, 0`}}>
                    <motion.h1 animate={{scale: 1, y: 0}} initial={{scale: 1.15, y: -1000}} transition={{
                        y: {duration: 1, delay: 0.3, ease: [0.83, 0, 0.17, 1]},
                        scale: {delay: 1, duration: 1.5, ease: [0.83, 0, 0.17, 1]}
                    }} style={{transform: `translate(${mousePosition.x / 100}px,0`}}
                               className={`text-[13rem]  thick_text sticky tracking-[1rem] font-bold `}>Ease Of Farming
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
                            className={`w-[100vw] p-10  border-b-4 border-t-4 border-[#008f4f] mb-10 h-[200vh] absolute  bg-[#212121] left-0 rounded-t-[5rem]`}>
                <motion.h1 className={`m-10 font-bold text-[4rem] inline-block relative`}>
                    Attributes & Tools:
                    <motion.div whileInView={{width: "100%"}} initial={{width: "0%"}}
                                transition={{width: {duration: 1, delay: 0.05, ease: [0.83, 0, 0.17, 1]}}}
                                className={`w-full h-[1rem] rounded-xl bg-white absolute bottom-[-1rem]`}/>


                </motion.h1>
                {/*the grid section*/}
                <div  className={`grid grid-cols-4 place-items-center mt-[3rem] w-full `}>
                    {options.map((items:{title: String, link: String}) => {
                        //@ts-ignore
                        return <div onClick={() => {
                            setLoaderState(!loaderState);
                            setTimeout(() => {
                                //@ts-ignore

                                window.location.assign(items.link)
                                //@ts-ignore
                            }, [1300])
                        }} className={`w-[20rem] hover:shadow-[#064629] transition-all duration-300 hover:-translate-y-[1rem]  font-bold h-[15rem] bg-black border-2 border-gray-500 shadow-2xl rounded-xl flex justify-center items-center`}>
                            {items.title}
                        </div>
                    })}
                </div>
            </motion.section>
        </FullPageDiv>
    </React.Fragment>
}
export default Page;
