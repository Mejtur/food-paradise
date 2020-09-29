import React, { useContext } from "react";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import "../css/Find.css";
import { RecipeContext } from "../context/RecipeContext";

function Find() {
  const { setFindIsOpen } = useContext(RecipeContext);
  return (
    <div className="find display">
      <div className="find__container">
        <FaWindowClose
          className="find__close"
          onClick={() => {
            setFindIsOpen(false);
          }}
        />
        <form>
          <button type="submit">
            <FaSearch />
          </button>
          <input type="text" placeholder="Find a Recipe" />
        </form>
      </div>
    </div>
  );
}

export default Find;
