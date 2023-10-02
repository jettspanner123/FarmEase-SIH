"use client";
import React from "react";

const Page = () => {
    const boxRef = React.useRef<HTMLDivElement | null>(null);
    return <div className={`bg-red-300 flex justify-center items-center w-screen h-screen`}>
        <div>
            <div className={`bg-blue-300  border-2 top-0 left-0 hover:h-screen hover:w-screen transition-all duration-300 hover:rounded-none border-black rounded-xl h-[15rem] w-[25rem] hover:absolute`}/>
        </div>
    </div>
};

export default Page;