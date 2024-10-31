import { alibaba, youtube, amazon, jumia, zawadi } from '../assets/index';
import styles from '../styles/CompaniesSectionStyles';

const CompaniesSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Employees From This Companies Use Us</h3>
            <div className={styles.logoContainer}>
                <img src={alibaba} alt="Alibaba" className={styles.logo} />
                <img src={youtube} alt="Youtube" className={styles.logo} />
                <img src={amazon} alt="Amazon" className={styles.logo} />
                <img src={jumia} alt="Jumia" className={styles.logo} />
                <img src={zawadi} alt="Zawadi" className={styles.logo} />
            </div>
        </section>
    );
};

export default CompaniesSection;
