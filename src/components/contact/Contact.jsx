import React from "react";
import { ChevronDown } from "lucide-react";

import enLang from "../../assets/icons/almuamalat_lang_en.svg";

import "./Contact.css";

const Contact = () => {
  return (
    <section
      className="contact animate-on-scroll fade-up"
      aria-label="contact section"
    >
      <div className="container contact__container">
        <div className="contact__content-left">
          <h3>Workshops and Spiritual Development</h3>
          <p>
            Participate in our weekly workshops focused on Islamic studies and
            spiritual growth. These sessions are designed to help you strengthen
            your connection with faith and acquire essential skills for daily
            life
          </p>
        </div>
        <div className="contact__content-right">
          <h2>Free consultation</h2>
          <p>
            Leave your phone number, and we will reach out to provide you with
            complete information about our courses.
          </p>

          <form>
            <input type="text" name="name" placeholder="Name" />

            <div className="phone-input">
              <span className="flag">
                <img src={enLang} alt="en" />
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className="header__lang-arrow"
                />
              </span>
              <input type="tel" name="phone" placeholder="+44" />
            </div>

            <label className="checkbox-container">
              <input type="checkbox" name="agreed" />I agree to the use of my
              personal information for consultation purposes.
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
