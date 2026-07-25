import {
  FaTerminal,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const customSkills = [
    {
      category: "Frontend & Mobile",
      icon: FaMobileAlt,
      items: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML/CSS"],
      accent: "blue",
      layoutClass: "layout-cols-2",
    },
    {
      category: "Backend Development",
      icon: FaServer,
      items: ["Node.js", "Express", "REST APIs", "Socket.io"],
      accent: "purple",
      layoutClass: "layout-backend",
    },
    {
      category: "Databases & Cloud",
      icon: FaDatabase,
      items: ["Supabase (PostgreSQL)", "Firebase (Auth, Firestore, FCM)", "MongoDB"],
      accent: "blue",
      layoutClass: "layout-cols-1",
    },
    {
      category: "Tools & Integrations",
      icon: FaCogs,
      items: [
        "Git/GitHub",
        "Razorpay",
        "Mappls Maps SDK",
        "Puppeteer",
        "Canva",
        "VS Code",
      ],
      accent: "green",
      layoutClass: "layout-cols-2",
    },
    {
      category: "Languages",
      icon: FaTerminal,
      items: ["JavaScript", "TypeScript", "Python"],
      accent: "green",
      layoutClass: "layout-cols-1",
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {customSkills.map((group, index) => {
            let accentClass = "";
            if (group.accent === "blue") accentClass = "card-accent-blue";
            else if (group.accent === "purple") accentClass = "card-accent-purple";

            return (
              <div key={index} className={`common-card skills-card ${accentClass}`}>
                <div className="common-card-header">
                  <div className="common-icon-wrapper">
                    <group.icon size={22} />
                  </div>
                  <h3 className="common-card-title">{group.category}</h3>
                </div>
                <div className={`skill-tags ${group.layoutClass}`}>
                  {group.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
