import React, { useState } from "react";
import night from '../../images/dem.jpg';
import dua from '../../images/dua.avif';
import dau from '../../images/dau.avif';
import cam from '../../images/cam.avif';
import cherry from '../../images/cherry.avif';
import chuoi from '../../images/chuoi.avif';
import dudu from '../../images/dudu.avif';


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
                Fresh fruit
            </h1>
            <h2 className="text-center font-light text-xl text-[#07a787] mb-35">
                Guaranteed safety and quality
            </h2>
            {/* gap-x-35 or gap-x-[35px]*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[37px] max-w-[1140px] mx-auto px-[15px] gap-y-[28px] lg:gap-y-0">
                <div className="group">
                    <div className="h-96 mb-5">
                        <img src={dua} alt="" className="w-full h-full rounded-lg object-cover group-hover:scale-110" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Pineapple</h3>
                    <span className="block text-center text-[#e02514] text-sm">2$/1kg</span>
                </div>
                <div className="group">
                    <div className="h-96 mb-5">
                        <img src={dau} alt="" className="w-full h-full rounded-lg object-cover group-hover:scale-110" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Strawberry</h3>
                    <span className="block text-center text-[#e02514] text-sm">3$/1kg</span>
                </div>
                <div className="group">
                    <div className="h-96 mb-5">
                        <img src={cam} alt="" className="w-full h-full rounded-lg object-cover group-hover:scale-110" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Orange</h3>
                    <span className="block text-center text-[#e02514] text-sm">1.4$/1kg</span>
                </div>
                <div className="group">
                    <div className="h-96 mb-5">
                        <img src={cherry} alt="" className="w-full h-full rounded-lg object-cover group-hover:scale-110" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Cherry</h3>
                    <span className="block text-center text-[#e02514] text-sm">12$/1kg</span>
                </div>
                <div className="group">
                    <div className="h-96 mb-5">
                        <img src={chuoi} alt="" className="w-full h-full rounded-lg object-cover group-hover:scale-110" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Banana</h3>
                    <span className="block text-center text-[#e02514] text-sm">1$/1kg</span>
                </div>
                <div className="group">
                    <div className="h-96 mb-5">
                        <img src={dudu} alt="" className="w-full h-full rounded-lg object-cover group-hover:scale-110" />
                    </div>
                    <h3 className="text-center font-medium text-xl mb-3">Papaya</h3>
                    <span className="block text-center text-[#e02514] text-sm">1.1$/1kg</span>
                </div>
            </div>
        </div>
    )
}

export default Travel;