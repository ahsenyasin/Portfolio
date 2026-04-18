import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase, FiDownload, FiAward } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGoogle, FaTiktok } from 'react-icons/fa';
import { SiGoogleads, SiGoogleanalytics, SiMailchimp, SiHubspot, SiSemrush, SiFacebook } from 'react-icons/si';
import './Styles/About.css';
import ProfilePic from '../Assets/About/Profilepic.png';
import CV from '../Assets/Documents/m-ahsen-cv.pdf';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [skills] = useState([
    { name: 'Social Media Marketing', percent: 95 },
    { name: 'SEO & SEM', percent: 90 },
    { name: 'Content Marketing', percent: 88 },
    { name: 'Email Marketing', percent: 85 },
    { name: 'PPC Advertising', percent: 92 },
    { name: 'Analytics & Reporting', percent: 87 }
  ]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Digital-Marketing-Specialist-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header-about">
          <span className="section-tag">Get To Know Me</span>
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Passionate about driving growth through innovative digital strategies
          </p>
        </div>

        <div className="tabs-container">
          <button
            className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <FiUser className="tab-icon" />
            Personal Info
          </button>
          <button
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FiBriefcase className="tab-icon" />
            Experience
          </button>
          <button
            className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <FiAward className="tab-icon" />
            Skills
          </button>
        </div>

        <div className="content-container">
          {/* Profile Section */}
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img
                src={ProfilePic}
                alt="M. Ahsan"
                className="profile-image"
                loading="lazy"
                decoding="async"
              />
              <div className="profile-badge">
                <span className="badge-dot-active"></span>
                Available
              </div>
            </div>
            <h2 className="profile-title">Digital Marketing Strategist</h2>
            <p className="profile-education">Marketing & Business Analytics</p>

            <div className="social-icons">
              <a href="https://www.facebook.com/ahsanyasin" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                <FaFacebook className="icon" />
              </a>
              <a href="https://www.instagram.com/mherahsen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <FaInstagram className="icon" />
              </a>
              <a href="https://twitter.com/ahsanyasin" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                <FaTwitter className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/m-ahsen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedin className="icon" />
              </a>
            </div>
             <div className="home-cta-buttons">
                <button className="home-btn home-primary" onClick={handleDownloadCV}>
                  <FiDownload className="btn-icon" /> 
                     Download Portfolio
                </button>           
                        
            </div>
        
          </div>

          {/* Content Section*/}
          <div className="main-content" style={{padding: '30px'}}>
            {activeTab === 'personal' && (
              <div className="personal-info">
                <h2 className="content-title">Marketing Excellence Through Strategy</h2>
                <p className="description">
                  I'm a results-driven Digital Marketing Specialist with a passion for creating 
                  data-driven strategies that deliver measurable growth. With expertise in SEO, 
                  social media marketing, PPC, and content strategy, I help businesses amplify 
                  their online presence and achieve their marketing goals.
                </p>

                <div className="info-grid">
                  <div className="info-item">
                    <FiUser className="info-icon" />
                    <div>
                      <span className="info-label">Name</span>
                      <span className="info-value">M. Ahsan Yasin</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <FiMail className="info-icon" />
                    <div>
                      <span className="info-label">Email</span>
                      <span className="info-value">muhammadahsenyasin@gmail.com</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <FiPhone className="info-icon" />
                    <div>
                      <span className="info-label">Phone</span>
                      <span className="info-value">+92 333 6353851</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <FiMapPin className="info-icon" />
                    <div>
                      <span className="info-label">Location</span>
                      <span className="info-value">Rawalpindi, Pakistan</span>
                    </div>
                  </div>
                </div>

                <div className="interests-section">
                  <h3>Professional Interests</h3>
                  <div className="interest-tags">
                    <span className="tag">📊 Data Analytics</span>
                    <span className="tag">🎯 Growth Hacking</span>
                    <span className="tag">📱 Social Strategy</span>
                    <span className="tag">✍️ Content Creation</span>
                    <span className="tag">📈 Performance Marketing</span>
                    <span className="tag">🎨 Brand Building</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="experience-section">
                <h2 className="content-title">Professional Journey</h2>
                <div className="experience-header">
                  <FiBriefcase className="section-icon" />
                  <h3>Marketing Experience</h3>
                </div>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>Senior Digital Marketing Specialist</h4>
                      <p className="company">Digital Growth Agency</p>
                      <p className="duration">2023 - Present</p>
                      <ul className="responsibilities">
                        <li>Led SEO campaigns resulting in 200% organic traffic growth</li>
                        <li>Managed $50K+ monthly PPC budgets across Google & Facebook</li>
                        <li>Developed comprehensive social media strategies for 20+ brands</li>
                      </ul>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>Digital Marketing Consultant</h4>
                      <p className="company">Various E-commerce Brands</p>
                      <p className="duration">2021 - 2023</p>
                      <ul className="responsibilities">
                        <li>Increased conversion rates by 150% through optimized campaigns</li>
                        <li>Built email marketing funnels with 35% average open rates</li>
                        <li>Created content strategies that boosted engagement by 300%</li>
                      </ul>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>Marketing Coordinator</h4>
                      <p className="company">Tech Startup</p>
                      <p className="duration">2019 - 2021</p>
                      <ul className="responsibilities">
                        <li>Launched successful product campaigns reaching 100K+ users</li>
                        <li>Managed social media presence across 5 platforms</li>
                        <li>Conducted market research and competitor analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="skills-section">
                <h2 className="content-title">Core Competencies</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="tools-section">
                  <h3>Marketing Tools & Platforms</h3>
                  <div className="tools-grid">
                    <div className="tool-item">
                      <FaGoogle className="tool-icon" />
                      <span>Google Ads</span>
                    </div>
                    <div className="tool-item">
                      <SiGoogleanalytics className="tool-icon" />
                      <span>Analytics</span>
                    </div>
                    <div className="tool-item">
                      <SiFacebook className="tool-icon" />
                      <span>Meta Ads</span>
                    </div>
                    <div className="tool-item">
                      <SiMailchimp className="tool-icon" />
                      <span>Mailchimp</span>
                    </div>
                    <div className="tool-item">
                      <SiHubspot className="tool-icon" />
                      <span>HubSpot</span>
                    </div>
                    <div className="tool-item">
                      <SiSemrush className="tool-icon" />
                      <span>SEMrush</span>
                    </div>
                    <div className="tool-item">
                      <FaTiktok className="tool-icon" />
                      <span>TikTok Ads</span>
                    </div>
                    <div className="tool-item">
                      <FaLinkedin className="tool-icon" />
                      <span>LinkedIn Ads</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
