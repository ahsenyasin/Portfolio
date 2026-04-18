// components/Contact/Contact.js
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=muhammadahsenyasin@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.open(mailtoLink, '_blank');

    // const mailtoLink = `mailto:muhammadahsenyasin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="section-header-contact">
          <span className="section-tag">Get in Touch</span>
          <h1 className="section-title">Let's Work Together</h1>
          <p className="section-subtitle">
            Ready to elevate your digital marketing? Let's discuss how I can help grow your business.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-wrapper">
                <FiPhone className="info-icon" />
              </div>
              <div>
                <h3 className="info-label">Phone</h3>
                <p className="info-value">+92 333 6353851</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrapper">
                <FiMail className="info-icon" />
              </div>
              <div>
                <h3 className="info-label">Email</h3>
                <p className="info-value">muhammadahsenyasin@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-wrapper">
                <FiMapPin className="info-icon" />
              </div>
              <div>
                <h3 className="info-label">Location</h3>
                <p className="info-value">Rawalpindi, Pakistan</p>
              </div>
            </div>
            
            <div className="availability-card">
              <div className="pulse-indicator"></div>
              <p>Available for freelance opportunities</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="How can I help you?" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="6" 
                placeholder="Tell me about your project..." 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <FiSend className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;