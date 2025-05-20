import React from "react";

import logo from "../../../assets/icons/almuamalat__footer-logo.svg";
import youtube from "../../../assets/icons/youtube.svg";
import facebook from "../../../assets/icons/facebook.svg";
import twitter from "../../../assets/icons/twitter.svg";
import instagram from "../../../assets/icons/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="footer logo" />
        </div>
      </div>

      <nav className="footer__nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className="footer__socials">
        <a href="#">
          <img src={youtube} alt="youtube logo" />
        </a>
        <a href="#">
          <img src={facebook} alt="facebook logo" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter logo" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram logo" />
        </a>
      </div>

      <hr className="footer__divider" />

      <p className="footer__copyright">Copyright Satyam Studio</p>
    </footer>
  );
};

export default Footer;
