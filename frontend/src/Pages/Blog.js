// components/Blog/Blog.js
import React from 'react';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import aiResearchImage from '../Assets/Blog/ai-research.png';
import healthcareTechImage from '../Assets/Blog/healthcare-tech.png';
import careGuideImage from '../Assets/Blog/care-guid.png';
import './Styles/Blog.css';

const Blog = () => {
  const posts = [
    {
      category: 'AI Research',
      title: 'CAN ROBOTS BE SOCIALLY INTELLIGENT?',
      date: 'March 15, 2024',
      image: aiResearchImage
    },
    {
      category: 'Healthcare Tech',
      title: 'ARTIFICIAL INTELLIGENCE IN HEALTH',
      date: 'March 12, 2024',
      image: healthcareTechImage
    },
    {
      category: 'Career Guide',
      title: 'Do Coders Make Good Money?',
      date: 'March 10, 2024',
      image: careGuideImage
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="section-title">Latest Blog Posts</h2>
        
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="image-container">
                <div className="category-pill">{post.category}</div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-image"
                />
              </div>
              
              <div className="card-content">
                <h3 className="post-title">{post.title}</h3>
                
                <div className="post-meta">
                  <FiCalendar className="meta-icon" />
                  <span className="post-date">{post.date}</span>
                </div>
                
                <a href="/" className="read-more">
                  Read More <FiArrowRight className="arrow-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <button className="view-all-btn">View All Posts</button>
      </div>
    </section>
  );
};

export default Blog;