import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCalendar, FiAward } from 'react-icons/fi';
import project1Image from '../Assets/Projects/logistics.png';
import project2Image from '../Assets/Projects/Portfoliopic.png';
import './Styles/Projects.css';

// Using placeholders for missing images
const project3Image = 'https://ext.same-assets.com/3879889908/849522504.png';
const project4Image = 'https://ext.same-assets.com/3879889908/849522504.png';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Growth Campaign',
    description: 'Increased online sales by 300% through integrated digital marketing strategy and targeted PPC campaigns.',
    image: project1Image,
    details: 'A comprehensive e-commerce growth strategy including SEO, PPC, and social media marketing.',
    metrics: { roi: '300%', engagement: '150%', conversions: '250%' },
    category: 'E-Commerce',
    featured: true,
    duration: '6 months',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Brand Launch Strategy',
    description: 'Successfully launched a new brand with multi-channel marketing, reaching 50K+ audience in first month.',
    image: project2Image,
    details: 'Complete brand launch strategy with social media campaigns, influencer partnerships, and content marketing.',
    metrics: { reach: '50K+', engagement: '40%', followers: '10K+' },
    category: 'Brand Launch',
    featured: true,
    duration: '3 months',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Social Media Transformation',
    description: 'Transformed social media presence resulting in 400% follower growth and 250% engagement increase.',
    image: project3Image,
    details: 'Strategic social media marketing across Instagram, Facebook, and TikTok with viral content creation.',
    metrics: { followers: '400%', engagement: '250%', reach: '2M+' },
    category: 'Social Media',
    duration: '4 months',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'SEO Success Story',
    description: 'Achieved #1 Google rankings for 20+ keywords, driving 500% organic traffic growth in 6 months.',
    image: project4Image,
    details: 'Comprehensive SEO strategy including technical optimization, content creation, and link building.',
    metrics: { traffic: '500%', keywords: '20+', ranking: '#1' },
    category: 'SEO',
    duration: '6 months',
    status: 'Ongoing'
  },
  {
    id: 5,
    title: 'Email Marketing Campaign',
    description: 'Generated $100K in revenue through targeted email marketing campaigns with 45% open rate.',
    image: project1Image,
    details: 'Strategic email marketing with automation, segmentation, and personalized content.',
    metrics: { revenue: '$100K', opens: '45%', clicks: '25%' },
    category: 'Email Marketing',
    duration: '3 months',
    status: 'Completed'
  },
  {
    id: 6,
    title: 'PPC Excellence',
    description: 'Managed $50K monthly ad spend generating 400% ROI through Google Ads and Facebook Ads.',
    image: project4Image,
    details: 'High-performance PPC campaigns with continuous optimization and A/B testing.',
    metrics: { roi: '400%', ctr: '8%', conversions: '1200+' },
    category: 'PPC',
    duration: '5 months',
    status: 'Completed'
  },
];


const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  useEffect(() => {
    if (showAllProjects) {
      setVisibleProjects(projectsData);
    } else {
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

  return (
    <section className="campaigns-section" id="projects">
      <div className="campaigns-wrapper">
        {/* Header */}
        <div className="campaigns-header">
          <div className="header-content">
            <span className="header-label">SUCCESS STORIES</span>
            <h2 className="header-title">Featured Campaigns</h2>
            <p className="header-subtitle">
              Real results from real campaigns. See how I've helped businesses achieve their marketing goals.
            </p>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="campaigns-grid">
          {visibleProjects.map((project, index) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="campaign-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Section */}
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                />
                <div className="image-overlay"></div>
                {project.featured && (
                  <div className="featured-tag">
                    <FiAward size={14} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="card-content">
                <div className="card-category">{project.category}</div>
                
                <h3 className="card-title">{project.title}</h3>
                
                <p className="card-description">{project.description}</p>

                {/* Key Metric Highlight */}
                <div className="card-metric">
                  {(() => {
                    const [key, value] = Object.entries(project.metrics)[0];
                    return (
                      <>
                        <div className="metric-value">{value}</div>
                        <div className="metric-label">{key}</div>
                      </>
                    );
                  })()}
                </div>

                {/* CTA */}
                <div className="card-cta">
                  <span>View Full Case Study</span>
                  <FiArrowUpRight className="cta-icon" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="duration-badge">
                <FiCalendar size={12} />
                <span>{project.duration}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation */}
        {!showAllProjects && totalPages > 1 && (
          <div className="campaigns-nav">
            <button
              className="nav-btn"
              onClick={handlePrevProjects}
              aria-label="Previous"
            >
              ← Previous
            </button>

            <div className="nav-dots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to page ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              className="nav-btn"
              onClick={handleNextProjects}
              aria-label="Next"
            >
              Next →
            </button>
          </div>
        )}

        {/* View All Button */}
        <div className="view-all-wrapper">
          <button
            className="view-all-btn"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            {showAllProjects ? 'Show Less' : 'View All Campaigns'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
