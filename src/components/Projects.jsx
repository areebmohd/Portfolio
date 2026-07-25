import { useState, lazy, Suspense } from "react";
const ScreenshotModal = lazy(() => import("./ScreenshotModal"));
import {
  FaUtensils,
  FaStore,
  FaBriefcase,
  FaTruckMoving,
  FaUsers,
} from "react-icons/fa";
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

const zoroModules = import.meta.glob("../assets/Zoro/*.png", {
  eager: true,
});
const zoroScreenshots = Object.values(zoroModules).map((mod) => mod.default);

const webCrmModules = import.meta.glob("../assets/webcrm/*.png", {
  eager: true,
});
const webCrmScreenshots = Object.values(webCrmModules).map(
  (mod) => mod.default,
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "FoodDel",
      icon: <FaUtensils size={22} />,
      type: "web",
      accent: "green",
      summary:
        "A full-stack food delivery web application built using the MERN stack. Designed with online payments via Razorpay, dynamic shopping carts, and a comprehensive admin panel for listing edits, user management, and order tracking.",
      link: "https://food-del-frontend-irvg.onrender.com",
      screenshots: foodDelScreenshots,
      tags: ["React", "Node.js", "MongoDB", "Express", "Razorpay"],
    },
    {
      id: 2,
      name: "BizManager",
      icon: <FaStore size={22} />,
      type: "mobile",
      accent: "blue",
      summary:
        "Cross-platform mobile application built with React Native and Firebase to support business management workflows. Integrates inventory management, custom sales dashboards, billing reports, barcode scanning, and UPI payments.",
      link: "https://github.com/areebmohd/BusinessManager",
      screenshots: bizManagerScreenshots,
      tags: ["React Native", "Firebase", "UPI payments", "Barcode Scanner"],
    },
    {
      id: 3,
      name: "MyService",
      icon: <FaBriefcase size={22} />,
      type: "web",
      accent: "purple",
      summary:
        "A full-stack service listing and booking platform built using the MERN stack. Helps users search for local service providers, allows providers to showcase portfolios, and uses AWS S3 secure cloud storage for media attachments.",
      link: "https://my-service-frontend.onrender.com",
      screenshots: myServiceScreenshots,
      tags: ["React", "Node.js", "MongoDB", "AWS S3", "Express"],
    },
    {
      id: 4,
      name: "Zoro Delivery App",
      icon: <FaTruckMoving size={22} />,
      type: "mobile",
      accent: "green",
      summary:
        "A complete local delivery ecosystem featuring a customer ordering application, a dedicated rider app, and an admin dashboard. Built with React Native & React to support shop setup, order routing, live tracking, and socket-driven alerts.",
      link: "https://github.com/areebmohd/DeliveryPlatformMainApp",
      screenshots: zoroScreenshots,
      tags: ["React Native", "React.js", "Socket.io", "Firebase", "Expo"],
    },
    {
      id: 5,
      name: "WebCRM",
      icon: <FaUsers size={22} />,
      type: "web",
      accent: "blue",
      summary:
        "An internal CRM and lead-generation platform built using Next.js, Express, MongoDB, Puppeteer, and Socket.io. Features a Puppeteer-driven Google Maps scraper to find local businesses without websites, a market discovery dashboard, and automated WhatsApp outreach marketing templates.",
      link: "https://github.com/areebmohd/AshuWebsitesManager",
      screenshots: webCrmScreenshots,
      noCrop: true,
      tags: ["Next.js", "Express", "MongoDB", "Puppeteer", "Socket.io"],
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
          {projects.map((project) => {
            let accentClass = "";
            if (project.accent === "blue") accentClass = "card-accent-blue";
            else if (project.accent === "purple") accentClass = "card-accent-purple";

            return (
              <div key={project.id} className={`common-card project-card ${accentClass}`}>
                <div className="project-card-content">
                  <div className="common-card-header">
                    <div className="common-icon-wrapper">{project.icon}</div>
                    <h3 className="common-card-title">{project.name}</h3>
                  </div>
                  <p className="common-card-text">{project.summary}</p>
                  <div className="project-tech-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
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
              </div>
            );
          })}
        </div>
      </div>

      <Suspense fallback={null}>
        <ScreenshotModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          images={selectedProject ? selectedProject.screenshots : []}
          noCrop={selectedProject?.noCrop}
        />
      </Suspense>
    </section>
  );
};

export default Projects;
