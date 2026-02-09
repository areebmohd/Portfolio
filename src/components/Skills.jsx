import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools, FaLayerGroup } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const customSkills = [
    { category: "Frontend", icon: FaCode, items: ["React", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", icon: FaServer, items: ["Node.js", "Express.js", "Firebase", "REST APIs"] },
    { category: "Mobile", icon: FaMobileAlt, items: ["React Native", "Expo", "Android Studio"] },
    { category: "Languages", icon: FaLayerGroup, items: ["Python", "JavaScript", "TypeScript"] },
    { category: "Databases", icon: FaDatabase, items: ["MySQL", "Firestore", "MongoDB"] },
    { category: "Tools", icon: FaTools, items: ["GitHub", "VS Code", "AI Tools", "AWS Basics"] },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {customSkills.map((group, index) => (
            <div key={index} className="common-card skills-card">
              <div className="common-card-header">
                <div className="common-icon-wrapper">
                  <group.icon size={30} />
                </div>
                <h3 className="common-card-title">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
