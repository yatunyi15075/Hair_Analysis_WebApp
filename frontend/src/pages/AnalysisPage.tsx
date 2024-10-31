import { useNavigate } from 'react-router-dom';
import { prof, tube1, tube2, tube3, tube4, tube5 } from '../assets/index';

import styles from '../styles/AnalysisPageStyles'; // Import styles

const AnalysisPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dashboard/photo');
  };

  return (
    <div className={styles.container}>
      {/* Colorful background circles */}
      <div className={styles.backgroundCircles}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>

      {/* Test tubes and Scientist image */}
      <div className={styles.content}>
        {/* Test tubes */}
        <img src={tube1} alt="Test tube 1" className={styles.tube1} />
        <img src={tube2} alt="Test tube 2" className={styles.tube2} />
        <img src={tube4} alt="Test tube 3" className={styles.tube3} />
        <img src={tube5} alt="Test tube 4" className={styles.tube4} />

        {/* Scientist image */}
        <img src={prof} alt="Scientist" className={styles.scientistImage} />

        {/* Start Analysis button */}
        <button onClick={handleButtonClick} className={styles.startButton}>
          Start Analysis
        </button>
      </div>
    </div>
  );
};

export default AnalysisPage;
