// components/Contact/Contact.js
import React from 'react';
import './Styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3 className="info-label">Phone</h3>
              <p className="info-value">+92 333 6353851</p>
            </div>
            
            <div className="info-item">
              <h3 className="info-label">Email</h3>
              <p className="info-value">muhammadahsenyasin@gmail.com</p>
            </div>
            
            <div className="info-item">
              <h3 className="info-label">Address</h3>
              <p className="info-value">Rawalpindi, Pakistan</p>
            </div>
            
            <p className="contact-notice">
              I'm always open to discussing product design work or partnerships.
            </p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;