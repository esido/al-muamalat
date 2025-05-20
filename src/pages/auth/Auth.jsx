import React from "react";
import { useLocation } from "react-router-dom";

import logo from "../../assets/images/almuamalat_logo.svg";
import person from "../../assets/images/almuamalat_login-profile.png";
import illustration from "../../assets/images/almuamalat__login-illustration.png";

import "./Auth.css";
import Login from "./login/Login";
import Register from "./register/Register";
import { useAuth } from "../../hooks/useAuth";

const Auth = () => {
  const auth = useAuth();
  const { pathname } = useLocation();
  return (
    <div className="auth" aria-label="Auth Page">
      <div className="auth__container">
        <div className="auth__content">
          <div className="auth__header">
            <div className="auth__logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="auth__header-profile">
              <div className="auth__header-info">
                <p className="auth__header-subtext">Questions?</p>
                <h3 className="auth__header-name">Ask Diyor</h3>
              </div>
              <div className="auth__header-image">
                <img src={person} alt="person" />
              </div>
            </div>
          </div>

          <div className="auth__main">
            <h1 className="auth__title">Get started</h1>
            {pathname.includes("login") && <Login auth={auth} />}
            {pathname.includes("register") && <Register auth={auth} />}
          </div>
        </div>

        <div className="auth__banner-wrapper">
          <img src={illustration} alt="illustration" />
          <h2>
            Welcome to Al Muamalat - Empowering Your Journey in Islamic Finance
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Auth;
