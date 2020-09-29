import React, { useContext, useState } from "react";
import "../css/Hero.css";
import { FaSearch } from "react-icons/fa";
import Find from "./Find";
import { RecipeContext } from "../context/RecipeContext";

function Hero() {
  const { findIsOpen, setFindIsOpen } = useContext(RecipeContext);
  return (
    <>
      {findIsOpen && <Find />}
      <div className="hero">
        <h1 className="hero__title">Find a Recipe</h1>
        <div
          className="hero__container"
          onClick={() => {
            setFindIsOpen(true);
          }}
        >
          <FaSearch className="hero__searchIcon" />
        </div>
      </div>
    </>
  );
}

export default Hero;
