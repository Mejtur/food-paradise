import React, { useContext } from "react";
import "../css/Login.css";
import { FaWindowClose } from "react-icons/fa";
import { RecipeContext } from "../context/RecipeContext";

function Login() {
  const { setLoginOpen } = useContext(RecipeContext);
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__closeContainer">
          <FaWindowClose
            className="login__close"
            onClick={() => setLoginOpen(false)}
          />
        </div>
        <h1 className="login__title">FOOD PARADISE</h1>
        <form>
          <input type="text" placeholder="EMAIL" required />
          <input type="password" placeholder="PASSWORD" required />
          <button type="submit">LOG IN</button>
        </form>
        <p className="login__info">Dont have a login? Register now</p>
      </div>
    </div>
  );
}

export default Login;
