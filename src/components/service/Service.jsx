import React from "react";
import services from "./serviceData";
import ServiceCard from "./ServiceCard";

import "./Service.css";

const Service = () => {
  return (
    <section className="service  " aria-label="Service Section">
      <div className="container service__container">
        <header className="service__header animate-on-scroll fade-up">
          <h2 className="service__title title">Our Services</h2>
          <p className="service__subtitle subtitle">
            Expert guidance for managing funds in alignment with Islamic
            principles, helping you make informed, halal investment decisions.
          </p>
        </header>

        <div className="service__content animate-on-scroll fade-up">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
