import React, { useContext, useState } from "react";
import "../css/Login.css";
import { FaWindowClose } from "react-icons/fa";
import { RecipeContext } from "../context/RecipeContext";
import { auth } from "../firebase";

function Login() {
  const { setLoginOpen, setUser } = useContext(RecipeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
      .then(() => {
        setLoginOpen(false);
        setUser(email);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
      .then(() => {
        setLoginOpen(false);
      });
  };

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
          <input
            type="text"
            placeholder="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn__login" onClick={handleLogin}>
            LOG IN
          </button>
          <div className="login__register">
            <p className="login__info">Dont have a login? Register now</p>
            <button type="submit" onClick={handleRegister}>
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
