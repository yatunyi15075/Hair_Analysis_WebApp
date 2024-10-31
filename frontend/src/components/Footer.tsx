import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from '../styles/FooterStyles';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    Beauty<span className={styles.logoHighlight}>.</span>
                </div>
                <div className={styles.links}>
                    <a href="/privacy" className={styles.link}>Privacy Policy</a>
                    <a href="/terms" className={styles.link}>Terms of Service</a>
                    <a href="/contact" className={styles.link}>Contacts</a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.socialLink}><FaFacebook /></a>
                    <a href="#" className={styles.socialLink}><FaInstagram /></a>
                    <a href="#" className={styles.socialLink}><FaTwitter /></a>
                </div>
            </div>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} Beauty. All rights reserved.
            </div>
        </footer>
    )
}


export default Footer;
