import React, { useState, useEffect } from 'react';
import AttractionCard from '../components/AttractionCard';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { useLanguage } from '../context/LanguageContext'; // Adjust the import path as necessary
import utilitiesEN from '../locales/utilities_eng.json'; // Adjust the path as necessary
import utilitiesIT from '../locales/utilities_it.json'; // Adjust the path as necessary
import Search from '../components/Search'; // Import the Search component

interface Attraction {
  name: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  link: string;
}

const UtilitiesPage: React.FC = () => {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation(); // Use the useTranslation hook
  const PUBLIC_URL = import.meta.env.BASE_URL;

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const data = language === 'en' ? utilitiesEN.attractions : utilitiesIT.attractions;
        if (Array.isArray(data)) {
          setAttractions(data);
          setFilteredAttractions(data); // Initialize filtered attractions with all attractions
        } else {
          throw new Error('Invalid utilities data');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching utilities:', error);
        setError('Failed to load utilities');
        setLoading(false);
      }
    };

    fetchAttractions();
  }, [language]);

  const handleSearch = (query: string) => {
    const filtered = attractions.filter((attraction) =>
      attraction.link.includes(query)
    );
    setFilteredAttractions(filtered);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  if (loading) {
    return <div className="p-8 text-center">{t('utilities.loading')}</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">{t('utilities.title')}</h1>
      <Search onSearch={handleSearch} onToggle={toggleSearch} isOpen={isSearchOpen} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredAttractions.map((attraction, index) => (
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
  );
};

export default UtilitiesPage;
