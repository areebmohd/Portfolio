import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section" id="contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-grid">
                    <div className="contact-item glass">
                        <div className="contact-icon">
                            <FaPhone size={24} />
                        </div>
                        <h3>Phone</h3>
                        <p>+91 7534846938</p>
                    </div>

                    <div className="contact-item glass">
                        <div className="contact-icon">
                            <FaEnvelope size={24} />
                        </div>
                        <h3>Email</h3>
                        <p>areebmohd683@gmail.com</p>
                    </div>

                    <div className="contact-item glass">
                        <div className="contact-icon">
                            <FaMapMarkerAlt size={24} />
                        </div>
                        <h3>Location</h3>
                        <p>Gurugram, India</p>
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
