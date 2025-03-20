import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiX, FiMenu } from 'react-icons/fi';
import './Styles/Navbar.css';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Portfolio</div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className={`nav-item ${activeLink === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              aria-label={`Navigate to ${link.name}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-controls">
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          
          <button 
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;