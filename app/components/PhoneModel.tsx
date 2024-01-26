import React from "react";
import Image from "next/image"
import PhoneImage from "../src/phone_image.webp"
import PhoneChildImage from "../src/phone_child_image.png"

const PhoneModel = () => {
    return <div className={`relative `}>
        <Image src={PhoneImage} className={`shadow-2xl rounded-[2.8rem] shadow-black`} alt={'something was here'}
               height={600}/>
        <Image className={'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} src={PhoneChildImage}
               height={575} alt={'Phone Image here'}/>
    </div>
}


export default PhoneModel;