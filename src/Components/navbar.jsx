import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="containerNavbar">
      <div className="navbar" ref={wrapperRef}>
        {/* Logo */}
        <div className="logo">
          <Link to="/">Hotell</Link>
        </div>

        {/* Navigation links */}
        <nav>
          <ul className={isOpen ? "display" : ""}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Destinations">Destination</NavLink></li>
            <li><NavLink to="/Service">Services</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Contact info */}
        <div className="contactNumber">
          <a className="phIcon" href="#phoneNumber">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a className="phNumber" href="#phoneNumber">
            123-489-9381
          </a>
        </div>

        {/* Toggle button (Hamburger / X) */}
        <div
          className="btnMenu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i> // Close icon
          ) : (
            <i className="fa-solid fa-bars"></i> // Hamburger icon
          )}
        </div>
      </div>
    </div>
  );
}
