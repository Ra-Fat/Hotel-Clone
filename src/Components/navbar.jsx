import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import './navbar.css'

function Navbar() {
    //use to referce to open sidebar
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null); // Reference to the nav menu


    //Use for user click or anything the page , it will close the sidebar
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

  return (
    <div className="containerNavbar">
        <div className="navbar">
            <div className="logo">
                <Link to="/">Hotell</Link>
            </div>
            <nav ref={navRef}>
                {/* if use click it , it will give class display to it and then show the sidebar */} 
                <ul className={isOpen ? "display" : ""}>
                    {/* Reference to close close sidebar by set it to false */}
                    <div className="btnClose" onClick={() => setIsOpen(false)}>
                        <i className="fas fa-times close-btn"></i>
                    </div>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Destinations">
                            <span>Destination</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Service">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="contactNumber">
                <a className="phIcon" href="#phoneNumber"><i className="fa-solid fa-phone"></i></a>
                <a className="phNumber" href="#phoneNumber">123-489-9381</a>
            </div>
            {/* Reference the sidebar with true to open */}
            <div className="btnMenu" onClick={() => setIsOpen(true)}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
