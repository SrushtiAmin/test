import React from "react";
import "./Values.css";
import Icon from '../../Assests/Images/ValuesImages/Icon.png';
import Shape from '../../Assests/Images/ValuesImages/Shape.png';
import Icon_26_ from '../../Assests/Images/ValuesImages/Icon_26_.png';
import speedometer from '../../Assests/Images/ValuesImages/speedometer.png';
import Group2 from '../../Assests/Images/ValuesImages/Group2.png';
import Group3 from '../../Assests/Images/ValuesImages/Group3.png';
import Group4 from '../../Assests/Images/ValuesImages/Group4.png';
import Group5 from '../../Assests/Images/ValuesImages/Group5.png';
import Group6 from '../../Assests/Images/ValuesImages/Group6.png';
import Group7 from '../../Assests/Images/ValuesImages/Group7.png';
import Group8 from '../../Assests/Images/ValuesImages/Group8.png';
import Rectangle_solid from '../../Assests/Images/ValuesImages/Rectangle_solid.png';
import Rectangle_ring from '../../Assests/Images/ValuesImages/Rectangle_ring.png';
import Rectangle_bigring from '../../Assests/Images/ValuesImages/Rectangle_bigring.png';

const Values = () => {
  return (
    <section className="our-values-section">
      <div className="left-side-design">
        <div className="diamond-container">
          <div className="diamond">
            <h2 className="diamond-text">Our Values</h2>
            </div>
            <div className="Rectangle">
            <img src={Rectangle_solid} className="solid" alt="Solid Rectangle" />
            <img src={Rectangle_ring} className="ring" alt="Ring Rectangle" />
            <img src={Rectangle_bigring} className="bigring" alt="Big Ring Rectangle" />
          </div>
          <div className="floating-icons">
            <img src={Group2} className="Group2" />
            <img src={Group3} className="Group3" />
            <img src={Group4} className="Group4" />
            <img src={Group5} className="Group5" />
            <img src={Group6} className="Group6" />
            <img src={Group7} className="Group7" />
            <img src={Group8} className="Group8" />
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
