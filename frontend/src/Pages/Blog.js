// components/Blog/Blog.js
import React from 'react';
import { FiCalendar, FiArrowRight, FiClock } from 'react-icons/fi';
import aiResearchImage from '../Assets/Blog/ai-research.png';
import healthcareTechImage from '../Assets/Blog/healthcare-tech.png';
import careGuideImage from '../Assets/Blog/care-guid.png';
import './Styles/Blog.css';

const Blog = () => {
  const posts = [
    {
      category: 'Social Media',
      title: 'The Ultimate Guide to Instagram Marketing in 2024',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: aiResearchImage,
      excerpt: 'Discover the latest strategies to boost your Instagram presence and engagement.'
    },
    {
      category: 'SEO',
      title: 'How to Rank #1 on Google in 2024',
      date: 'March 12, 2024',
      readTime: '12 min read',
      image: healthcareTechImage,
      excerpt: 'Master the art of SEO with proven techniques and best practices for top rankings.'
    },
    {
      category: 'Email Marketing',
      title: 'Email Marketing Automation: A Complete Guide',
      date: 'March 10, 2024',
      readTime: '10 min read',
      image: careGuideImage,
      excerpt: 'Learn how to automate your email campaigns and increase conversions exponentially.'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="section-header-blog">
          <span className="section-tag">Blog</span>
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Expert tips and strategies to elevate your digital marketing game
          </p>
        </div>
        
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="image-container">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-image"
                  loading="lazy"
                />
                <div className="category-pill">{post.category}</div>
              </div>
              
              <div className="card-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-meta">
                  <div className="meta-item">
                    <FiCalendar className="meta-icon" />
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-item">
                    <FiClock className="meta-icon" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <a href="/" className="read-more">
                  Read Article <FiArrowRight className="arrow-icon" />
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