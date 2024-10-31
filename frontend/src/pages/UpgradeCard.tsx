import { Link } from 'react-router-dom';

const UpgradeCard: React.FC = () => {
    return (
      <div className="bg-red-100 border border-red-500 text-red-700 p-44 rounded-lg mb-4">
        <p className="font-bold">You have finished all of your credits</p>
        <p>Please upgrade to continue using this feature</p>
        <Link to="/" className="text-red-500 font-bold hover:underline">
        Upgrade Now</Link>
      </div>
    )
  }
  
  export default UpgradeCard;
  