import React, { useEffect, useRef, useState } from 'react';
import { 
  FaChartLine, 
  FaBullhorn, 
  FaEnvelope, 
  FaPenFancy, 
  FaGoogle, 
  FaHashtag,
  FaVideo,
  FaChartBar 
} from 'react-icons/fa';
import './Styles/Services.css';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: <FaChartLine />,
      title: "SEO OPTIMIZATION",
      description: "Boost your website's visibility and organic traffic with data-driven SEO strategies and keyword optimization.",
      stack: ["On-Page SEO", "Technical SEO", "Link Building"],
      color: "#6C63FF"
    },
    {
      icon: <FaBullhorn />,
      title: "SOCIAL MEDIA MARKETING",
      description: "Build your brand presence and engage with your audience across all major social media platforms.",
      stack: ["Strategy Planning", "Content Creation", "Community Management"],
      color: "#FF6584"
    },
    {
      icon: <FaGoogle />,
      title: "PPC ADVERTISING",
      description: "Drive targeted traffic and maximize ROI with expertly managed Google Ads and social media ad campaigns.",
      stack: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
      color: "#4ECDC4"
    },
    {
      icon: <FaPenFancy />,
      title: "CONTENT MARKETING",
      description: "Create compelling content that resonates with your audience and drives engagement and conversions.",
      stack: ["Blog Writing", "Copywriting", "Content Strategy"],
      color: "#F7B731"
    },
    {
      icon: <FaEnvelope />,
      title: "EMAIL MARKETING",
      description: "Nurture leads and retain customers with personalized email campaigns that convert.",
      stack: ["Campaign Design", "Automation", "A/B Testing"],
      color: "#5F27CD"
    },
    {
      icon: <FaHashtag />,
      title: "BRAND STRATEGY",
      description: "Develop a strong brand identity and positioning that sets you apart from competitors.",
      stack: ["Brand Guidelines", "Market Research", "Positioning"],
      color: "#00D2D3"
    },
    {
      icon: <FaVideo />,
      title: "VIDEO MARKETING",
      description: "Leverage the power of video content to tell your brand story and engage your audience.",
      stack: ["Video Strategy", "Production", "YouTube SEO"],
      color: "#FF6B6B"
    },
    {
      icon: <FaChartBar />,
      title: "ANALYTICS & REPORTING",
      description: "Make data-driven decisions with comprehensive analytics tracking and performance reporting.",
      stack: ["Google Analytics", "Data Visualization", "ROI Tracking"],
      color: "#4834DF"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <span className="section-tag">What I Offer</span>
          <h2 className="services-heading">Digital Marketing Services</h2>
          <p className="services-subtitle">
            Comprehensive marketing solutions to grow your business online
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={(el) => (cardsRef.current[index] = el)}
              className={`service-card ${visibleCards.includes(index) ? 'visible' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--card-color': service.color 
              }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-stack">
                {service.stack.map((item, idx) => (
                  <span key={idx} className="stack-item">
                    <span className="stack-dot">•</span>
                    {item}
                  </span>
                ))}
              </div>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;