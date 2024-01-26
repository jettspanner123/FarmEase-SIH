import React from "react";

interface FullPageDivProps {
    children: any,
    classStyles: String,
}


const FullPageDiv = ({children, classStyles}: FullPageDivProps) => {
    return <div className={`${classStyles} lg:max-w-[90%] mx-auto w-full`}>
        {children}
    </div>
}

export default FullPageDiv;