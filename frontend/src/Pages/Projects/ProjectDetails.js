import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiX, FiExternalLink, FiGithub } from 'react-icons/fi';
import './ProjectDetails.css';

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "An Ecommerce website built with Next.js and MongoDB with complete backend and frontend functionality.",
    date: "June 2023",
    duration: "8 weeks",
    techStack: [
      { name: "Next.js", completed: true },
      { name: "MongoDB", completed: true },
      { name: "Tailwind CSS", completed: true },
      { name: "Node.js", completed: true }
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filter functionality",
      "Shopping cart and checkout process",
      "Order management system",
      "Responsive design for mobile and desktop"
    ],
    gallery: [
      "https://ext.same-assets.com/3879889908/849522504.png",
      "https://ext.same-assets.com/3879889908/849522504.png"
    ],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/ahsenyasin/ecommerce"
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A modern portfolio website built with React and styled with CSS showcasing my skills and projects.",
    date: "April 2023",
    duration: "4 weeks",
    techStack: [
      { name: "React.js", completed: true },
      { name: "CSS3", completed: true },
      { name: "JavaScript", completed: true },
      { name: "React Router", completed: true }
    ],
    features: [
      "Responsive design for all device sizes",
      "Dark/Light mode toggle",
      "Project showcase section",
      "Contact form with validation",
      "Smooth scrolling navigation"
    ],
    gallery: [
      "https://ext.same-assets.com/3879889908/849522504.png",
      "https://ext.same-assets.com/3879889908/849522504.png"
    ],
    demoLink: "https://ahsendev.vercel.app",
    githubLink: "https://github.com/ahsenyasin/Portfolio"
  },
  {
    id: 3,
    title: "Track Visitors",
    description: "A React Native mobile application that enables real-time visitor tracking through camera systems.",
    date: "August 2023",
    duration: "6 weeks",
    techStack: [
      { name: "React Native", completed: true },
      { name: "Firebase", completed: true },
      { name: "Redux", completed: true },
      { name: "Camera API", completed: true }
    ],
    features: [
      "Real-time visitor detection",
      "Visitor log management",
      "Push notifications for new visitors",
      "Analytics dashboard",
      "Offline mode support"
    ],
    gallery: [
      "https://ext.same-assets.com/3879889908/849522504.png",
      "https://ext.same-assets.com/3879889908/849522504.png"
    ],
    demoLink: "https://example.com/demo-track",
    githubLink: "https://github.com/ahsenyasin/visitor-tracker"
  },
  {
    id: 4,
    title: "Attendance Tracker",
    description: "A web application designed for educational institutions to efficiently track and manage student attendance.",
    date: "October 2023",
    duration: "5 weeks",
    techStack: [
      { name: "React.js", completed: true },
      { name: "Node.js", completed: true },
      { name: "Express", completed: true },
      { name: "MongoDB", completed: true }
    ],
    features: [
      "Automated attendance marking",
      "Student and class management",
      "Reporting and analytics",
      "Email notifications",
      "Admin dashboard"
    ],
    gallery: [
      "https://ext.same-assets.com/3879889908/849522504.png",
      "https://ext.same-assets.com/3879889908/849522504.png"
    ],
    demoLink: "https://example.com/demo-attendance",
    githubLink: "https://github.com/ahsenyasin/attendance-tracker"
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === Number(id));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="error-container">
        <h1>Project Not Found</h1>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/#projects" className="back-link">
          <FiArrowLeft className="icon" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-container">
      <div className="project-details-content">
        {/* Fixed Back Button with better styling */}
        <button
          className="back-button"
          onClick={() => navigate('/#projects')}
          aria-label="Go back to projects"
        >
          <FiArrowLeft className="button-icon" />
          <span className="button-text">Back to Projects</span>
        </button>

        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-links">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
              <FiExternalLink className="link-icon" /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
              <FiGithub className="link-icon" /> View Code
            </a>
          )}
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
                  alt={`${project.title} showcase ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Interested in working together?</h2>
          <Link to="/#contact" className="cta-button">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
