import React from "react";

const SideNavbar = ({}) => {
    return <div className={`h-screen fixed left-0 border-r-2 border-white w-[20%]  flex flex-col items-center pt-10`}>
        <input type={'text'} placeholder={'Enter here: '}
               className={`bg-transparent border-white border-2 w-[85%] outline-none placeholder-white rounded-[0.5rem] p-4`}/>
        <button
            className={`bg-white text-black mt-5 p-4 font-bold border-white border-2 w-[85%] hover:bg-transparent hover:text-white rounded-[0.5rem]`}>Search
        </button>
    </div>
}
export default SideNavbar;