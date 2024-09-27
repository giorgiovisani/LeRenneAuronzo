// AttractionsPage.tsx
import React, { useState, useEffect } from 'react';
import AttractionCard from '../components/AttractionCard';
import { useLanguage } from '../context/LanguageContext'; // Adjust the import path as necessary
import attractionsEN from '../locales/attractions_eng.json'; // Adjust the path as necessary
import attractionsIT from '../locales/attractions_it.json'; // Adjust the path as necessary

interface Attraction {
  name: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  link: string;
}

const AttractionsPage: React.FC = () => {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const PUBLIC_URL = import.meta.env.BASE_URL;

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const data = language === 'en' ? attractionsEN.attractions : attractionsIT.attractions;
        if (Array.isArray(data)) {
          setAttractions(data);
        } else {
          throw new Error('Invalid attractions data');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching attractions:', error);
        setError('Failed to load attractions');
        setLoading(false);
      }
    };

    fetchAttractions();
  }, [language]);


  if (loading) {
    return <div className="p-8 text-center">Loading attractions...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Discover Attractions</h1>


        <div className="navbar-collapse" id="navbarNav">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <AttractionCard
                key={index}
                name={attraction.name}
                image={`${PUBLIC_URL}${attraction.image}`}
                shortDescription={attraction.shortDescription}
                longDescription={attraction.longDescription} // Can be used for hover effect if needed
                link={attraction.link}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default AttractionsPage;
