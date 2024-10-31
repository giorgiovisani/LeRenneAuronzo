import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useLanguage} from '../context/LanguageContext';
import attractionsEN from '../locales/attractions_eng.json';
import attractionsIT from '../locales/attractions_it.json';
import {useTranslation} from 'react-i18next';
import ImageSlider from '../components/ImageSlider'; // Adjust the import path as necessary
import '../App.css'; // Import the App.css file

interface Attraction {
  name: string;
  image: string;
  longDescription: string;
  link: string;
  shortDescription: string;
  lat: number; // Add latitude
  lng: number; // Add longitude
  getThere: string; // Add getThere description

}

const AttractionDetail: React.FC = () => {
  const {attractionId} = useParams<{ attractionId: string }>();
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const {language} = useLanguage();
  const {t} = useTranslation();
  const PUBLIC_URL = import.meta.env.BASE_URL;
  const GOOGLE_MAPS_API_KEY: string = 'AIzaSyBNzaAEq0TJme_v6r7rgDj2YnnbM6XqBoo';

  useEffect(() => {
    if (attractionId) {
      const data = language === 'en' ? attractionsEN.attractions : attractionsIT.attractions;
      const foundAttraction = data.find((attr: Attraction) => attr.link.includes(attractionId));

      if (foundAttraction) {
        setAttraction(foundAttraction);
        // Load images dynamically
        const imagePaths = Array.from({length: 5}, (_, i) =>
          `${PUBLIC_URL}images/${attractionId}/${i + 1}.jpg` // Load lower-resolution images
        );
        setImages(imagePaths);
      } else {
        setError('Attraction not found');
      }
    } else {
      setError('Invalid attraction ID');
    }
  }, [attractionId, language, PUBLIC_URL]);

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  if (!attraction) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${attraction.lat},${attraction.lng}`;

  return (
    <div className="attraction-detail">
      <h1 className="attraction-title">{t(attraction.name)}</h1>
      <img src={`${PUBLIC_URL}${attraction.image}`} alt={t(attraction.name)}
           className="attraction-image"/>
      <p className="attraction-description">{t(attraction.longDescription)}</p>
      <div className="attraction-map-container">
        <div className="attraction-map-section">
          <h2 className="attraction-map-title">{t('attractionDetail.getThere')}</h2>
          <p className="attraction-map-description">{t(attraction.getThere)}</p>
        </div>
        <div className="attraction-map-section">
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{border: 0}}
            src={mapSrc}
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="attraction-slider-title">{t('attractionDetail.secondaryPicsTitle')}</h2>
        <ImageSlider images={images} alt="attraction secondary pics"/>
      </div>
    </div>
  );
};

export default AttractionDetail;
