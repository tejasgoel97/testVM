import React from "react";
import { FAQSample } from "./sampleData";
import styles from "./Test.module.css";

function FAQ() {
  const [selectedItem, setSelectedItem] = React.useState(null);

  function handleSelect(index) {
    setSelectedItem((selectedIndex) => {
      return selectedIndex === index ? null : index;
    });
  }
  return (
    <div className="m-4 .bg-light">
      <div className="container text-center p-3">
        <h3 className="text-uppercase p-2">FREQUENTLY ASKED QUESTIONS</h3>
        <h6 className="pb-3">Explore Private Limited Company Registration</h6>
        <div className="accordion">
          {FAQSample.map((item, index) => {
            return (
              <div className="accordion-item m-2 bg-info">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button bg-primary text-white "
                    type="button"
                    aria-expanded="true"
                    onClick={() => handleSelect(index)}
                  >
                    <i
                      className={`fas ${
                        selectedItem === index ? "fa-minus" : "fa-plus"
                      }`}
                    ></i>
                    <p className="m-0 px-2">
                      <strong>{item.question}</strong>
                    </p>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse w-0 panel `}
                  style={
                    selectedItem === index
                      ? {
                          maxHeight: "1000px",
                          transitionDuration: "max-height 1s ease-out",
                        }
                      : { maxHeight: null }
                  }
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {
          ".panel {max-height: 0;overflow: hidden; transition: max-height 0.9s ease-out;}"
        }
      </style>
    </div>
  );
}

export default FAQ;
