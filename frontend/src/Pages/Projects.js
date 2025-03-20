import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import project1Image from '../Assets/Projects/logistics.png';
import project2Image from '../Assets/Projects/Portfoliopic.png';
import './Styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Logistics Website',
    description: 'Full-stack ecommerce solution with Next.js and Mongo database.',
    image: project1Image,
    details: 'Detailed information about Logistics Website...'
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS.',
    image: project2Image,
    details: 'Detailed information about Personal Portfolio...'
  },
  // Add more projects as needed
];

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 2);

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
                  />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="learn-more">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        {!showAllProjects && (
          <div className="carousel-indicators">
            {projectsData.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;