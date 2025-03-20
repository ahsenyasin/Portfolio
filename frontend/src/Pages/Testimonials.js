// components/Testimonials/Testimonials.js
import React from 'react';
import './Styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h1 className="testimonials-heading">Client Testimonials</h1>
        
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <h3 className="client-name">Sarah Thompson</h3>
            <p className="client-role">Founder, Lady Bird Cosmetics</p>
            <div className="separator-line"></div>
            <p className="testimonial-text">
              "Created a stunning e-commerce website that beautifully showcases our cosmetic products 
              and enhances customer engagement."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <h3 className="client-name">Michael Johnson</h3>
            <p className="client-role">Founder, Startup Ventures</p>
            <div className="separator-line"></div>
            <p className="testimonial-text">
              "Their app solutions have streamlined our accounting processes and improved accuracy."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <h3 className="client-name">David Ozolin</h3>
            <p className="client-role">CEO, FinTrack Accounting</p>
            <div className="separator-line"></div>
            <p className="testimonial-text">
              "Delivered a scalable, high performing website that aligns perfectly with our brand vision."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;