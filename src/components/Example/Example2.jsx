import React from "react";
import night from '../../images/dem.jpg'

const Example2 = () => {
    return (
        <div className="grid auto-cols-[90%] grid-flow-col overflow-x-auto lg:scroll-snap-mandatory scroll-snap-always gap-x-5 lg:text-right">
            <div className="h-[200px] scroll-snap-start">
                <img src={night} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[200px] scroll-snap-start">
                <img src={night} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[200px] scroll-snap-start">
                <img src={night} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[200px] scroll-snap-start">
                <img src={night} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}
export default Example2;