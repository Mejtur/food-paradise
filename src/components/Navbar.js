import React, { useContext } from "react";
import "../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaSearch,
} from "react-icons/fa";
import Find from "./Find";
import { RecipeContext } from "../context/RecipeContext";
import Sidebar from "./Sidebar";
import Login from "./Login";

function Navbar() {
  const {
    findIsOpen,
    setFindIsOpen,
    setSidebarIsOpen,
    loginOpen,
    setLoginOpen,
  } = useContext(RecipeContext);

  return (
    <>
      {loginOpen && <Login />}
      {findIsOpen && <Find />}
      <div className="navbar">
        <div className="navbar__login">
          <GiHamburgerMenu
            className="navbar__hamburgerIcon"
            onClick={() => setSidebarIsOpen(true)}
          />
          <p>
            <span className="navbar__link" onClick={() => setLoginOpen(true)}>
              Log-in
            </span>
            /<span className="navbar__link">Sign-up</span>
          </p>
        </div>
        <p className="navbar__title">Food Paradise</p>

        <div className="navbar__social">
          <FaFacebookSquare className="navbar__icon" />
          <FaTwitterSquare className="navbar__icon" />
          <FaInstagramSquare className="navbar__icon" />
          <p className="navbar__search" onClick={() => setFindIsOpen(true)}>
            <FaSearch />
          </p>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Navbar;
