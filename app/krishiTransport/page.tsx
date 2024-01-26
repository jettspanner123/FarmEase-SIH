"use client";
import React from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import {IoMdAddCircle} from "react-icons/io";
import {FirebaseDatabase} from "../scripts/FirebaseScript"
import {ref as DatabaseRef, set as SetDatabase, onValue as PeekDatabase} from "firebase/database"


const Page = () => {
    const [nameRef, setNameRef] = React.useState("");
    const [locationRef, setLocationRef] = React.useState("");
    const [quantityRef, setQuantityRef] = React.useState("");
    const [budgetRef, setBudgetRef] = React.useState("");

    function generateUUID() {
        var d = new Date().getTime();
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }


    function removeDuplicates(array: any[], key: any) {
        const seen = new Set();
        return array.filter((item) => {
            const value = item[key];
            if (!seen.has(value)) {
                seen.add(value);
                return true;
            }
            return false;
        });
    }

    const HandleSubmit = (e: { preventDefault: () => void; }): void => {
        e.preventDefault();
        const uuid = generateUUID();
        SetDatabase(DatabaseRef(FirebaseDatabase, `bids/${uuid}`), {
            nameRef,
            locationRef,
            quantityRef,
            budgetRef,
            uuid
        }).then((): void => {
            setForm(false);
            setNameRef("")
            setBudgetRef("")
            setQuantityRef("")
            setLocationRef("");
        })
    }

    const [formResults, setFormResults] = React.useState([]);



    React.useEffect(():void => {
        const AccumulateResults = ():void => {
            setFormResults([]);
            PeekDatabase(DatabaseRef(FirebaseDatabase, `bids/`), (snapshot) => {
                const data = snapshot.val();
                if(data != null){
                    Object.values(data).map((item):void => {
                        //@ts-ignore
                        setFormResults(oldArr => [...oldArr, item]);
                    })
                }
            })
        }

        AccumulateResults();
    }, [])

    console.log(formResults);
    React.useEffect(() => {
        (
            async () => {
                //@ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])


    const {scrollYProgress} = useScroll();
    const [MousePosition, setMousePosition] = React.useState({x: window.innerWidth / 2, y: window.innerHeight});

    React.useEffect(() => {
        window.addEventListener("mousemove", (e): void => {
            setMousePosition({x: e.clientX, y: e.clientY});
        })

        return (): void => {
            window.removeEventListener("mousemove", function (): void {
            });
        }
    }, [])

    const top = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-100vh"]);
    const width = useTransform(scrollYProgress, [0, 0.37], ["50vw", "100vw"]);

    const opacity = useTransform(scrollYProgress, [0.26, 0.37], [0, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.37], ["5rem", "0rem"])

    const [isForm, setForm] = React.useState(false);

    return <React.Fragment>
        <ThisDashboardNavbar/>

        <motion.div
            animate={{x: MousePosition.x - 32, y: MousePosition.y - 32, opacity: 1}}
            initial={{opacity: 0}}
            transition={{duration: 0.5, ease: "backOut", opacity: {delay: 2.5, duration: 1.5}}}
            className={`bg-white pointer-events-none mix-blend-difference h-[4rem] w-[4rem] rounded-full fixed`}/>

        <div className={`bg-white w-screen h-[300vh]`}>
            <div className={`flex justify-center items-center pt-[10rem] relative`}>
                {"Krishi - Transportation: ".split("").map((item, index) => {
                    return <motion.span
                        animate={{y: 0}}
                        initial={{y: -300}}
                        transition={{ease: [0.85, 0, 0.15, 1], delay: 0.005 * index, duration: 2}}
                        className={`text-[6rem]    cursor-default font-bold`}>{item}</motion.span>
                })}

                <motion.div
                    animate={{width: "60%"}}
                    initial={{width: "0"}}
                    transition={{duration: 1, delay: 1.5, ease: [0.85, 0, 0.15, 1]}}
                    className={`bg-black rounded-xl w-[80%] bottom-0 h-[15px] absolute `}/>

            </div>


            <motion.p
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration: 2}}
                className={`text-black font-normal text-[1.5rem] text-justify px-[7rem] pt-[4rem]`}>
                Indian farmers incur Rs 92,651 crore per year in post-harvest losses, the primary causes of which are
                poor storage and transportation facilities. We introduce bidding system in the transportation where
                farmer uploads there goods and after 24 hrs the process stops and lowest bid shown on top which
                provide farmer lowest rate for transport.
            </motion.p>
        </div>

        <motion.div
            style={{width, borderRadius}}
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            transition={{duration: 2, delay: 1}}
            className={`absolute p-[3rem] top-[75vh] left-1/2 -translate-x-1/2 bg-black h-[150vh] w-[50vw]`}>
            <motion.h1 className={`text-white mt-[6rem] inline-block font-bold text-[5rem]`} style={{opacity}}>
                Available Bids:
                <div className={`w-full h-[15px] bg-white rounded-xl`}/>
            </motion.h1>

            <div className={`grid text-white text-[3rem] grid-cols-3 place-items-center`}>
                {formResults.map((item, index) => {
                    //@ts-ignore
                    return <div key={index}>{item.nameRef}, {item.locationRef}</div>
                })}
            </div>

        </motion.div>

        <motion.div
            onClick={() => setForm(!isForm)}
            style={{opacity}}
            className={`fixed z-[1000] transition-all duration-700 text-white border-[0.5px] border-white p-4 rounded-xl hover:bg-white hover:text-black flex items-center gap-[1.5rem] bottom-[2rem] right-[2rem]`}>
            {isForm ? `Cancel Offer` : `Place Offer`}
            <IoMdAddCircle size={40}/>
        </motion.div>


        <AnimatePresence>
            {isForm &&
                <motion.div
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 1}}
                    className={`w-screen flex justify-center items-center h-screen fixed top-0 left-0 blur_it`}>

                    <form
                        onSubmit={HandleSubmit}
                        className={`w-[50%] bg-[rgba(255,255,255,0)] blur_it text-white p-4 rounded-xl flex flex-col`}>
                        <label className={`p-2`}>Name:</label>
                        <input
                            onChange={(e) => setNameRef(e.target.value)}
                            className={`text-[1rem] p-3 border-white border-[0.5px] rounded-xl text-white outline-none bg-transparent`}
                            placeholder={'Enter name here.'}/>
                        <label className={`p-2`}>Location:</label>
                        <input

                            onChange={(e) => setLocationRef(e.target.value)}
                            className={`text-[1rem] p-3 border-white border-[0.5px] rounded-xl text-white outline-none bg-transparent`}
                            placeholder={'Enter name here.'}/>
                        <label className={`p-2`}>Quantity:</label>
                        <input
                            onChange={(e) => setQuantityRef(e.target.value)}
                            className={`text-[1rem] p-3 border-white border-[0.5px] rounded-xl text-white outline-none bg-transparent`}
                            placeholder={'Enter name here.'}/>
                        <label className={`p-2`}>Budget:</label>
                        <input
                            onChange={(e) => setBudgetRef(e.target.value)}
                            className={`text-[1rem] p-3 border-white border-[0.5px] rounded-xl text-white outline-none bg-transparent`}
                            placeholder={'Enter name here.'}/>
                        <label className={`p-2`}>Image:</label>
                        <input
                            className={`text-[1rem] p-3 border-white border-[0.5px] rounded-xl text-white outline-none bg-transparent`}
                            placeholder={'Enter name here.'}/>
                        <button
                            type={`submit`}
                            className={`text-[1rem] bg-white text-black font-bold rounded-xl my-4 p-2`}>SUBMIT
                        </button>
                    </form>
                </motion.div>
            }
        </AnimatePresence>
    </React.Fragment>
}


const ThisDashboardNavbar = () => {
    return <motion.div>
        <motion.nav
            animate={{backgroundColor: "rgba(0,0,0,0.78)"}}
            transition={{backgroundColor: {duration: 1}}}
            className={`fixed shadow-2xl shadow-black flex justify-between items-center text-white z-[100] blur_it background_dedo border-[0.5px] border-gray-500 p-6 w-[50%] h-[2rem] rounded-full top-[1rem] left-1/2 -translate-x-1/2`}>
            <h1 className={`font-bold text-[1rem]`}>FarmEase</h1>
            <ul className={`flex gap-[1rem] items-center`}>
                <li className={`text-gray-400 hover:text-white transition-all duration-500 p-2 cursor-default rounded-full`}>Dashboard</li>
                <li className={`text-gray-400 hover:text-white transition-all duration-500 p-2 cursor-default rounded-full`}>ChatBot</li>
                <li className={`text-gray-400 hover:text-white transition-all duration-500 p-2 cursor-default rounded-full`}>E-Commerce</li>
            </ul>
        </motion.nav>
    </motion.div>
}

export default Page;