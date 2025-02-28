import React, { useState, useEffect } from 'react';
import AttractionCard from '../components/AttractionCard';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { useLanguage } from '../context/LanguageContext'; // Adjust the import path as necessary
import attractionsEN from '../locales/attractions_eng.json'; // Adjust the path as necessary
import attractionsIT from '../locales/attractions_it.json'; // Adjust the path as necessary
import Search from '../components/Search'; // Import the Search component
import '../App.css';
import {Header} from "../components/Header.tsx"; // Import the App.css file

interface Attraction {
  name: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  link: string;
}

const AttractionsPage: React.FC = () => {
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
        const data = language === 'en' ? attractionsEN.attractions : attractionsIT.attractions;
        if (Array.isArray(data)) {
          setAttractions(data);
          setFilteredAttractions(data); // Initialize filtered attractions with all attractions
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
    return <div className="p-8 text-center">{t('attractions.loading')}</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }


  return (
    <>
      <Header
        title={t("attractions.title")}
        backgroundImage={`${PUBLIC_URL}images/antorno_lago.jpg`}
      />
      <div className="attractions-page">
        {/*<h1 className="attractions-title">{t('attractions.title')}</h1>*/}
        <Search onSearch={handleSearch} onToggle={toggleSearch} isOpen={isSearchOpen} />
        <div className="attractions-grid">
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
    </>
  );
};

export default AttractionsPage;
