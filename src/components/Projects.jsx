import { useState } from "react";
import ScreenshotModal from "./ScreenshotModal";
import { FaExternalLinkAlt, FaImages } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      summary:
        "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
      link: "#",
      screenshots: [
        "https://via.placeholder.com/800x500/1e293b/007bff?text=Dashboard",
        "https://via.placeholder.com/800x500/1e293b/007bff?text=Product+Page",
        "https://via.placeholder.com/800x500/1e293b/007bff?text=Cart",
      ],
    },
    {
      id: 2,
      name: "Task Management App",
      summary:
        "A productivity tool for teams to track tasks, collaborate in real-time, and analyze progress with interactive charts.",
      link: "#",
      screenshots: [
        "https://via.placeholder.com/400x700/1e293b/b700ff?text=Mobile+Home",
        "https://via.placeholder.com/400x700/1e293b/b700ff?text=Task+Detail",
        "https://via.placeholder.com/400x700/1e293b/b700ff?text=Settings",
      ],
    },
    {
      id: 3,
      name: "Social Media Dashboard",
      summary:
        "An analytics dashboard aggregating data from multiple social platforms to provide actionable insights for content creators.",
      link: "#",
      screenshots: [
        "https://via.placeholder.com/800x500/1e293b/34d399?text=Analytics",
        "https://via.placeholder.com/800x500/1e293b/34d399?text=Audience",
      ],
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
            <div key={project.id} className="project-card glass">
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-actions">
                  <button
                    className="btn-secondary btn-small"
                    onClick={() => handleOpenModal(project)}
                  >
                    <FaImages /> Gallery
                  </button>
                  <a
                    href={project.link}
                    className="btn-primary btn-small"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <FaExternalLinkAlt size={14} />
                  </a>
                </div>
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
