import React from "react";

import add from "../../assets/icons/almuamalat__add.svg";
import cancel from "../../assets/icons/almuamalat__cancel.svg";

import "./Questions.css";

const Questions = () => {
  return (
    <section className="questions" aria-label="questions section">
      <div className="container questions__container">
        <header className="questions__header  animate-on-scroll fade-up">
          <h2 className="title">Frequently asked questions</h2>
          <p className="subtitle">
            If you have any further questions, please contact us
          </p>
        </header>

        <div className="questions__content animate-on-scroll fade-up">
          <div className="questions__content-block">
            <div className="questions__content-question">
              <h3>Will I receive lifetime access to the courses?</h3>
              <button>
                <img src={add} alt="add icon" />
              </button>
            </div>
            <div className="questions__content-question questions__content-add ">
              <div className="questions__content__question-item">
                <h3>Will I receive lifetime access to the courses?</h3>
                <button>
                  <img src={cancel} alt="add icon" />
                </button>
              </div>
              <p>
                "Our platform includes downloadable resources such as PDFs and
                worksheets to help you study and teach effectively."
              </p>
            </div>
          </div>
          <div className="questions__content-block">
            <div className="questions__content-question">
              <h3>Can I use the materials for community teaching?</h3>
              <button>
                <img src={add} alt="add icon" />
              </button>
            </div>
            <div className="questions__content-question">
              <h3>Is there a free trial for the courses?</h3>
              <button>
                <img src={add} alt="add icon" />
              </button>
            </div>
            <div className="questions__content-question">
              <h3>Who can benefit from these courses?</h3>
              <button>
                <img src={add} alt="add icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
