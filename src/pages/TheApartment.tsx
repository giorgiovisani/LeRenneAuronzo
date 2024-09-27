import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import 'tailwindcss/tailwind.css';
import {useTranslation} from 'react-i18next';
import { useState, useEffect } from 'react';

import ImageSlider from '../components/ImageSlider';

const TheApartment: React.FC = () => {

  const PUBLIC_URL = import.meta.env.BASE_URL;
  const {t} = useTranslation();

  const apartmentSections = Object.keys(t('apartment', {returnObjects: true})).filter(key => key !== 'title');
  const [images, setImages] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const fetchImageConfig = async () => {
      try {
        const response = await fetch(`${PUBLIC_URL}data/imageConfig.json`);
        if (response.ok) {
          const imageConfig = await response.json();
          setImages(imageConfig);
        } else {
          console.error('Failed to fetch image configuration');
        }
      } catch (error) {
        console.error('Error fetching image configuration:', error);
      }
    };

    fetchImageConfig();
  }, [PUBLIC_URL]);


  return (
    <>

      {/* Header */}
      <header className="bg-cover bg-center h-64"
              style={{backgroundImage: `url('${PUBLIC_URL}images/apartment_header2.jpg')`}}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            {t('apartment.title')}
          </h1>
        </div>
      </header>

      {/* Apartment Sections */}
      <main className="container mt-5">
        {apartmentSections.map((section, index) => (
          <section key={index} className="mb-12">
            <div className="row">
              <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                {images[section] && images[section].length > 0 ? (
                  <ImageSlider images={images[section]} alt={t(`apartment.${section}.title`)} />
                ) : (
                  <p>No images found for {section}</p>
                )}              </div>

              <div className="col-md-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3">
                  {t(`apartment.${section}.title`)}
                </h2>
                <p className="text-lg leading-relaxed">
                  {t(`apartment.${section}.description`)}
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Le Renne Apartment. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default TheApartment;
