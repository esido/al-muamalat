import React from "react";
import { Link } from "react-router-dom";

import americanExpress from "../../../assets/icons/AmericanExpress.svg";
import westernUnion from "../../../assets/icons/westernunion.svg";
import klarna from "../../../assets/icons/Klarna.svg";
import skrill from "../../../assets/icons/Skrill.svg";
import stripe from "../../../assets/icons/Stripe.svg";

import "./Partner.css";

const Partner = () => {
  return (
    <section className="partner" aria-label="partners and client section">
      <div className="partner__container">
        <header className="section-header service__content animate-on-scroll fade-up">
          <h2 className="title">Our Partners and Clients</h2>
        </header>

        <div className="partner__content service__content">
          <div className="partner__brands partner__brands--right animate-on-scroll fade-up">
            <div className="partner__image-wrapper ">
              <Link>
                <img
                  src={americanExpress}
                  alt="Americak Express"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={westernUnion} alt="Western Union" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={klarna} alt="Klarna" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={skrill} alt="Skrill" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={stripe} alt="Stripe" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper ">
              <Link>
                <img
                  src={americanExpress}
                  alt="Americak Express"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={westernUnion} alt="Western Union" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={klarna} alt="Klarna" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={skrill} alt="Skrill" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={stripe} alt="Stripe" loading="lazy" />
              </Link>
            </div>
          </div>
          <div className="partner__brands partner__brands--left animate-on-scroll fade-up">
            <div className="partner__image-wrapper">
              <Link>
                <img
                  src={americanExpress}
                  alt="Americak Express"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={westernUnion} alt="Western Union" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={klarna} alt="Klarna" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={skrill} alt="Skrill" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={stripe} alt="Stripe" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img
                  src={americanExpress}
                  alt="Americak Express"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={westernUnion} alt="Western Union" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={klarna} alt="Klarna" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={skrill} alt="Skrill" loading="lazy" />
              </Link>
            </div>
            <div className="partner__image-wrapper">
              <Link>
                <img src={stripe} alt="Stripe" loading="lazy" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
