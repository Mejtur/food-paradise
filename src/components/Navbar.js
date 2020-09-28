import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaSearch,
  FaWindowClose,
} from "react-icons/fa";
import logo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar__login">
          <GiHamburgerMenu
            className="navbar__hamburgerIcon"
            onClick={() => setIsOpen(!isOpen)}
          />
          <p>
            <span className="navbar__link">Log-in</span>/
            <span className="navbar__link">Sign-up</span>
          </p>
        </div>
        <p className="navbar__title">Food Paradise</p>

        <div className="navbar__social">
          <FaFacebookSquare className="navbar__icon" />
          <FaTwitterSquare className="navbar__icon" />
          <FaInstagramSquare className="navbar__icon" />
          <p className="navbar__search">
            <FaSearch />
          </p>
        </div>
      </div>
      <div
        className={
          isOpen ? "sidebar__hamburgerColumn" : "sidebar__hamburgerColumn hide"
        }
      >
        <img src={logo} alt="logo" />
        <ul>
          <li>RECIPES AND MENUS</li>
          <li>EXPERT ADVICE</li>
          <li>INGREDIENTS</li>
          <li>VIDEO</li>
        </ul>
        <p>Follow Food Paradise</p>
        <FaWindowClose
          className="close"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <FaFacebookSquare className="sidebar__icon" />
        <FaTwitterSquare className="sidebar__icon" />
        <FaInstagramSquare className="sidebar__icon" />
      </div>
    </>
  );
}

export default Navbar;
