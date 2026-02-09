import { FaCode, FaMobileAlt } from 'react-icons/fa';
import './Expertise.css';

const Expertise = () => {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="expertise-grid">
          <div className="common-card">
            <div className="common-card-header">
              <div className="common-icon-wrapper">
                <FaCode size={30} />
              </div>
              <h3 className="common-card-title">Web Development</h3>
            </div>
            <p className="common-card-text">
              I build modern, responsive, and high-performance websites using technologies like React and Tailwind CSS.
              My focus is on creating seamless user experiences for <i>businesses and individuals</i>.
            </p>
          </div>
          <div className="common-card">
            <div className="common-card-header">
              <div className="common-icon-wrapper">
                <FaMobileAlt size={30} />
              </div>
              <h3 className="common-card-title">Mobile App Development</h3>
            </div>
            <p className="common-card-text">
              I create cross-platform mobile applications for iOS and Android using React Native, ensuring a native-like experience.
              Optimized for performance and usability for <i>businesses and individuals</i>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
