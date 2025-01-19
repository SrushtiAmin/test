import React from "react";
import "./Testimonials.css";
import avatar1 from '../../Assests/Images/TestimonialsImages/avatar1.jpeg';
import avatar2 from '../../Assests/Images/TestimonialsImages/avatar2.jpeg';
import avatar3 from '../../Assests/Images/TestimonialsImages/avatar3.jpeg';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">Client Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p className="testimonial-text">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
            sed. Vestibulum sit amet tortor sit amet libero.
          </p>
          <div className="rating">
            ★★★★★
          </div>
          <div className="testimonial-author">
            <img src={avatar1} alt="Jane Doe" />
            <div>
              <h4>Jane Doe</h4>
              <p>Chief Digital Officer</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
            sed. Vestibulum sit amet tortor sit amet libero.
          </p>
          <div className="rating">
            ★★★★★
          </div>
          <div className="testimonial-author">
            <img src={avatar2} alt="Jane Doe" />
            <div>
              <h4>Jane Doe</h4>
              <p>Chief Digital Officer</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
            sed. Vestibulum sit amet tortor sit amet libero.
          </p>
          <div className="rating">
            ★★★★★
          </div>
          <div className="testimonial-author">
            <img src={avatar3} alt="Jane Doe" />
            <div>
              <h4>Jane Doe</h4>
              <p>Chief Digital Officer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Testimonials;
