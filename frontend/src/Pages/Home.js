import React, { useEffect, useState } from 'react';
import './Styles/Home.css';
import { FiDownload, FiTrendingUp, FiUsers, FiTarget, FiArrowRight } from 'react-icons/fi';
import CV from '../Assets/Documents/m-ahsen-cv.pdf';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Programmatic download fallback
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Digital-Marketing-Specialist-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { icon: <FiTrendingUp />, value: '150+', label: 'Successful Campaigns' },
    { icon: <FiUsers />, value: '50+', label: 'Happy Clients' },
    { icon: <FiTarget />, value: '200%', label: 'Average ROI Growth' }
  ];

  return (
    <section id="home" className="home-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="home-container">
        <div className={`home-content ${isVisible ? 'visible' : ''}`}>
          <div className="badge">
            <span className="badge-dot"></span>
            Available for Projects
          </div>
          
          <h1 className="home-heading">
            Hi, I'm <span className="home-highlight gradient-text">M. Ahsan Yasin</span>
          </h1>
          
          <h2 className="home-subtitle">
            Digital Marketing Strategist
          </h2>
          
          <p className="home-description">
            Transforming brands through data-driven marketing strategies. 
            I help businesses grow their online presence, increase engagement, 
            and drive measurable results through innovative digital marketing solutions.
          </p>

          <div className="home-cta-buttons">
            <button className="home-btn home-primary" onClick={handleDownloadCV}>
              <FiDownload className="btn-icon" /> 
              Download Portfolio
            </button>
            <a href="#contact" className="home-btn home-secondary">
              Let's Talk
              <FiArrowRight className="btn-icon" />
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
