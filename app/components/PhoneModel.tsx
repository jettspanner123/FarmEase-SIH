import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image"
import PhoneImage from "../src/phone_image.webp"
const PhoneModel = () => {
    return <Image className={''} src={PhoneImage} height={600} alt={'Phone Image here'} />
}


export default PhoneModel;