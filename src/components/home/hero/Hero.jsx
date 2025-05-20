import React from "react";

import studentImg from "../../../assets/images/almuamalat_banner.png";
import iconCalendar from "../../../assets/icons/almuamlat_calendar.svg";
import students from "../../../assets/images/almuamalat_students.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero Section">
      <div className="container hero__container">
        <div className="hero__text animate-on-scroll fade-left">
          <div className="hero__badge">
            Seeking Knowledge is an Obligation in Islam
          </div>

          <h1 className="hero__title">
            Enhance Your Understanding of Islamic Ethics with Al-Muamalat
          </h1>

          <div className="hero__opinion">
            <span className="hero__label">STUDENTS’ OPINION</span>
            <img src={students} alt="students" className="hero__avatars" />
          </div>
        </div>

        <div className="hero__image-wrapper animate-on-scroll fade-right">
          <div className="hero__stat">
            <img src={iconCalendar} alt="Calendar icon" />
            <div className="hero__stat__text">
              <div class="hero__stat__number">250k</div>
              <div class="hero__stat__label">Assisted Student</div>
            </div>
          </div>
          <img
            src={studentImg}
            alt="student"
            className="hero__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
