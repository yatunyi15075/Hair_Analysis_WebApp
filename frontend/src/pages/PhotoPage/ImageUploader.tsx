import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { alibaba, amazon, jumia } from '../../assets/index';
import styles from '../../styles/ImageUploaderStyles';
import UpgradeCard from '../UpgradeCard';

interface Prediction {
    className: string;
    probability: number;
}

interface ImageUploaderProps {
    imageSrc: string | null ;
    setImageSrc: (src: string | null) => void;
    predictions: Prediction[] | null;
    classifyImage: (file: File) => Promise<void>;
    setIsCameraView: React.Dispatch<React.SetStateAction<boolean>>
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
    imageSrc,
    setImageSrc,
    predictions,
    classifyImage,
    setIsCameraView
}) => {

    const navigate = useNavigate();
    const [showModel, setShowModel] = useState(false);
    const [selectedWebsite, setSelectedWebsite] = useState<string | null>(null);
    const [credits, setCredits] = useState(150);

    const handleFileChange = async (file: File) => {
        if (credits < 1) {
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result as string);
            classifyImage(file)

            setCredits(prev => Math.max(prev - 25));
        };
        reader.readAsDataURL(file);
    };

    const handleInputClick = () => {
        document.getElementById('fileInput')?.click();
    };

    const handleBuyHairProducts = () => {
        if (predictions && predictions.length > 0){
            const topPrediction = predictions.reduce((prev, current) => 
                prev.probability > current.probability ? prev : current
            );
            const product = encodeURIComponent(topPrediction.className + 'hair products');
            setSelectedWebsite(product);
            setShowModel(true);
        } else {
            alert('No predictions available to search for products.')
        }
    };

    const handleWebsiteClick = (website: string) =>{
        let url = '';
        switch (website) {
            case 'Amazon':
                url = `https://www.amazon.com/s?k=${selectedWebsite}`;
                break;
            case 'Alibaba':
                url = `https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&SearchText=${selectedWebsite}`;
                break;
            case 'Jumia':
                url = `https://www.jumia.com.ng/catalog/?g=${selectedWebsite}`;
                break;
            default:
                return;
        }
        window.open(url, '_blank')
        setShowModel(false);
    };

    return (
      <div className={styles.container}>
        {credits < 1 ? (
            <UpgradeCard />
        ) : (
            <>
            {imageSrc ? (
                <img src={imageSrc} alt='Capured' className={styles.image} />
            ) : (
                <img 
                    src="https://ecamp[le.com"
                    alt= "Take a Photo"
                    className={styles.image}
                />
            )}
            <h2 className={styles.title}>Take a Photo</h2>
            <p className={styles.description}>We'll use this to analyze and return predictions from the AI model</p>
            <p className={styles.credits}>Credits: {credits}</p>
            
            <button
                className={styles.button}
                onClick={() => {
                    setIsCameraView(true);
                    setCredits(prev => Math.max(prev - 25, 0));
                }}
                disabled={credits < 1}
            >
                Use Camera
            </button>
            <div className="flex justify-center space-x-4 mb-4">
                <div className="relative inline-block">
                    <input
                        id="fileInput" 
                        type="file"
                        accept="image/png, image.jpeg, image/jpg"
                        onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) handleFileChange(file);
                        }}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                <button
                    className={styles.button}
                    onClick={handleInputClick}
                    disabled={credits < 1}
                >
                Choose from Library
                </button>
                </div>
            </div>

            {predictions && (
                <div className={styles.analysisContainer}>
                    <h3 className={styles.analysisTitle}>Analysis Result</h3>
                    <ul>
                        {predictions.map((concept, index) => (
                            <li key={index} className={styles.analysisItem}>
                                {concept.className}: {Math.round(concept.probability * 100)}%
                            </li>
                        ))}
                    </ul>
                    <button
                        className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none"
                        onClick={handleBuyHairProducts}
                    >
                        Buy Hair Products
                    </button>
                </div>
            )}
            
            {showModel && (
                <div className={styles.modalContainer}>
                    <div className={styles.modalContent}>
                        <h3 className={styles.modalTitle}>Choose a Website</h3>
                        <div className="flex flex-col space-y-2">
                            <button
                            className={styles.websiteButton}
                            onClick={() => handleWebsiteClick('Amazon')}
                            >
                                <img src={amazon} alt="Amazon" className="w-6 h-6"/>
                                <span>Amazon</span>
                            </button>

                            <button
                            className={styles.websiteButton}
                            onClick={() => handleWebsiteClick('Alibaba')}
                            >
                                <img src={alibaba} alt="Alibaba" className="w-6 h-6"/>
                                <span>Alibaba</span>
                            </button>

                            <button
                            className={styles.websiteButton}
                            onClick={() => handleWebsiteClick('Jumia')}
                            >
                                <img src={jumia} alt="Jumia" className="w-6 h-6"/>
                                <span>Jumia</span>
                            </button>

                        </div>

                    </div>

                </div>
            )}
            </>
        )}

      </div>
    )
  }
  
  export default ImageUploader
  