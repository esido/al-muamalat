import React from "react";

import tick from "../../../assets/icons/almuamalat-tick.svg";

import "./Programs.css";

const Programs = () => {
  return (
    <section className="programs" aria-label="International education progrmas">
      <div className="container programs__container">
        <header className="section-header  animate-on-scroll fade-up">
          <h2 className="title">International educational programs</h2>
          <p className="subtitle">
            Al Muamalat Education's international study programs offer an
            in-depth learning experience at leading Islamic financial
            institutions around the world.
          </p>
        </header>

        <div className="programs__content">
          <div className="programs__block animate-on-scroll fade-left">
            <h2 className="programs__block-title">What you’ll learn </h2>
            <div className="programs__block-wrapper">
              <div className="programs__block-info">
                <img src={tick} alt="tick icon" />
                <p>
                  Gain a comprehensive understanding of Islamic finance
                  principles and ethics.
                </p>
              </div>
              <div className="programs__block-info">
                <img src={tick} alt="tick icon" />
                <p>
                  Build a portfolio with 10+ real-world projects in Islamic
                  financial services.
                </p>
              </div>
              <div className="programs__block-info">
                <img src={tick} alt="tick icon" />
                <p>
                  Learn to develop and manage Sharia-compliant financial
                  products.
                </p>
              </div>
              <div className="programs__block-info">
                <img src={tick} alt="tick icon" />
                <p>
                  Master key concepts in Islamic banking, investment, and wealth
                  management.
                </p>
              </div>
              <div className="programs__block-info">
                <img src={tick} alt="tick icon" />
                <p>
                  Understand the fundamentals of risk management in Islamic
                  finance.
                </p>
              </div>
              <div className="programs__block-info">
                <img src={tick} alt="tick icon" />
                <p>Develop skills to work as an Islamic finance consultant.</p>
              </div>
            </div>
          </div>
          <div className="programs__block animate-on-scroll fade-right">
            <h2 className="programs__block-title">
              Why should you study at "AL-MUAMALAT"?
            </h2>
            <div className="programs__block-wrapper">
              <div className="programs__block-info">
                <div className="programs__block-circle"></div>
                <p>Lifetime access</p>
              </div>
              <div className="programs__block-info">
                <div className="programs__block-circle"></div>
                <p>Video lessons</p>
              </div>
              <div className="programs__block-info">
                <div className="programs__block-circle"></div>
                <p>Tests</p>
              </div>
              <div className="programs__block-info">
                <div className="programs__block-circle"></div>
                <p>Projects</p>
              </div>
              <div className="programs__block-info">
                <div className="programs__block-circle"></div>
                <p>Downloadable resources</p>
              </div>
              <div className="programs__block-info">
                <div className="programs__block-circle"></div>
                <p>Access via mobile device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
