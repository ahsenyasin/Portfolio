// components/Testimonials/Testimonials.js
import React from 'react';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';
import './Styles/Testimonials.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Asad',
    position: 'Founder, Lady Bird Cosmetics',
    avatar: 'A', // First letter for avatar
    stars: 5,
    text: 'Created a stunning e-commerce website that beautifully showcases our cosmetic products and enhances customer engagement.'
  },
  {
    id: 2,
    name: 'Michael Johnson',
    position: 'Founder, StartUp Ventures',
    avatar: 'M',
    stars: 4.5,
    text: 'Their app solutions have streamlined our accounting processes and improved accuracy.'
  },
  {
    id: 3,
    name: 'Ozair',
    position: 'CEO, FinTrack Accounting',
    avatar: 'O',
    stars: 5,
    text: 'Delivered a scalable, high performing website that aligns perfectly with our brand vision.'
  },
  // {
  //   id: 4,
  //   name: 'Ayesha Ahmed',
  //   position: 'CTO, Innovative Solutions',
  //   avatar: 'A',
  //   stars: 4.5,
  //   text: 'Their app development expertise and attention to detail resulted in a seamless and efficient launch.'
  // }
];

const Testimonials = () => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="star" />);
    }

    return stars;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Client Testimonials</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-avatar">
                {testimonial.avatar}
              </div>

              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-position">{testimonial.position}</p>

                <div className="testimonial-stars">
                  {renderStars(testimonial.stars)}
                </div>

                <div className="testimonial-text">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
