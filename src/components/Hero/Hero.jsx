import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import grocery from '../../images/grocery-image.png';

const Hero = () => {
    return (
        <div className="text-white mt-48 max-w-xl">
            <h1 className="text-6xl font-semibold leading-normal">Groceries <br />delivery in <span className="font-light">15 mins</span></h1>
            <p>Grocify offer a wide range of products , including fresh products, meats,
                dairy , baked goods and non-perishable items.
            </p>

            <div className="mt-10">
                <a href="#" className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium 
                inline-block mr-4 hover:bg-transparent hover:border-yellow-300 
                hover:text-white duration-300 hover:border border border-transparent">Order Now</a>
                <a href="#">Download App <FiArrowRightCircle className="text-lg inline-block rotate-90" /></a>
            </div>

            <img src={grocery} className="w-full xl:w-1/2 xl:absolute bottom-0 right-20"></img>
        </div>
    )
}

export default Hero;