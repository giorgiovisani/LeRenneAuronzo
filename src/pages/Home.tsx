import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import '../styles/animations.css'
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {

  const { t } = useTranslation();

  return (
    <>

      {/* Full-size background section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('./images/home_background.jpg')` }}
      >
        {/* Overlay for darkening the background slightly */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">

          {/* Apartment Name - Large and centered */}
          <h1 className="text-white text-6xl font-bold tracking-wide mb-4 animate-fadeIn">
            {t('homepage.title')}
          </h1>

          {/* Poetic Sentence - Gradual appearance */}
          <p className="text-white text-xl text-center w-3/4 md:w-1/2 leading-relaxed animate-fadeInSlow">
           {t('homepage.poetic_sentence')} – <em>{t('homepage.author')}</em>
          </p>
        </div>
      </div>

      {/* Additional content can be added here */}
    </>
  );
};

export default Home;
