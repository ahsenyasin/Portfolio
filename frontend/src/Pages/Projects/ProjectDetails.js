import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiAward, FiTrendingUp, FiCheckCircle, FiTarget } from 'react-icons/fi';
import './ProjectDetails.css';
import project1Image from '../../Assets/Projects/logistics.png';
import project2Image from '../../Assets/Projects/Portfoliopic.png';

const project3Image = 'https://ext.same-assets.com/3879889908/849522504.png';
const project4Image = 'https://ext.same-assets.com/3879889908/849522504.png';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Growth Campaign',
    description: 'Increased online sales by 300% through integrated digital marketing strategy and targeted PPC campaigns.',
    image: project1Image,
    category: 'E-Commerce',
    featured: true,
    duration: '6 months',
    status: 'Completed',
    client: 'Fashion Retail Co.',
    metrics: { roi: '300%', engagement: '150%', conversions: '250%', traffic: '400%' },
    overview: 'Transformed an underperforming e-commerce store into a revenue-generating powerhouse through data-driven marketing strategies and multi-channel optimization.',
    challenge: 'The client faced declining sales, high cart abandonment rates (78%), and poor organic visibility despite having quality products. Their digital presence was fragmented across channels with no cohesive strategy.',
    solution: 'Implemented a comprehensive 360-degree marketing approach combining SEO, PPC, email marketing, and social media. Created targeted campaigns based on customer segmentation and behavior analytics. Optimized the entire customer journey from awareness to conversion.',
    results: [
      { label: 'Return on Investment', value: '300%', description: 'ROI increased from 150% to 450%' },
      { label: 'Conversion Rate', value: '250%', description: 'Improved from 0.8% to 2.8%' },
      { label: 'Customer Engagement', value: '150%', description: 'Social engagement doubled' },
      { label: 'Organic Traffic', value: '400%', description: '4x increase in organic visitors' }
    ],
    testimonial: {
      quote: "The results exceeded our expectations. Our online revenue has tripled, and we're now the market leader in our niche.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Retail Co."
    }
  },
  {
    id: 2,
    title: 'Brand Launch Strategy',
    description: 'Successfully launched a new brand with multi-channel marketing, reaching 50K+ audience in first month.',
    image: project2Image,
    category: 'Brand Launch',
    featured: true,
    duration: '3 months',
    status: 'Completed',
    client: 'Wellness Startup',
    metrics: { reach: '50K+', engagement: '40%', followers: '10K+', conversions: '1,200' },
    overview: 'Executed a full-scale brand launch campaign for a wellness startup, establishing market presence and building a loyal customer base from scratch in a highly competitive market.',
    challenge: 'Zero brand awareness in a saturated wellness market dominated by established players. Limited budget compared to competitors, and need to establish credibility and trust quickly with a skeptical audience.',
    solution: 'Developed a compelling brand story and identity that resonated with the target audience. Leveraged influencer partnerships for initial credibility. Created a viral content strategy focused on authentic storytelling and community building. Implemented growth hacking techniques to maximize limited budget.',
    results: [
      { label: 'Brand Reach', value: '50K+', description: 'Reached 50,000+ in month one' },
      { label: 'Community Growth', value: '10K+', description: 'Built 10,000+ engaged followers' },
      { label: 'Engagement Rate', value: '40%', description: 'Achieved 40% engagement' },
      { label: 'Pre-Launch Signups', value: '1,200', description: 'Generated 1,200 early adopters' }
    ],
    testimonial: {
      quote: "They helped us punch above our weight. We're now competing with brands that have 10x our budget.",
      author: "Michael Chen",
      role: "Founder, Wellness Startup"
    }
  },
  {
    id: 3,
    title: 'Social Media Transformation',
    description: 'Transformed social media presence resulting in 400% follower growth and 250% engagement increase.',
    image: project3Image,
    category: 'Social Media',
    duration: '4 months',
    status: 'Completed',
    client: 'Food & Beverage Brand',
    metrics: { followers: '400%', engagement: '250%', reach: '2M+', virality: '15' },
    overview: 'Revitalized a stagnant social media presence into a thriving community with viral content and authentic engagement strategies that resonated with younger demographics.',
    challenge: 'Declining follower growth, low engagement rates, inconsistent brand voice across platforms, and content that failed to resonate with the target demographic. The brand was becoming irrelevant to younger audiences.',
    solution: 'Developed a cohesive content strategy across all platforms with a focus on trend-aware viral content. Implemented community management best practices and leveraged user-generated content campaigns. Optimized posting schedule based on deep analytics.',
    results: [
      { label: 'Follower Growth', value: '400%', description: 'Quadrupled follower base' },
      { label: 'Engagement Boost', value: '250%', description: '2.5x engagement increase' },
      { label: 'Total Reach', value: '2M+', description: 'Reached 2 million+ users' },
      { label: 'Viral Content', value: '15', description: '15 pieces went viral' }
    ],
    testimonial: {
      quote: "Our social media went from dead to thriving. We're now the most engaged brand in our category.",
      author: "Emma Williams",
      role: "Marketing Director, F&B Brand"
    }
  },
  {
    id: 4,
    title: 'SEO Success Story',
    description: 'Achieved #1 Google rankings for 20+ keywords, driving 500% organic traffic growth in 6 months.',
    image: project4Image,
    category: 'SEO',
    duration: '6 months',
    status: 'Ongoing',
    client: 'Tech SaaS Company',
    metrics: { traffic: '500%', keywords: '20+', ranking: '#1', leads: '350%' },
    overview: 'Comprehensive SEO strategy that took a tech SaaS company from page 3 to page 1 for high-value keywords, dramatically increasing organic traffic and qualified leads.',
    challenge: 'Poor organic visibility, ranking on page 3-4 for important keywords, technical SEO issues, thin content, and strong competition from established players with higher domain authority.',
    solution: 'Conducted comprehensive SEO audit and fixed critical technical issues. Developed high-quality content strategy targeting buyer-intent keywords. Built authoritative backlink profile through digital PR and content partnerships.',
    results: [
      { label: 'Organic Traffic', value: '500%', description: '5x organic traffic increase' },
      { label: 'Top Rankings', value: '20+', description: '20+ keywords in position #1' },
      { label: 'Page Position', value: '#1', description: 'Dominating first page results' },
      { label: 'Lead Growth', value: '350%', description: 'Qualified leads up 350%' }
    ],
    testimonial: {
      quote: "Our organic traffic and leads have skyrocketed. SEO is now our #1 customer acquisition channel.",
      author: "David Park",
      role: "CMO, Tech SaaS Company"
    }
  },
  {
    id: 5,
    title: 'Email Marketing Campaign',
    description: 'Generated $100K in revenue through targeted email marketing campaigns with 45% open rate.',
    image: project1Image,
    category: 'Email Marketing',
    duration: '3 months',
    status: 'Completed',
    client: 'E-Learning Platform',
    metrics: { revenue: '$100K', opens: '45%', clicks: '25%', conversions: '8%' },
    overview: 'Strategic email marketing campaign that transformed email from an underutilized channel into the primary revenue driver through automation, segmentation, and personalized content.',
    challenge: 'Low email engagement (12% open rate), no segmentation strategy, generic one-size-fits-all content, and high unsubscribe rates. Email was generating minimal revenue despite a large subscriber base.',
    solution: 'Implemented advanced segmentation based on user behavior and interests. Created personalized email sequences with dynamic content. Developed automated nurture campaigns and re-engagement workflows. A/B tested subject lines, content, and send times.',
    results: [
      { label: 'Revenue Generated', value: '$100K', description: 'Direct email revenue in 3 months' },
      { label: 'Open Rate', value: '45%', description: 'Up from 12% to 45%' },
      { label: 'Click-Through Rate', value: '25%', description: 'Industry-leading CTR' },
      { label: 'Conversion Rate', value: '8%', description: 'Email-to-sale conversion' }
    ],
    testimonial: {
      quote: "Email is now our most profitable channel. The personalization strategy was a game-changer.",
      author: "Lisa Anderson",
      role: "VP Marketing, E-Learning Platform"
    }
  },
  {
    id: 6,
    title: 'PPC Excellence',
    description: 'Managed $50K monthly ad spend generating 400% ROI through Google Ads and Facebook Ads.',
    image: project4Image,
    category: 'PPC',
    duration: '5 months',
    status: 'Completed',
    client: 'Home Services Company',
    metrics: { roi: '400%', ctr: '8%', conversions: '1200+', cpa: '-45%' },
    overview: 'High-performance PPC campaign management across Google Ads and Facebook Ads that maximized return on ad spend through continuous optimization, strategic bidding, and compelling ad creative.',
    challenge: 'Inefficient ad spend with low ROI (120%), high cost per acquisition, poor ad quality scores, and campaigns that were not profitable. Previous agency delivered minimal results.',
    solution: 'Restructured account architecture for better performance. Created high-converting ad copy and landing pages. Implemented advanced bidding strategies and negative keyword optimization. Set up proper conversion tracking and attribution.',
    results: [
      { label: 'Return on Ad Spend', value: '400%', description: 'Up from 120% to 400% ROI' },
      { label: 'Click-Through Rate', value: '8%', description: 'Double industry average' },
      { label: 'Total Conversions', value: '1200+', description: '1,200+ qualified leads' },
      { label: 'Cost Per Acquisition', value: '-45%', description: 'CPA reduced by 45%' }
    ],
    testimonial: {
      quote: "Finally, PPC that actually works. Our lead quality and volume have never been better.",
      author: "James Martinez",
      role: "Owner, Home Services Company"
    }
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get project from route state or data
  const project = location.state?.project || projectsData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="error-page">
        <h1>Campaign Not Found</h1>
        <p>Sorry, this campaign doesn't exist.</p>
        <button onClick={() => navigate('/#projects')} className="back-home-btn">
          <FiArrowLeft /> Back to Campaigns
        </button>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section className="case-hero">
        <button onClick={() => navigate('/#projects')} className="back-btn">
          <FiArrowLeft />
          <span>Back to Campaigns</span>
        </button>

        <div className="hero-content">
          <div className="hero-tags">
            <span className="category-tag">{project.category}</span>
            {project.featured && (
              <span className="featured-tag-hero">
                <FiAward size={16} />
                Featured
              </span>
            )}
          </div>

          <h1 className="hero-title">{project.title}</h1>
          <p className="hero-description">{project.description}</p>

          <div className="hero-meta">
            <div className="meta-item">
              <FiCalendar />
              <div>
                <div className="meta-label">Duration</div>
                <div className="meta-value">{project.duration}</div>
              </div>
            </div>
            <div className="meta-item">
              <FiTarget />
              <div>
                <div className="meta-label">Client</div>
                <div className="meta-value">{project.client}</div>
              </div>
            </div>
            <div className="meta-item">
              <FiCheckCircle />
              <div>
                <div className="meta-label">Status</div>
                <div className="meta-value">{project.status}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={project.image} alt={project.title} />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="case-metrics">
        <div className="metrics-container">
          <h2 className="section-heading">Campaign Results</h2>
          <div className="metrics-grid">
            {project.results.map((result, index) => (
              <div key={index} className="metric-card">
                <div className="metric-icon-wrapper">
                  <FiTrendingUp />
                </div>
                <div className="metric-number">{result.value}</div>
                <div className="metric-title">{result.label}</div>
                <div className="metric-desc">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Details */}
      <section className="case-details">
        <div className="details-container">
          {/* Overview */}
          <div className="detail-block">
            <h2 className="detail-heading">Overview</h2>
            <p className="detail-text">{project.overview}</p>
          </div>

          {/* Challenge */}
          <div className="detail-block highlight-block">
            <h2 className="detail-heading">The Challenge</h2>
            <p className="detail-text">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="detail-block">
            <h2 className="detail-heading">Our Solution</h2>
            <p className="detail-text">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="case-testimonial">
          <div className="testimonial-container">
            <div className="quote-mark">"</div>
            <blockquote className="testimonial-quote">
              {project.testimonial.quote}
            </blockquote>
            <div className="testimonial-author">
              <div className="author-name">{project.testimonial.author}</div>
              <div className="author-role">{project.testimonial.role}</div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="case-cta">
        <div className="cta-container">
          <h2 className="cta-heading">Ready to achieve similar results?</h2>
          <p className="cta-text">Let's discuss how I can help grow your business with proven marketing strategies.</p>
          <button onClick={() => navigate('/#contact')} className="cta-button">
            Start Your Campaign
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
