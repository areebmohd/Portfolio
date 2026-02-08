import { FaGithub, FaTwitter } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Mohd Areeb</div>
                <div className="navbar-socials">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub size={24} /><p>GitHub</p>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaTwitter size={24} /><p>Twitter</p>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
