import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Loader from './Components/Loader/Loader';
import './Styles/global.css';
import './Styles/theme.css';

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
    <div className="App">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : systemDark;
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Handle scroll and hash navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const scrollOffset = 120; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - scrollOffset,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <Layout darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="services"><Services /></section>
              <section id="projects"><Projects /></section>
              <section id="blog"><Blog /></section>
              <section id="testimonials"><Testimonials /></section>
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