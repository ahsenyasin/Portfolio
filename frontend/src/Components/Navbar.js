import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun, FiX, FiMenu, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <FiHome /> },
    { name: 'About', id: 'about', icon: <FiUser /> },
    { name: 'Services', id: 'services', icon: <FiCode /> },
    { name: 'My Projects', id: 'projects', icon: <FiBriefcase /> },
    { name: 'Blog', id: 'blog', icon: <FiCode /> },
    { name: 'Contact', id: 'contact', icon: <FiMail /> }
  ];

  // Handle scroll to activate current section in navbar
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setScrolled(window.scrollY > 20);

      // Find active section for highlighting in navbar
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
    // Initial call to set the active link correctly
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      const navbarHeight = 80; // Adjust if your navbar height changes

      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: 'smooth'
      });

      // Update URL with hash without page refresh
      window.history.pushState(null, null, `/#${sectionId}`);

      // Close mobile menu after click
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <span className="logo-text">AHSAN</span>
          </Link>

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
              className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FiSun className="sun-icon" /> : <FiMoon className="moon-icon" />}
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

      {/* Mobile Bottom Navigation */}
      <div className={`mobile-nav-bottom ${darkMode ? 'dark' : 'light'}`}>
        {navLinks.slice(0, 5).map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`mobile-nav-item ${activeLink === link.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
            }}
            aria-label={`Navigate to ${link.name}`}
          >
            <span className="mobile-nav-icon">{link.icon}</span>
            <span className="mobile-nav-text">{link.name}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
