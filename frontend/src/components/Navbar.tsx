import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/NavbarStyles';
import { logo }from '../assets/index';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isLogoLoaded, setIsLogoLoaded] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {isLogoLoaded ? (
            <img 
              src={logo} 
              alt="Beauty" 
              onError={() => setIsLogoLoaded(false)} 
              className="w-16 h-16 md:w-20 md:h-20" 
            />
          ) : (
            "Beauty"
          )}
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className={styles.toggleButton}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

       
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.openMenu : styles.closedMenu}`}>
          <li>
            <Link to="/" className={styles.link}>About</Link>
          </li>
          <li>
            <Link to="/pricing" className={styles.link}>Pricing</Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>About</Link>
          </li>
        </ul>

        
        <div className={styles.actionButtons}>
          <button
            className={styles.getStartedButton}
            onClick={() => isSignedIn ? navigate('/dashboard/analysis') : navigate('/signup')}
          >
            Get Started
          </button>
          <button
            className={styles.loginButton}
            onClick={() => isSignedIn ? navigate('/dashboard/analysis') : navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
