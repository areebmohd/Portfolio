import { FaCode, FaMobileAlt, FaChevronRight } from "react-icons/fa";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="expertise-grid">
          <div className="common-card expertise-card">
            <div className="common-card-header">
              <div className="common-icon-wrapper web-icon">
                <FaCode size={26} />
              </div>
              <div>
                <h3 className="common-card-title">Web Development</h3>
                <span className="expertise-tag">Frontend & Backend</span>
              </div>
            </div>
            <p className="common-card-text">
              I build modern, responsive, and high-performance websites using
              technologies like React, Next.js, and Node.js. My focus is on
              creating seamless user experiences and scalable backend architectures
              for businesses and individuals.
            </p>
            <ul className="expertise-bullets">
              <li>
                <FaChevronRight className="bullet-arrow" size={10} />
                React & Next.js Ecosystems
              </li>
              <li>
                <FaChevronRight className="bullet-arrow" size={10} />
                RESTful & GraphQL API Integration
              </li>
              <li>
                <FaChevronRight className="bullet-arrow" size={10} />
                Responsive, Mobile-First Layouts
              </li>
            </ul>
          </div>

          <div className="common-card expertise-card card-accent-blue">
            <div className="common-card-header">
              <div className="common-icon-wrapper mobile-icon">
                <FaMobileAlt size={26} />
              </div>
              <div>
                <h3 className="common-card-title">Mobile App Development</h3>
                <span className="expertise-tag">iOS & Android</span>
              </div>
            </div>
            <p className="common-card-text">
              I create cross-platform mobile applications for iOS and Android
              using React Native and Expo. I design smooth native-like layouts,
              integrating key features like offline database synchronization, maps,
              and secure mobile payment flows.
            </p>
            <ul className="expertise-bullets">
              <li>
                <FaChevronRight className="bullet-arrow" size={10} />
                React Native & Expo Ecosystems
              </li>
              <li>
                <FaChevronRight className="bullet-arrow" size={10} />
                Native Device API Integration
              </li>
              <li>
                <FaChevronRight className="bullet-arrow" size={10} />
                Smooth 60 FPS Layout Transitions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
