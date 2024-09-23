import { useNavigate } from 'react-router-dom';

interface AttractionCardProps {
  name: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  link: string; // Link to specific attraction page
}

const AttractionCard: React.FC<AttractionCardProps> = ({ name, image, shortDescription, link }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative p-4 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
      onClick={() => navigate(link)} // Redirect to the specific attraction page
    >
      {/* Image */}
      <div className="h-32 w-full bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${image})` }}></div>
      {/* Attraction Name */}
      <h2 className="text-xl font-bold mt-3">{name}</h2>
      {/* Short Description */}
      <p className="text-gray-700 mt-2">{shortDescription}</p>

    </div>
  );
};

export default AttractionCard;
