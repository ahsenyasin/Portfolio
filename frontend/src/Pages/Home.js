import React from 'react';
import './Styles/Home.css';
import { FiDownload } from 'react-icons/fi';
import CV from '../Assets/Documents/m-ahsen-cv.pdf';

const Home = () => {
  // Programmatic download fallback
  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Muhammad-Ahsen-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            Hi, I'm <span className="home-highlight">M. Ahsan Yasin</span>
          </h1>
          <p className="home-subheading">
            A passionate web developer creating beautiful and functional websites.
          </p>
          <div className="home-cta-buttons">
            <button className="home-btn home-primary" onClick={handleDownloadCV}>
              <FiDownload className="download-icon" /> Download CV
            </button>
            <a href="#contact" className="home-btn home-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
