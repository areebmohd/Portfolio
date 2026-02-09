import './Hero.css';

const Hero = () => {
    return (
        <section className="section hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hi, I am</p>
                    <h1 className="hero-name">Mohd Areeb</h1>
                    <h2 className="hero-role">Software <span className="gradient-text">Developer</span></h2>
                    <p className="hero-summary">
                        I am a passionate developer with 2+ years of experience in building modern web and mobile applications.
                        I am skilled in developing tech solutions for businesses and individuals.
                    </p>
                    <div className="hero-cta">  
                        <a href="#projects" className="btn-primary">View Work</a>
                        <a href="#contact" className="btn-secondary">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image">
                </div>
            </div>
        </section>
    );
};

export default Hero;
