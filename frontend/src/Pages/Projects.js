import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import project1Image from '../Assets/Projects/logistics.png';
import project2Image from '../Assets/Projects/Portfoliopic.png';
import './Styles/Projects.css';

// Add project images - using placeholders for missing ones
const project3Image = 'https://ext.same-assets.com/3879889908/849522504.png'; // Using example image as placeholder
const project4Image = 'https://ext.same-assets.com/3879889908/849522504.png'; // Using example image as placeholder

const projectsData = [
  {
    id: 1,
    title: 'Ecommerce Website',
    description: 'Full-stack ecommerce solution with Next.js and Mongo database.',
    image: project1Image,
    details: 'A comprehensive ecommerce platform built with modern web technologies.'
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS.',
    image: project2Image,
    details: 'A responsive portfolio website to showcase my skills and projects.'
  },
  {
    id: 3,
    title: 'Track Visitors',
    description: 'React Native app for real-time visitor tracking using camera systems.',
    image: project3Image,
    details: 'A mobile application that helps track visitors in real-time using camera integration.'
  },
  {
    id: 4,
    title: 'Attendance Tracker',
    description: 'Web app for managing student attendance in educational institutions.',
    image: project4Image,
    details: 'A web application to manage and track student attendance in educational institutions.'
  },
  {
    id: 5,
    title: 'Ecommerce Website',
    description: 'Full-stack ecommerce solution with Next.js and Mongo database.',
    image: project1Image,
    details: 'A comprehensive ecommerce platform built with modern web technologies.'
  },
  {
    id: 6,
    title: 'Attendance Tracker',
    description: 'Web app for managing student attendance in educational institutions.',
    image: project4Image,
    details: 'A web application to manage and track student attendance in educational institutions.'
  },
];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsPerPage = 2;

  // Calculate how many pages we need
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  useEffect(() => {
    if (showAllProjects) {
      setVisibleProjects(projectsData);
    } else {
      // Calculate start and end indexes based on active index
      const startIndex = activeIndex * projectsPerPage;
      const endIndex = Math.min(startIndex + projectsPerPage, projectsData.length);
      setVisibleProjects(projectsData.slice(startIndex, endIndex));
    }
  }, [activeIndex, showAllProjects]);

  const handleNextProjects = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % totalPages);
  };

  const handlePrevProjects = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handleProjectClick = (project) => {
    console.log("Project clicked:", project.id);
    // URL history is handled by Link component
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-description">
              Explore my recent work and see how I bring ideas to life through code and design.
            </p>
            <button
              className="all-projects-btn"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects ? 'Show Less' : 'All Projects →'}
            </button>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="learn-more"
                  onClick={() => handleProjectClick(project)}
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation and Indicators */}
        {!showAllProjects && (
          <div className="carousel-container">
            <div className="carousel-navigation">
              <button
                className="carousel-btn prev-btn"
                onClick={handlePrevProjects}
                aria-label="Previous projects"
              >
                ←
              </button>

              <div className="carousel-indicators">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${Math.floor(activeIndex) === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  ></span>
                ))}
              </div>

              <button
                className="carousel-btn next-btn"
                onClick={handleNextProjects}
                aria-label="Next projects"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
