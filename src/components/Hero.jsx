import './Hero.css';
import dp2 from '../assets/dp2.png';

const Hero = () => {
    return (
        <section className="section hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hi, I am</p>
                    <h1 className="hero-name">Mohd Areeb</h1>
                    <h2 className="hero-role">Software <span className="gradient-text">Developer</span></h2>
                    <p className="hero-summary">
                        I craft accessible, pixel-perfect, and performant web and mobile applications.
                        Merging creativity with code to build modern solutions for businesses and individuals.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn-primary">View Work</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={dp2} alt="Mohd Areeb" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
