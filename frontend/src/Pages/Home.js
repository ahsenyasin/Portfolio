import React from 'react';
import './Styles/Home.css';

const Home = () => {
  // Programmatic download fallback
  const handleDownload = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/documents/m-ahsen-cv.pdf`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'M-Ahsen-CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download error:', error);
      alert('CV download failed. Please try again later.');
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            Hi, I'm <span className="home-highlight">M. Ahsen</span>
          </h1>
          <p className="home-subheading">
            A passionate web developer creating beautiful and functional websites.
          </p>
          <div className="home-cta-buttons">
            <button 
              onClick={handleDownload}
              className="home-btn home-primary"
            >
              Download CV
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