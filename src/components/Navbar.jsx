import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Mohd Areeb</div>
                <div className="navbar-socials">
                    <a href="https://github.com/areebmohd" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub size={35} /><p>GitHub</p>
                    </a>
                    <a href="https://x.com/ashu_cdx" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaXTwitter size={35} /><p>Twitter</p>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
