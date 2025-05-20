import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import logo from "../../../assets/images/almuamalat_logo.svg";
import enLang from "../../../assets/icons/almuamalat_lang_en.svg";

import "./Header.css";

export const Header = () => {
  const token = localStorage.getItem("testUserToken");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <a href="/" className="header__logo" aria-label="Go to homepage">
            <img
              src={logo}
              alt="Almuamalat Logo"
              className="header__logo-image"
            />
          </a>

          <nav className="header__nav nav" aria-label="Main navigation">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>

              <li className="nav__item nav__item--dropdown" ref={dropdownRef}>
                <button
                  className="nav__link nav__link--dropdown"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Programs
                  <ChevronDown size={18} className="nav__icon" />
                </button>

                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        href="/programs/international"
                        className="dropdown-link"
                      >
                        International educational programs
                      </a>
                    </li>
                    <li>
                      <a href="/programs/specialized" className="dropdown-link">
                        Specialized courses
                      </a>
                    </li>
                    <li>
                      <a href="/programs/literacy" className="dropdown-link">
                        Islamic Finance Literacy Course
                      </a>
                    </li>
                    <li>
                      <a
                        href="/programs/certification"
                        className="dropdown-link"
                      >
                        Certification program
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="nav__item">
                <a href="/tools" className="nav__link">
                  Finance tools
                </a>
              </li>

              <li className="nav__item">
                <a href="/contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__right">
            <button className="header__lang" aria-label="Change language">
              <img
                src={enLang}
                alt="English language"
                className="header__lang-icon"
              />
              <span className="header__lang-text">EN</span>
              <ChevronDown size={18} className="header__lang-arrow" />
            </button>
            <div className="header__line"></div>
            {token ? (
              <a href="/profile">
                <button className="header__button">Profile</button>
              </a>
            ) : (
              <a href="/login">
                <button className="header__button">Sign In</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
