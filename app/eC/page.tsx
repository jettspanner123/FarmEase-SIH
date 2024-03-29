"use client";
import React from "react";
import SideNavbar from "@/app/components/SideNavbar";


const Page = () => {

    React.useEffect(() => {
        (
            async () => {
                // @ts-ignore
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, [])



    return <React.Fragment>
        {/*<motion.div animate={{x: '-100vw'}} transition={{x: {delay: 0.5, duration: 1, ease: [0.83, 0, 0.17, 1]}}}*/}
        {/*            className={'fixed w-screen top-0 bg-gradient-to-br from-[#007c44] to-black h-screen'}/>*/}

        <main className={`flex justify-end`}>
            <SideNavbar/>

            <section className={`p-2 w-[78.8vw] h-[200vh] bg-green-300  `}>
            </section>
        </main>

    </React.Fragment>
};

export default Page;