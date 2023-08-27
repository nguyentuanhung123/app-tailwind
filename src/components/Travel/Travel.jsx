import React, { useState } from "react";
import night from '../../images/dem.jpg'

const Travel = () => {

    return (
        <div className="pt-12">
            {/* text-[#ffa400] or text-orangefa*/}
            {/* 
                sm: 640px
                md: 748px
                lg: 1024px
                xl: 1280px 
            */}
            <h1 className="text-center text-[#ffa400] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5">
                Live anywhere
            </h1>
            <h2 className="text-center font-light text-xl text-[#07a787] mb-35">
                Keep calm & travel on
            </h2>
            {/* gap-x-35 or gap-x-[35px]*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[37px] max-w-[1140px] mx-auto px-[15px] gap-y-[28px] lg:gap-y-0">
                <div>
                    <div className="h-96 mb-5">
                        <img src={night} alt="" className="w-full h-full rounded-lg object-cover" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Enjoy the great cold</h3>
                    <span className="block text-center text-gray-400 text-sm">6,789 properties</span>
                </div>
                <div>
                    <div className="h-96 mb-5">
                        <img src={night} alt="" className="w-full h-full rounded-lg object-cover" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Enjoy the great cold</h3>
                    <span className="block text-center text-gray-400 text-sm">6,789 properties</span>
                </div>
                <div>
                    <div className="h-96 mb-5">
                        <img src={night} alt="" className="w-full h-full rounded-lg object-cover" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Enjoy the great cold</h3>
                    <span className="block text-center text-gray-400 text-sm">6,789 properties</span>
                </div>
                <div>
                    <div className="h-96 mb-5">
                        <img src={night} alt="" className="w-full h-full rounded-lg object-cover" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Enjoy the great cold</h3>
                    <span className="block text-center text-gray-400 text-sm">6,789 properties</span>
                </div>
            </div>
        </div>
    )
}

export default Travel;