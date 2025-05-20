import React from "react";

import profile from "../../../assets/images/almuamalat__students-profile.png";

import "./Students.css";

const Students = () => {
  return (
    <section className="students" aria-label="what students section">
      <div className="container students__container">
        <header className="section-header  animate-on-scroll fade-up">
          <h2 className="title">What students say</h2>
          <p className="subtitle">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </header>

        <div className="students__content animate-on-scroll fade-up">
          <div className="students__content-card">
            <p className="students__content-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>

            <div className="students__content-profile">
              <img src={profile} alt="profile picture" />

              <div className="students__content__profile-user">
                <div className="students__content__profile-name">
                  Finlay Kirk
                </div>
                <div className="students__content__profile-job">
                  Web designer
                </div>
              </div>
            </div>
          </div>

          <div className="students__content-card">
            <p className="students__content-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>

            <div className="students__content-profile">
              <img src={profile} alt="profile picture" />

              <div className="students__content__profile-user">
                <div className="students__content__profile-name">
                  Finlay Kirk
                </div>
                <div className="students__content__profile-job">
                  Web designer
                </div>
              </div>
            </div>
          </div>

          <div className="students__content-card">
            <p className="students__content-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College.
            </p>

            <div className="students__content-profile">
              <img src={profile} alt="profile picture" />

              <div className="students__content__profile-user">
                <div className="students__content__profile-name">
                  Finlay Kirk
                </div>
                <div className="students__content__profile-job">
                  Web designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
