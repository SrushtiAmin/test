import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="ready-container">
      <div className="ready-content">
        <div className="ready-text">
          <h1>Ready to get started?</h1>
          <p>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</p>
        </div>
        <button className="write-button">
          WRITE TO US <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
