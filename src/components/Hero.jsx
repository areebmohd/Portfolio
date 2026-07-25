import "./Hero.css";
import resume from "../assets/MohdAreebResume.pdf";
import { FaFileAlt, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for Freelance & Full-time
          </div>
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">Mohd Areeb</h1>
          <h2 className="hero-role">
            Software <span className="gradient-text">Developer</span>
          </h2>
          <p className="hero-summary">
            I am a passionate developer with 2+ years of experience in building
            high-performance web and mobile applications. I specialize in turning
            ideas into sleek, robust, and user-centric digital products.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaFileAlt size={14} /> Resume
            </a>
            <a href="#contact" className="btn-tertiary">
              <FaEnvelope size={14} /> Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Production Apps</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="galaxy-container">
            <div className="galaxy-stars"></div>
            <div className="galaxy-ring ring-1"></div>
            <div className="galaxy-ring ring-2"></div>
            <div className="galaxy-ring ring-3"></div>
            <div className="galaxy-core"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
