import React from "react";

import tick from "../../../assets/icons/almuamalat__payment-tick.svg";

import "./Payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const token = localStorage.getItem("testUserToken");

  return (
    <section
      className="payment animate-on-scroll fade-up"
      aria-label="Payment section"
    >
      <div className="container payment__container">
        <div className="payment__block">
          <h2 className="payment__block-title">Our Services</h2>

          <div className="payment__service">
            <div className="payment__service-content">
              <div className="payment__service-header">
                <img src={tick} alt="tick icon" />
                <h3>Space for creative ideas</h3>
              </div>
              <p>
                Cyber Square nourishes young aspiring minds to get a clear
                vision of their ideas. We guide them in analyzing and building
                their vision and ideas into reality.
              </p>
            </div>

            <div className="payment__service-content">
              <div className="payment__service-header">
                <img src={tick} alt="tick icon" />
                <h3>Engaging and fun curriculum</h3>
              </div>
              <p>
                Our goal is to create an engaging system that provides exciting
                activities so children can understand the programming concepts
                thoroughly so that they can perform them on their own. With
                Cyber Square kids have fun while they learn without
                frustrations.
              </p>
            </div>

            <div className="payment__service-content">
              <div className="payment__service-header">
                <img src={tick} alt="tick icon" />
                <h3>Professional teaching methods</h3>
              </div>
              <p>
                We professionals at Cyber Square, have developed an in-depth
                understanding in how to teach kids and how to code. Moreover, we
                believe in exposing kids to real programming languages and
                professional tools.
              </p>
            </div>
          </div>
        </div>
        <div className="payment__block payment__block-white">
          <h2 className="payment__block-title title-black">Payment</h2>

          <div className="payment__service payment__service-gap">
            <div className="payment__service-info">
              <div className="payment__service-circle"></div>
              <p>Space for creative ideas</p>
            </div>

            <div className="payment__service-info">
              <div className="payment__service-circle"></div>
              <p>Engaging and fun curriculum</p>
            </div>

            <div className="payment__service-info">
              <div className="payment__service-circle"></div>
              <p>Professional teaching methods</p>
            </div>

            <div className="payment__service-info">
              <div className="payment__service-circle"></div>
              <p>Learn from AI & Data Science experts</p>
            </div>

            <div className="payment__service-info">
              <div className="payment__service-circle"></div>
              <p>Courses by IIT, NIT, and IIM alumni</p>
            </div>

            <div className="payment__service-info">
              <div className="payment__service-circle"></div>
              <p>UK certification upon completion</p>
            </div>

            <div className="payment__service-info">
              <div className="payment__service-circle"></div>
              <p>Personalized one-to-one training</p>
            </div>
          </div>

          <Link to={token ? "/payment" : "/login"}>
            <button className="payment__button">Purchase Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Payment;
