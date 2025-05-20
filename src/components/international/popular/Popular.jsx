import React from "react";

import card1 from "../../../assets/images/almuamalat__card-1.png";
import card2 from "../../../assets/images/almuamalat__card-3.png";
import card3 from "../../../assets/images/almuamalat__card-2.png";
import { ArrowUpRight } from "lucide-react";

import "./Popular.css";

const Popular = () => {
  return (
    <section className="popular" aria-label="Most Popular Course">
      <header className="section-header  animate-on-scroll fade-up">
        <h2 className="title">Most Popular Course</h2>
        <p className="subtitle">
          Expert guidance for managing funds in alignment with Islamic
          principles, helping you make informed, halal investment decisions.
        </p>
      </header>

      <div className="popular__content animate-on-scroll fade-up">
        <div className="card">
          <div className="card-image">
            <span className="tag">Design</span>
            <img src={card1} alt="Illustration" />
          </div>
          <p className="card-title">Various versions have evolve...</p>
          <div className="card-rating">
            {"★".repeat(5)}
            <span>(20)</span>
          </div>
          <div className="card-footer">
            <span className="price">$ 500</span>
            <div className="arrow-icon">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <span className="tag">Business</span>
            <img src={card2} alt="Illustration" />
          </div>
          <p className="card-title">Various versions have evolve...</p>
          <div className="card-rating">
            {"★".repeat(5)}
            <span>(102)</span>
          </div>
          <div className="card-footer">
            <span className="price">$ 500</span>
            <div className="arrow-icon">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <span className="tag">Business</span>
            <img src={card3} alt="Illustration" />
          </div>
          <p className="card-title">Various versions have evolve...</p>
          <div className="card-rating">
            {"★".repeat(5)}
            <span>(102)</span>
          </div>
          <div className="card-footer">
            <span className="price">$ 500</span>
            <div className="arrow-icon">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
