import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
  const { pathname } = useLocation();

  return (
    <section className="profile" aria-label="Profile">
      <div className="container profile__container">
        <div className="profile__header">
          <NavLink
            to="/profile"
            className={
              pathname === "/profile"
                ? "profile__header-btn profile__header-active"
                : "profile__header-btn"
            }
          >
            <button>Profile</button>
          </NavLink>

          <NavLink
            to="/profile/courses"
            className={
              pathname === "/profile/courses"
                ? "profile__header-btn profile__header-active"
                : "profile__header-btn"
            }
          >
            <button>Courses</button>
          </NavLink>
        </div>

        <Outlet />
      </div>
    </section>
  );
};

export default Profile;
