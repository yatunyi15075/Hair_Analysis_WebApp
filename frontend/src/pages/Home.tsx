import { useNavigate } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import CompaniesSection from '../components/CompaniesSection';
import PaymentPlansSection from '../components/PaymentPlansSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className= "min-h-screen bg-gray-900">
     <Navbar />
     <HeroSection/>
     <CompaniesSection />
     <PaymentPlansSection />
     <Footer />
    </div>
   
    
  );
};

export default Home;
