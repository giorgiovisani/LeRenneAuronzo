import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import '../styles/animations.css'
import { useTranslation } from 'react-i18next';
import '../App.css'; // Import the App.css file

const Home: React.FC = () => {

  const { t } = useTranslation();

  return (
    <>
      {/* Full-size background section */}
      <div
        className="home-background"
        style={{ backgroundImage: `url('./images/home_background.jpg')` }}
      >
        {/* Overlay for darkening the background slightly */}
        <div className="home-overlay">

          {/* Apartment Name - Large and centered */}
          <h1 className="home-title animate-fadeIn">
            {t('homepage.title')}
          </h1>

          {/* Poetic Sentence - Gradual appearance */}
          <p className="home-sentence animate-fadeInSlow">
           {t('homepage.poetic_sentence')} – <em>{t('homepage.author')}</em>
          </p>
        </div>
      </div>

      {/* Additional content can be added here */}
    </>
  );
};

export default Home;
