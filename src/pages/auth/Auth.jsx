import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/almuamalat_logo.svg";
import person from "../../assets/images/almuamalt_login-profile.png";
import banner from "../../assets/images/almuamalt_login-banner.svg";

import "./Auth.css";
import Login from "./login/Login";
import Register from "./register/Register";

const Auth = () => {
  const { pathname } = useLocation();
  return (
    <div className="auth" aria-label="Auth Page">
      <div className="auth__container">
        <div className="auth__content">
          <div className="auth__header">
            <div className="auth__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="auth__header-text">
              <div className="auth__header-question">Questions?</div>
              <div className="auth__header-person">Ask Diyor</div>
            </div>
            <div className="auth__header-profile">
              <img src={person} alt="person" />
            </div>
          </div>

          <div className="auth__main">
            <h1 className="auth__title">Get started</h1>
            {pathname.includes("login") && <Login />}
            {pathname.includes("register") && <Register />}
          </div>
        </div>

        <div className="auth__banner-wrapper">
          <img src={banner} alt="auth banner" loading="lazy" />
          <h3 className="auth__banner-title">
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Auth;
