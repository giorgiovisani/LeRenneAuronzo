import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import 'tailwindcss/tailwind.css';
import {useTranslation} from 'react-i18next';
import {useState, useEffect} from 'react';
import ImageSlider from '../components/ImageSlider';
import '../App.css'; // Import the App.css file

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
      <header className="apartment-header"
              style={{backgroundImage: `url('${PUBLIC_URL}images/apartment_header2.jpg')`}}>
        <div className="overlay">
          <h1 className="text-white text-4xl font-bold">
            {t('apartment.title')}
          </h1>
        </div>
      </header>

      {/* Apartment Sections */}
      <main className="apartment-main">
        {apartmentSections.map((section, index) => (
          <section key={index} className="apartment-section">
            <div className="row">

              <div className="col-md-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3">
                  {t(`apartment.${section}.title`)}
                </h2>
                <p className="text-lg leading-relaxed">
                  {t(`apartment.${section}.description`)}
                </p>
              </div>

              <div className={`col-md-6 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                {images[section] && images[section].length > 0 ? (
                  <ImageSlider images={images[section]} alt={t(`apartment.${section}.title`)}/>
                ) : (
                  <p>No images found for {section}</p>
                )}
              </div>

            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default TheApartment;
