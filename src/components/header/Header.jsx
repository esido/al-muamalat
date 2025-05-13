import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import logo from "../../assets/images/almuamalat_logo.svg";
import enLang from "../../assets/icons/almuamalat_lang_en.svg";

import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          {/* Logo */}
          <NavLink to="/" className="header__logo" aria-label="Go to homepage">
            <img
              src={logo}
              alt="Almuamalat Logo"
              className="header__logo-image"
            />
          </NavLink>

          {/* Navigation */}
          <nav className="header__nav nav" aria-label="Main navigation">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav__item nav__item--dropdown">
                <button
                  className="nav__link nav__link--dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Program
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className="nav__icon"
                  />
                </button>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/tools"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                >
                  Finance tools
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Language & Auth Buttons */}
          <div className="header__right">
            <button className="header__lang" aria-label="Change language">
              <img
                src={enLang}
                alt="English language"
                className="header__lang-icon"
              />
              <span className="header__lang-text">EN</span>
              <ChevronDown
                size={18}
                strokeWidth={2}
                className="header__lang-arrow"
              />
            </button>

            <div className="header__line"></div>

            <Link to={"/login"}>
              <button className="header__button">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
