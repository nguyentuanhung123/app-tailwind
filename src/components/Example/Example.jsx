import React, { useState } from "react";
import { BsAirplaneEngines } from "react-icons/bs";

const Example = () => {

    const [names, setNames] = useState(["David", "John", "Thomas", "Haller"])

    return (
        <div className="group p-10 border border-red-50">
            <button className="inline-block py-3 px-10 m-5 text-white bg-[#6A5AF9] lg:group-hover:bg-red-400 rounded-lg transition-all hover:scale-110 disabled:opacity-50" disabled>
                Confirm
            </button>
            <input
                type="text"
                className="py-3 px-3 border border-[#ccc] outline-none rounded-xl m-3 lg:focus:border transition-all" />
            <input
                type="checkbox"
                className="appearance-none checked:bg-blue-600 checked:border-transparent w-5 h-5 border border-[#eee]"
            />
            {/* even : chẵn , odd : lẻ */}
            {
                names.map((name, index) => {
                    return (
                        <div className="odd:bg-red-500 even:bg-[#82f95a]">{name}</div>
                    )
                })
            }
            <div
                before=""
                className="w-10 h-10 flex items-center justify-center text-[#00aefd] mx-auto my-5 border border-[#eee] rounded-xl relative
                        before:content-[attr(before)] before:absolute before:inset-0  before:rounded-xl before:bg-current before:opacity-25">
                <BsAirplaneEngines />
            </div>

            <div className="title">
                Xin chào các bạn, bọn mình là nhóm 16
            </div>
            {/* hover:bg-red */}
            {/* lg:hover:bg-blue -> breakpoint:hover:class */}
            {/* parent: group 
                child: breakpoint:group-hover:bg-red
            */}
        </div>
    )
}

export default Example;