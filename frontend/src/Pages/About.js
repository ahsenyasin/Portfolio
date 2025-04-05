import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase, FiDownload } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import './Styles/About.css';
import ProfilePic from '../Assets/About/Profilepic.png';
import CV from '../Assets/Documents/m-ahsen-cv.pdf';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [skills] = useState([
    { name: 'React / React Native', percent: 90 },
    { name: 'JavaScript / TypeScript', percent: 85 },
    { name: 'MERN Stack', percent: 80 },
    { name: 'Next.js', percent: 75 },
    { name: 'SQL', percent: 70 },
    { name: 'Python', percent: 65 }
  ]);

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
    <section className="about-section">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>

        <div className="tabs-container">
          <button
            className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
          <button
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
        </div>

        <div className="content-container">
          {/* Profile Section */}
          <div className="profile-card">
            <img
              src={ProfilePic}
              alt="M. Ahsen"
              className="profile-image"
              loading="lazy"
              decoding="async"
            />
            <h2 className="profile-title">Full Stack Developer</h2>
            <p className="profile-education">BSCS Computer Science, Arid University</p>

            <div className="social-icons">
              <a href="https://github.com/ahsenyasin" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.instagram.com/mherahsen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                <FaInstagram className="icon" />
              </a>
              <a href="https://www.youtube.com/channel/UCxxx" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
                <FaYoutube className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/m-ahsen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FaLinkedin className="icon" />
              </a>
            </div>

            <button className="download-cv-btn" onClick={handleDownloadCV}>
              <FiDownload className="download-icon" /> Download CV
            </button>
          </div>

          {/* Content Section */}
          <div className="main-content">
            {activeTab === 'personal' && (
              <div className="personal-info">
                <h2 className="content-title">More Than Just Code</h2>
                <p className="description">
                  I'm passionate about creating digital experiences that make a real impact through innovative solutions.
                </p>

                <div className="info-grid">
                  <div className="info-item">
                    <FiUser className="info-icon" />
                    <span>M. Ahsan Yasin</span>
                  </div>
                  <div className="info-item">
                    <FiMail className="info-icon" />
                    <span>muhammadahsenyasin@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <FiPhone className="info-icon" />
                    <span>+92 333 6353851</span>
                  </div>
                  <div className="info-item">
                    <FiMapPin className="info-icon" />
                    <span>Rawalpindi, Pakistan</span>
                  </div>
                </div>

                <div className="interests-section">
                  <h3>Interests & Hobbies</h3>
                  <div className="interest-tags">
                    <span className="tag">☕ Coffee Enthusiast</span>
                    <span className="tag">📖 Avid Reader</span>
                    <span className="tag">🎵 Music Lover</span>
                    <span className="tag">🎮 Casual Gamer</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="experience-section">
                <h2 className="content-title">My Awesome Journey</h2>
                <div className="experience-header">
                  <FiBriefcase className="section-icon" />
                  <h3>Professional Experience</h3>
                </div>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>React Native Developer</h4>
                      <p className="company">Enabling Systems</p>
                      <p className="duration">2024 Mar - July</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>Full Stack Developer</h4>
                      <p className="company">Sprinsoft</p>
                      <p className="duration">2024 July - Present</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="skills-section">
                <h2 className="content-title">Expertise Overview</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                  ))}
                </div>

                <div className="tools-section">
                  <h3>Tools & Technologies</h3>
                  <div className="tools-grid">
                    <FaReact className="tool-icon" title="React" />
                    <FaNodeJs className="tool-icon" title="Node.js" />
                    <SiNextdotjs className="tool-icon" title="Next.js" />
                    <SiTailwindcss className="tool-icon" title="Tailwind CSS" />
                    <SiMongodb className="tool-icon" title="MongoDB" />
                    <SiExpress className="tool-icon" title="Express.js" />
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
