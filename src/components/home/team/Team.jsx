import React from "react";
import { Link } from "react-router-dom";

import expert from "../../../assets/images/almuamalat_team_banner.png";
import telegram from "../../../assets/icons/almuamalat_telegram.svg";
import instagram from "../../../assets/icons/almuamalat_instagram.svg";
import facebook from "../../../assets/icons/almuamalat_facebook.svg";
import twitter from "../../../assets/icons/almuamalat_twitter.svg";

import "./Team.css";

const Team = () => {
  return (
    <section className="team" aria-label="Team Section">
      <div className="container team__container">
        <header className="section-header service__content animate-on-scroll fade-up">
          <h2 className="title">Our Expert Team </h2>
          <p className="subtitle">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </header>

        <div className="team__content service__content animate-on-scroll fade-up">
          <div className="team__image-wrapper">
            <img src={expert} alt="team expert" loading="lazy" />
          </div>
          <div className="team__text">
            <h3 className="team__title">Dr. Mezbah Uddin Ahmed</h3>
            <p className="team__info">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div className="team__links">
              <Link>
                <img src={telegram} alt="telegram" />
              </Link>
              <Link>
                <img src={instagram} alt="instagram" />
              </Link>
              <Link>
                <img src={facebook} alt="facebook" />
              </Link>
              <Link>
                <img src={twitter} alt="twitter" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
