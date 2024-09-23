// AttractionDetail.tsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Interface for the attraction data
interface Attraction {
  name: string;
  image: string;
  longDescription: string;
  link: string;
  shortDescription: string;
}

const AttractionDetail: React.FC = () => {
  const { attractionId } = useParams<{ attractionId: string }>(); // Get the attraction ID from the URL
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (attractionId) { // Ensure attractionId is defined
        // Fetch attraction data from the JSON file
        fetch('/data/attractions.json')
          .then((response) => response.json())
          .then((data) => {
            const foundAttraction = data.find((attr: Attraction) => attr.link.includes(attractionId));
            if (foundAttraction) {
              setAttraction(foundAttraction);
            } else {
              setError('Attraction not found');
            }
          })
          .catch((error) => {
            console.error('Error loading attraction:', error);
            setError('Failed to load attraction');
          });
        } else {
          setError('Invalid attraction ID');
        }
  }, [attractionId]);

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  if (!attraction) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{attraction.name}</h1>
      <img src={attraction.image} alt={attraction.name} className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg" />
      <p className="text-lg">{attraction.longDescription}</p>
    </div>
  );
};

export default AttractionDetail;
