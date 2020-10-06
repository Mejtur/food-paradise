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
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Navbar() {
  const {
    findIsOpen,
    setFindIsOpen,
    setSidebarIsOpen,
    loginOpen,
    user,
    setUser,
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="navbar__title">Food Paradise</p>
        </Link>

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
