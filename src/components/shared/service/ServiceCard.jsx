import React from "react";

const ServiceCard = ({ icon, title, description, className }) => {
  return (
    <div className={`service__card service__card-${className}`}>
      <div className="service__card-header">
        <img src={icon} alt={`${title} icon`} loading="lazy" />
        <h3>{title}</h3>
      </div>
      <p className="service__card-text text">{description}</p>
      <button
        className="service__card-button"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
      </button>
    </div>
  );
};

export default ServiceCard;
