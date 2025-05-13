import React from "react";

import card1 from "../../assets/images/almuamalat_card-1.png";
import card2 from "../../assets/images/almuamalat_card-2.png";
import card3 from "../../assets/images/almuamalat_card-3.png";

import "./OurMedia.css";

const OurMedia = () => {
  return (
    <section className="media" aria-label="media section">
      <div className="container media__container">
        <header className="media__header animate-on-scroll fade-up">
          <h2 className="title">Our Media</h2>
          <p className="subtitle">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </header>

        <div className="media__content animate-on-scroll fade-up">
          <div className="media__content-header">
            <p>Our media showcase </p>
            <div className="media__content-slider">
              <div className="left">
                <svg
                  width="24"
                  height="15"
                  viewBox="0 0 24 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.47607 7.49951H21.5237"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.42793 13.4521C8.42793 13.4521 2.47561 9.06832 2.47559 7.49974C2.47557 5.93117 8.42797 1.54736 8.42797 1.54736"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="right">
                <svg
                  width="24"
                  height="15"
                  viewBox="0 0 24 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5244 7.49951H2.47682"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5721 13.4521C15.5721 13.4521 21.5244 9.06832 21.5244 7.49974C21.5244 5.93117 15.572 1.54736 15.572 1.54736"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="media__content-block animate-on-scroll fade-up">
            <div className="media__content-card">
              <img
                src={card1}
                alt="card1"
                className="card-image"
                loading="lazy"
              />
              <div className="card-content">
                <h3>Why Islamic finance?</h3>
                <div className="play-button">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5071 12.1513C20.9918 13.9792 18.5555 15.271 13.6835 17.8546C8.97333 20.3518 6.61842 21.6007 4.72054 21.0988C3.93596 20.8911 3.22108 20.4971 2.64452 19.9543C1.25 18.6409 1.25 16.0938 1.25 10.9998C1.25 5.90587 1.25 3.35869 2.64452 2.04552C3.22108 1.50261 3.93596 1.10848 4.72054 0.900962C6.61842 0.399033 8.97333 1.64774 13.6835 4.14517C18.5555 6.72867 20.9918 8.02046 21.5071 9.84833C21.7198 10.6029 21.7198 11.3968 21.5071 12.1513Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="media__content-card">
              <img
                src={card2}
                alt="card1"
                className="card-image"
                loading="lazy"
              />
              <div className="card-content">
                <h3>What makes Islamic finance unique?</h3>
                <div className="play-button">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5071 12.1513C20.9918 13.9792 18.5555 15.271 13.6835 17.8546C8.97333 20.3518 6.61842 21.6007 4.72054 21.0988C3.93596 20.8911 3.22108 20.4971 2.64452 19.9543C1.25 18.6409 1.25 16.0938 1.25 10.9998C1.25 5.90587 1.25 3.35869 2.64452 2.04552C3.22108 1.50261 3.93596 1.10848 4.72054 0.900962C6.61842 0.399033 8.97333 1.64774 13.6835 4.14517C18.5555 6.72867 20.9918 8.02046 21.5071 9.84833C21.7198 10.6029 21.7198 11.3968 21.5071 12.1513Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="media__content-card">
              <img
                src={card3}
                alt="card1"
                className="card-image"
                loading="lazy"
              />
              <div className="card-content">
                <h3>How is risk managed in Islamic finance?</h3>
                <div className="play-button">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5071 12.1513C20.9918 13.9792 18.5555 15.271 13.6835 17.8546C8.97333 20.3518 6.61842 21.6007 4.72054 21.0988C3.93596 20.8911 3.22108 20.4971 2.64452 19.9543C1.25 18.6409 1.25 16.0938 1.25 10.9998C1.25 5.90587 1.25 3.35869 2.64452 2.04552C3.22108 1.50261 3.93596 1.10848 4.72054 0.900962C6.61842 0.399033 8.97333 1.64774 13.6835 4.14517C18.5555 6.72867 20.9918 8.02046 21.5071 9.84833C21.7198 10.6029 21.7198 11.3968 21.5071 12.1513Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMedia;
