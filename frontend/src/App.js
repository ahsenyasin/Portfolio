import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Loader from './Components/Loader/Loader';
import './Styles/global.css';
import './Styles/theme.css';
import './App.css';

// Lazy-loaded components
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const Services = React.lazy(() => import('./Pages/Services'));
const Projects = React.lazy(() => import('./Pages/Projects'));
const Blog = React.lazy(() => import('./Pages/Blog'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const Testimonials = React.lazy(() => import('./Pages/Testimonials'));
const ProjectDetails = React.lazy(() => import('./Pages/Projects/ProjectDetails'));

function Layout({ children, darkMode, toggleTheme }) {
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const scrollOffset = 120; // Account for fixed navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - scrollOffset,
            behavior: 'smooth'
          });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    // If theme exists in localStorage, use it
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Otherwise check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update theme attribute and localStorage when darkMode state changes
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    // Log to verify theme change
    console.log('Theme changed to:', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="services"><Services /></section>
              <section id="projects"><Projects /></section>
              <section id="testimonials"><Testimonials /></section>
              <section id="blog"><Blog /></section>
              <section id="contact"><Contact /></section>
            </>
          } />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
