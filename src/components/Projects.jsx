import { useState } from "react";
import ScreenshotModal from "./ScreenshotModal";
import { FaUtensils, FaStore, FaBriefcase } from "react-icons/fa";
import "./Projects.css";

// Import all screenshots dynamically
const foodDelModules = import.meta.glob("../assets/fooddel/*.jpg", {
  eager: true,
});
const foodDelScreenshots = Object.values(foodDelModules).map(
  (mod) => mod.default,
);

const bizManagerModules = import.meta.glob("../assets/bizmanager/*.jpg", {
  eager: true,
});
const bizManagerScreenshots = Object.values(bizManagerModules).map(
  (mod) => mod.default,
);

const myServiceModules = import.meta.glob("../assets/myservice/*.jpg", {
  eager: true,
});
const myServiceScreenshots = Object.values(myServiceModules).map(
  (mod) => mod.default,
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "FoodDel",
      icon: <FaUtensils size={30} />,
      summary:
        "A full-stack food delivery web application built using the MERN stack, designed to let users browse restaurant menu, place food orders through online payments with Razorpay. Admin panel included to manage orders, users and food items on site.",
      link: "https://food-del-frontend-irvg.onrender.com",
      screenshots: foodDelScreenshots,
    },
    {
      id: 2,
      name: "BizManager",
      icon: <FaStore size={30} />,
      summary:
        "Cross-platform mobile application built with React Native and Firebase to support business management workflows. Provide inventory management, sales, performance dashboard, billing, barcode scanning and upi payments.",
      link: "https://github.com/areebmohd/BusinessManager",
      screenshots: bizManagerScreenshots,
    },
    {
      id: 3,
      name: "MyService",
      icon: <FaBriefcase size={30} />,
      summary:
        "A full-stack service listing and booking platform built using the MERN stack. Help users to search for service providers with filters and allow service providers to showcase their service information through profiles. Use AWS storage for storing photos and videos",
      link: "https://my-service-frontend.onrender.com",
      screenshots: myServiceScreenshots,
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="common-card project-card">
              <div className="common-card-header">
                <div className="common-icon-wrapper">{project.icon}</div>
                <h3 className="common-card-title">{project.name}</h3>
              </div>
              <p className="common-card-text">{project.summary}</p>
              <div className="project-actions">
                <a
                  href={project.link}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <button
                  className="btn-secondary"
                  onClick={() => handleOpenModal(project)}
                >
                  Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScreenshotModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        images={selectedProject ? selectedProject.screenshots : []}
      />
    </section>
  );
};

export default Projects;
