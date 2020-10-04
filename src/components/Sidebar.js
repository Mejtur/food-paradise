import React, { useContext } from "react";
import "../css/Sidebar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaWindowClose,
} from "react-icons/fa";
import logo from "../images/logo.png";
import { RecipeContext } from "../context/RecipeContext";

function Sidebar() {
  const { sidebarIsOpen, setSidebarIsOpen, setLoginOpen } = useContext(
    RecipeContext
  );

  return (
    <div
      className={
        sidebarIsOpen
          ? "sidebar__hamburgerColumn"
          : "sidebar__hamburgerColumn hide"
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
          setSidebarIsOpen(false);
        }}
      />
      <FaFacebookSquare className="sidebar__icon" />
      <FaTwitterSquare className="sidebar__icon" />
      <FaInstagramSquare className="sidebar__icon" />
      <div
        className="sidebar__loginContainer"
        onClick={() => setLoginOpen(true)}
      >
        <p>
          <span className="sidebar__link">Log-in/ Sign-up</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
