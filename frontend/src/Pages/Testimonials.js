// components/Testimonials/Testimonials.js
import React from 'react';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';
import './Styles/Testimonials.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechFlow Solutions',
    avatar: 'S',
    stars: 5,
    text: 'Incredible results! Our social media engagement increased by 250% in just 3 months. The ROI from the campaigns has been phenomenal.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, GreenLeaf Organics',
    avatar: 'M',
    stars: 5,
    text: 'The SEO strategy delivered exactly what was promised. We\'re now ranking #1 for our target keywords and our organic traffic has tripled.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, StyleHub',
    avatar: 'E',
    stars: 4.5,
    text: 'Outstanding PPC management! The conversion rate improved by 180% while reducing our cost per acquisition significantly.'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Owner, FitLife Wellness',
    avatar: 'D',
    stars: 5,
    text: 'The email marketing campaigns generated over $150K in revenue. The strategic approach and execution were flawless.'
  }
];

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="star filled" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header-testimonials">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">
            Hear from businesses that have achieved remarkable growth through our marketing strategies
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <FaQuoteLeft className="quote-icon" />
              
              <div className="testimonial-stars">
                {renderStars(testimonial.stars)}
              </div>

              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
