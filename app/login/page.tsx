"use client";
import React from "react";
import NavbarLarge from "@/app/components/NavbarLarge";
import {AnimatePresence, motion} from "framer-motion";
import {BsEye} from "react-icons/bs"
import {FirebaseApplication, FirebaseAuth, FirebaseDatabase} from "../scripts/FirebaseScript"
const Page = () => {
    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import('locomotive-scroll')).default;
                const LocomotiveScroll = new locomotiveScroll;
            }
        )()
    }, [])
    const [loader, setLoader] = React.useState(false);
    const [currentSelectedMethod, setCurrentSelectedMethod] = React.useState(0);
    return <React.Fragment>
        <motion.div
            style={{backgroundImage: `radial-gradient(circle farthest-side at 0px 0px, #000076 0%, #0d151c 50%`}}
            animate={{top: loader ? '0' : '-100vh'}} transition={{duration: 1, ease: [0.65, 0, 0.35, 1]}}
            className={` font-bold text-white text-[4rem] flex justify-center items-center fixed top-0 left-0 w-screen h-screen z-[100]`}>
            Loading FarmerWorld.
        </motion.div>
        <NavbarLogin setMethodFunction={setCurrentSelectedMethod}/>

        <AnimatePresence>
            <motion.section>
                {
                    currentSelectedMethod == 0 ? <LoginMethodDir/> : <SignupMethodDir/>
                }
            </motion.section>
        </AnimatePresence>

    </React.Fragment>
}

const LoginMethodDir = () => {
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({x: e.clientX, y: e.clientY})
        })

    }, [])

    const [passwordInputType, setPasswordInputType] = React.useState('password');
    const boxRef = React.useRef<HTMLDivElement | null>(null);
    let boxTop = boxRef.current?.getBoundingClientRect().top;
    let boxLeft = boxRef.current?.getBoundingClientRect().left;
    // @ts-ignore
    let passwordInputRef = React.useRef<HTMLInputElement | null>(null);
    // @ts-ignore
    return <React.Fragment>
        <motion.div ref={boxRef} animate={{y: 0}} initial={{y: "1000px"}}
                    transition={{duration: 0.5, ease: [0.83, 0, 0.17, 1]}}
                    //@ts-ignore
                    style={{backgroundImage: `radial-gradient(circle farthest-side at ${(mousePosition.x - boxLeft)}px ${mousePosition.y - boxTop}px, #4f1222 0%, transparent 80%)`}}
                    className={`w-[90%]  blur_it text-white border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-gray-300 rounded-t-[5rem] mx-auto bg-[rgba(255,255,255,0.05)] backdrop:blur-[100px] mt-[10rem] h-[100vh] p-[6rem]`}>
            <motion.h1 className={`text-[3rem] font-bold relative inline-block`}>
                User Login:
                <motion.div animate={{width: "100%"}} initial={{width: 0}}
                            transition={{width: {duration: 1, delay: 0.5, ease: [0.83, 0, 0.17, 1]}}}
                            className={`bg-white rounded-xl w-full h-[0.8rem] absolute bottom-[-1rem] left-0 `}/>
            </motion.h1>
            <form className={`mt-[5rem]`}>
                <input
                    className={`w-full outline-none bg-transparent border-2 border-white p-4 blur_it rounded-xl text-[1.1rem]`}
                    placeholder={'Username:'}/>
                <div className={`flex mt-8 gap-[1rem] justify-between`}>
                    <input ref={passwordInputRef}
                           className={`w-full outline-none bg-transparent border-2 border-white p-2 blur_it rounded-xl text-[1.1rem]`}
                           type={passwordInputType} placeholder={'Password:'}/>
                    <button onClick={(e) => {
                        e.preventDefault();
                        if (passwordInputType == 'password') setPasswordInputType('text');
                        else setPasswordInputType('password');
                    }}
                            className={`border-2 border-white hover:text-white hover:bg-transparent transition-all duration-100 bg-white text-black p-7 rounded-xl`}>
                        <BsEye/></button>

                </div>
                <button
                    className={`text-black mt-8 p-4 font-bold hover:text-white hover:bg-transparent transition-all duration-100 border-2 border-white bg-white rounded-xl w-full`}>Submit
                </button>
            </form>
        </motion.div>
        <h1 className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[-1] text-white font-bold text-[1.5rem]`}>Content
            Comming Up!</h1>
    </React.Fragment>
}


const SignupMethodDir = () => {
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMousePosition({x: e.clientX, y: e.clientY})
        })

    }, [])

    const [passwordInputType, setPasswordInputType] = React.useState('password');
    const boxRef = React.useRef<HTMLDivElement | null>(null);
    let boxTop = boxRef.current?.getBoundingClientRect().top;
    let boxLeft = boxRef.current?.getBoundingClientRect().left;
    // @ts-ignore
    let passwordInputRef = React.useRef<HTMLInputElement | null>(null);
    // @ts-ignore
    return <React.Fragment>
        <motion.div ref={boxRef} animate={{y: 0}} initial={{y: "1000px"}}
                    transition={{duration: 0.5, ease: [0.83, 0, 0.17, 1]}}
                    //@ts-ignore
                    style={{backgroundImage: `radial-gradient(circle farthest-side at ${(mousePosition.x - boxLeft)}px ${mousePosition.y - boxTop}px, #4f1222 0%, transparent 80%)`}}
                    className={`w-[90%]  blur_it text-white border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-gray-300 rounded-t-[5rem] mx-auto bg-[rgba(255,255,255,0.05)] backdrop:blur-[100px] mt-[10rem] h-[100vh] p-[6rem]`}>
            <motion.h1 className={`text-[3rem] font-bold relative inline-block`}>
                User Registration:
                <motion.div animate={{width: "100%"}} initial={{width: 0}}
                            transition={{width: {duration: 1, delay: 0.5, ease: [0.83, 0, 0.17, 1]}}}
                            className={`bg-white rounded-xl w-full h-[0.8rem] absolute bottom-[-1rem] left-0 `}/>
            </motion.h1>
            <form className={`mt-[5rem]`}>
                <input
                    className={`w-full outline-none bg-transparent border-2 border-white p-4 blur_it rounded-xl text-[1.1rem]`}
                    placeholder={'Username:'}/>
                <input
                    placeholder={'Enter password: '}
                    className={`w-full outline-none bg-transparent border-2 border-white p-4 blur_t rounded-xl text-[1.1rem] my-8`}
                />
                <div className={`flex  gap-[1rem] justify-between`}>
                    <input ref={passwordInputRef}
                           className={`w-full outline-none bg-transparent border-2 border-white p-4 blur_it rounded-xl text-[1.1rem]`}
                           type={passwordInputType} placeholder={'Confirm Password:'}/>
                    <button onClick={(e) => {
                        e.preventDefault();
                        if (passwordInputType == 'password') setPasswordInputType('text');
                        else setPasswordInputType('password');
                    }}
                            className={`border-2 border-white hover:text-white hover:bg-transparent transition-all duration-100 bg-white text-black px-7  rounded-xl`}>
                        <BsEye/></button>

                </div>

                <button
                    className={`text-black mt-8 p-4 font-bold hover:text-white hover:bg-transparent transition-all duration-100 border-2 border-white bg-white rounded-xl w-full`}>Submit
                </button>
            </form>
        </motion.div>
        <h1 className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[-1] text-white font-bold text-[1.5rem]`}>Content
            Comming Up!</h1>
    </React.Fragment>
}


interface NavbarLoginProps {
    setMethodFunction: Function
}

const NavbarLogin = ({setMethodFunction}: NavbarLoginProps) => {
    const [currentMethod, setCurrentMethod] = React.useState(0);
    return <motion.nav animate={{y: 0}} initial={{y: -200}}
                       transition={{duration: 1, delay: 0.8, ease: [0.83, 0, 0.17, 1]}}
                       className={`fixed blur_it top-0 w-screen p-10 backdrop:blur-[20px] text-white flex justify-between`}>
        <h1 className={`text-[2rem] hover:tracking-[1rem] transition-all duration-700 cursor-default font-bold`}>Farmease.</h1>
        <ul className={`flex gap-[1.5rem]`}>
            <li onClick={() => {
                setCurrentMethod(0);
                setMethodFunction(0)
            }}
                className={`${currentMethod == 0 ? `bg-white text-black font-bold` : ``} transition-all duration-200 cursor-default p-4 rounded-xl`}>User
                Login:
            </li>
            <li onClick={() => {
                setCurrentMethod(1);
                setMethodFunction(1)
            }}
                className={`${currentMethod == 1 ? `font-bold bg-white text-black` : ``} p-4 rounded-xl cursor-default  transition-all duration-200`}>Regester
                User:
            </li>
        </ul>
    </motion.nav>
}
export default Page;