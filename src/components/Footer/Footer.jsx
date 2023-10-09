import React from "react";
import fruit from '../../images/assortment-of-fruits.jpg'

const Footer = () => {
    return (
        <div className="p-5">
            <div className=" max-w-[1140px] mx-auto flex items-center lg:flex-row md::flex-row flex-col">
                <div className="w-full max-w-[550px] mb-[20px]">
                    <p className="text-[#4f5665] mb-[50px] text-[25px]">Respecting and understanding customers, Fuji Fruit aims to be the leading supplier of imported fruits, the freshest and cleanest fruits to consumers. Here, fruits are imported directly from Europe, America, Korea,... you can be completely assured about the price and quality.</p>
                    <p className="mb-[25px]">Currently, Fuji Fruit has more than 40 stores across the country and certainly, this will be one of the familiar destinations of every home.</p>
                    <a href="#" className="inline-block text-white font-bold p-4 w-full max-w-[250px] bg-[#f53838] rounded-[10px] text-center">Get Started</a>
                </div>
                <div className="pl-10">
                    <img src={fruit} />
                </div>
            </div>
        </div>
    )
}

export default Footer;