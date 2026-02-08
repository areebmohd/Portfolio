import './Skills.css';

const Skills = () => {
  const customSkills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Firebase", "REST APIs"] },
    { category: "Mobile", items: ["React Native", "Expo", "Android Studio"] },
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
    { category: "Databases", items: ["MySQL", "Firestore", "MongoDB"] },
    { category: "Tools", items: ["GitHub", "VS Code", "AI Tools", "AWS Basics"] },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {customSkills.map((group, index) => (
            <div key={index} className="skill-category glass">
              <h3>{group.category}</h3>
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
