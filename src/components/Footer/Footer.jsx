import React from "react";
import fruit from '../../images/assortment-of-fruits.jpg'

const Footer = () => {
    return (
        <div className="p-5">
            <div className=" max-w-[1140px] mx-auto flex items-center">
                <div className="w-full max-w-[550px]">
                    <h1>Want anything to be easy with <strong>LablesVPN.</strong>
                    </h1>
                    <p className="text-[#4f5665] mb-[50px]">Provide a network for all your needs with easy and fun using
                        <strong>LablesVPN.</strong>
                        discover interesting features from us.
                    </p>
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