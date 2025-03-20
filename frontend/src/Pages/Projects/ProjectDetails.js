import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi';
import './ProjectDetails.css';

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "An Ecommerce website built with Next.js and MongoDB with complete backend and frontend.",
    date: "June 2023",
    duration: "8 weeks",
    techStack: [
      { name: "Next.js", completed: false },
      { name: "MongoDB", completed: true },
      { name: "Tailwind CSS", completed: false }
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filter functionality",
      "Shopping cart and checkout process",
      "Order management system",
      "Responsive design for mobile and desktop"
    ],
    gallery: [
      "https://via.placeholder.com/800x500.png?text=Project+Showcase+1",
      "https://via.placeholder.com/800x500.png?text=Project+Showcase+2"
    ]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) return <div className="error">Project not found</div>;

  return (
    <div className="project-details-container">
      {/* Fixed Back Button with better styling */}
      <button 
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="Go back to projects"
      >
        <FiArrowLeft className="button-icon" />
        <span className="button-text">Back to Projects</span>
      </button>

      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="project-metadata">
        <div className="tech-stack">
          <h3 className="section-title">Technology Stack</h3>
          <div className="tech-items">
            {project.techStack.map((tech, index) => (
              <div key={index} className={`tech-item ${tech.completed ? 'completed' : ''}`}>
                {tech.completed ? (
                  <FiCheck className="tech-icon completed-icon" />
                ) : (
                  <FiX className="tech-icon" />
                )}
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-info">
          <div className="info-item">
            <h4 className="info-label">Project Date</h4>
            <p className="info-value">{project.date}</p>
          </div>
          <div className="info-item">
            <h4 className="info-label">Duration</h4>
            <p className="info-value">{project.duration}</p>
          </div>
        </div>
      </div>

      <div className="project-features">
        <h2 className="section-title">Key Features</h2>
        <ul className="features-list">
          {project.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-bullet"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-gallery">
        <h2 className="section-title">Project Gallery</h2>
        <div className="gallery-grid">
          {project.gallery.map((img, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={img} 
                alt={`Project showcase ${index + 1}`} 
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="gallery-caption">Looks Perfect</p>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Interested in working together?</h2>
        <button 
          className="cta-button"
          onClick={() => navigate('/#contact')}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;