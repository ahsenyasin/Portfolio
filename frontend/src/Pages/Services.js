import React from 'react';
import { FaCode, FaMobileAlt, FaServer, FaTachometerAlt, FaLayerGroup, FaHeadset } from 'react-icons/fa';
import './Styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "WEB DEVELOPMENT",
      description: "Building responsive and dynamic web applications using modern frameworks and technologies.",
      stack: ["React", "Tailored Solutions", "REST APIs"]
    },
    {
      icon: <FaMobileAlt />,
      title: "APP DEVELOPMENT",
      description: "Creating engaging and high performance mobile applications for iOS and Android platforms.",
      stack: ["React Native", "SQLite", "Robust Architecture"]
    },
    {
      icon: <FaServer />,
      title: "API DEVELOPMENT",
      description: "Creating robust and scalable APIs to power your web and mobile applications.",
      stack: ["GraphQL", "REST", "WebSockets"]
    },
    {
      icon: <FaTachometerAlt />,
      title: "PERFORMANCE OPTIMIZATION",
      description: "Enhancing website speed and efficiency for better user satisfaction and conversion rates.",
      stack: ["Caching Strategies", "Code Splitting", "Lazy Loading"]
    },
    {
      icon: <FaLayerGroup />,
      title: "FULL-STACK SOLUTIONS",
      description: "Developing full stack web solutions from database design to front end implementation.",
      stack: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      icon: <FaHeadset />,
      title: "TECHNICAL SUPPORT",
      description: "Providing 24/7 technical support to ensure your applications run smoothly.",
      stack: ["Maintenance", "Troubleshooting", "Updates"]
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-stack">
                {service.stack.map((item, idx) => (
                  <span key={idx} className="stack-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;