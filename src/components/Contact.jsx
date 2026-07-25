import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container contact-section-container">
        <div className="contact-heading-group">
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-main-title">Let's create something great together</h2>
          <p className="contact-desc">
            I am currently looking for new opportunities. If you want to grow your
            business, hire a developer, or have an exciting project idea, feel
            free to connect with me directly!
          </p>
        </div>

        <div className="contact-grid">
          <div className="common-card contact-card">
            <div className="common-card-header centered">
              <div className="common-icon-wrapper">
                <FaPhone size={20} />
              </div>
              <h3 className="common-card-title">Phone</h3>
            </div>
            <p className="common-card-text centered">+91 7534846938</p>
            <a href="tel:+917534846938" className="btn-secondary contact-card-btn">
              Call Me
            </a>
          </div>

          <div className="common-card contact-card card-accent-blue">
            <div className="common-card-header centered">
              <div className="common-icon-wrapper">
                <FaEnvelope size={20} />
              </div>
              <h3 className="common-card-title">Email</h3>
            </div>
            <p className="common-card-text centered">areebmohd683@gmail.com</p>
            <a
              href="mailto:areebmohd683@gmail.com"
              className="btn-primary contact-card-btn"
            >
              Email Me <FaPaperPlane size={10} />
            </a>
          </div>

          <div className="common-card contact-card card-accent-purple">
            <div className="common-card-header centered">
              <div className="common-icon-wrapper">
                <FaMapMarkerAlt size={20} />
              </div>
              <h3 className="common-card-title">Location</h3>
            </div>
            <p className="common-card-text centered">Gurugram, India</p>
            <a
              href="https://maps.google.com/?q=Gurugram,India"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary contact-card-btn"
            >
              View Map
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-container">
          <p>© {new Date().getFullYear()} • Mohd Areeb • Built with passion</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
