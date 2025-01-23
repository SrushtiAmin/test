import React from "react";
import "./Values.css";
import Icon from '../../Assests/Images/ValuesImages/Icon.png';
import Shape from '../../Assests/Images/ValuesImages/Shape.png';
import Icon_26_ from '../../Assests/Images/ValuesImages/Icon_26_.png';
import speedometer from '../../Assests/Images/ValuesImages/speedometer.png';
import value from '../../Assests/Images/ValuesImages/value.png';
const Values = () => {
  return (
    <section className="our-values-section">
      <div className="left-side-design">
        <div className="diamond-container">
          <div className="diamond">
            <img src={value}/>
            </div>
           </div>
      </div>
      <div className="values-text">
        <h3>Nulla lobortis nunc vitae nisi semper velit</h3>
        <p>
          Vestibulum sit amet tortor libero lobortis semper at et odio. In eu
          tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis
          vitae purus facilisis semper.
        </p>
        <div className="values-grid">
          <div className="value-item">
            <img src={Shape} className="icon" alt="Icon" />
            <h4>Nulla lobortis nunc</h4>
            <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="value-item">
            <img src={Icon} className="icon" alt="Shape" />
            <h4>Vestibulum faucibus</h4>
            <p>In id nisi id neque venenatis molestie. Quisque lacinia purus ut libero facilisis.</p>
          </div>
          <div className="value-item">
            <img src={speedometer} className="icon" alt="Icon 26" />
            <h4>Suspendisse porttitor</h4>
            <p>nunc quis sem quis velit tincidunt congue a sit amet ante.</p>
          </div>
          <div className="value-item">
            <img src={Icon_26_} className="icon" alt="Speedometer" />
            <h4>Ut sed eros</h4>
            <p>In hac habitasse platea dictumst. In mi nulla, fringilla vestibulum finibus et.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
