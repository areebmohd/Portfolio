import { useState, useEffect } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={scrollToTop}>
          Mohd Areeb
        </div>

        {/* Center menu links */}
        <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#expertise" className="nav-link" onClick={closeMobileMenu}>
            Expertise
          </a>
          <a href="#skills" className="nav-link" onClick={closeMobileMenu}>
            Skills
          </a>
          <a href="#projects" className="nav-link" onClick={closeMobileMenu}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
            Contact
          </a>
        </div>

        <div className="navbar-right">
          <div className="navbar-socials">
            <a
              href="https://github.com/areebmohd"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://x.com/ashu_cdx"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Twitter"
            >
              <FaXTwitter size={18} />
            </a>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
