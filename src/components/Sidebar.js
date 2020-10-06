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
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Sidebar() {
  const {
    sidebarIsOpen,
    setSidebarIsOpen,
    setLoginOpen,
    user,
    setUser,
  } = useContext(RecipeContext);

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
        <Link to="/" style={{ textDecoration: "none" }} className="link">
          <li>RECIPES AND MENUS</li>
        </Link>
        <Link
          to="/favourites"
          style={{ textDecoration: "none" }}
          className="link"
        >
          <li>FAVOURITES</li>
        </Link>
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
          {user ? (
            <span
              className="navbar__link"
              onClick={() => {
                setUser(null);
                auth.signOut();
              }}
            >
              Logout {user}
            </span>
          ) : (
            <span
              className="navbar__link"
              onClick={() => {
                setLoginOpen(true);
              }}
            >
              Log-in /Sign up
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
