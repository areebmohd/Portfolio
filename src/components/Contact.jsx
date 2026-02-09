import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section" id="contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    I'm currently looking for new opportunities. If you want to grow your <i>business</i> faster or just want some help, I'd love to help. Let's connect and create something amazing.
                </p>

                <div className="contact-grid">
                    <div className="common-card">
                        <div className="common-card-header centered">
                            <div className="common-icon-wrapper">
                                <FaPhone size={27} />
                            </div>
                            <h3 className="common-card-title">Phone</h3>
                        </div>
                        <p className="common-card-text centered">+91 7534846938</p>
                    </div>

                    <div className="common-card">
                        <div className="common-card-header centered">
                            <div className="common-icon-wrapper">
                                <FaEnvelope size={27} />
                            </div>
                            <h3 className="common-card-title">Email</h3>
                        </div>
                        <p className="common-card-text centered">areebmohd683@gmail.com</p>
                    </div>

                    <div className="common-card">
                        <div className="common-card-header centered">
                            <div className="common-icon-wrapper">
                                <FaMapMarkerAlt size={27} />
                            </div>
                            <h3 className="common-card-title">Location</h3>
                        </div>
                        <p className="common-card-text centered">Gurugram, India</p>
                    </div>
                </div>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} • Mohd Areeb</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
