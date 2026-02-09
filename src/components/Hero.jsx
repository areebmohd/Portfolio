import "./Hero.css";
import resume from "../assets/MohdAreebResume.pdf";

const Hero = () => {
  return (
    <section className="section hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">Mohd Areeb</h1>
          <h2 className="hero-role">
            Software <span className="gradient-text">Developer</span>
          </h2>
          <p className="hero-summary">
            I am a passionate developer with 2+ years of experience in building
            modern web and mobile applications. I am skilled in developing tech
            solutions for businesses and individuals.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tertiary"
            >
              View Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
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
