import React from "react";
import "../css/Footer.css";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__col">
          <h1 className="footer__title">FOOD PARADISE</h1>
        </div>
        <div className="footer__col">
          Check us out on:
          <div className="footer__social">
            <FaFacebookSquare className="footer__icon" />
            <FaTwitterSquare className="footer__icon" />
            <FaInstagramSquare className="footer__icon" />
          </div>
        </div>
      </div>
      <p className="footer__copy">
        Copyrighted by Mejtur. Page written with React and Firebase made for
        practice
      </p>
    </div>
  );
}

export default Footer;
