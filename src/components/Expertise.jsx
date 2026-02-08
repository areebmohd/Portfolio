import { FaCode, FaMobileAlt } from 'react-icons/fa';
import './Expertise.css';

const Expertise = () => {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card glass">
            <div className="expertise-icon-wrapper">
              <FaCode size={50} />
            </div>
            <h3>Web Development</h3>
            <p>
              I build modern, responsive, and high-performance websites using the latest technologies like React, Next.js, and Tailwind CSS.
              My focus is on creating seamless user experiences.
            </p>
          </div>
          <div className="expertise-card glass">
            <div className="expertise-icon-wrapper">
              <FaMobileAlt size={50} />
            </div>
            <h3>Mobile App Development</h3>
            <p>
              I create cross-platform mobile applications for iOS and Android using React Native, ensuring a native-like experience.
              Optimized for performance and usability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
