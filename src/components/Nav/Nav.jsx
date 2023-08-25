import React from "react";
import './nav.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';

const Nav = () => {
    return (
        <nav className="flex items-center">
            <img src={logo} className="w-40 cursor-pointer" />
            <ul className="flex-1 text-center">
                <li className="list-none inline-block px-5">
                    <a href="#" className="no-underline text-white px-2">Home</a>
                </li>
                <li className="list-none inline-block px-5">
                    <a href="#" className="no-underline text-white px-2">About</a>
                </li>
                <li className="list-none inline-block px-5">
                    <a href="#" className="no-underline text-white px-2">Features</a>
                </li>
                <li className="list-none inline-block px-5">
                    <a href="#" className="no-underline text-white px-2">Contact</a>
                </li>
            </ul>
            <img src={cart} className="w-8 cursor-pointer" />
        </nav>
    )
}

export default Nav;