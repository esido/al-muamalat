import React from "react";

import arrow from "../../../assets/icons/almuamalat__information-arrow.svg";

import "./Information.css";

const Information = () => {
  return (
    <section
      className="information"
      aria-label="Brief information about the course"
    >
      <div className="container infotmation__container">
        <header className="section-header  animate-on-scroll fade-up">
          <h2 className="title">Brief information about the course</h2>
        </header>

        <div className="information__content animate-on-scroll fade-up">
          <div className="information__block">
            <div className="information__block-title">
              <h3>Videodarslar</h3> <img src={arrow} alt="arrow icon" />
            </div>
            <p className="information__block-info">
              Lessons are posted on the platform in the form of videos, which
              can be viewed anytime and anywhere. Video lessons are updated.
            </p>
          </div>
          <div className="information__block">
            <div className="information__block-title">
              <h3>Tasks</h3> <img src={arrow} alt="arrow icon" />
            </div>
            <p className="information__block-info">
              Test tasks are given at the end of the module. Only students who
              successfully pass the test will be able to access the lessons in
              the next module.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
