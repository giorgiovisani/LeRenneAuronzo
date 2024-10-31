import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import '../styles/animations.css'
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import '../App.css'; // Import the App.css file
import {ToggleButton, ToggleButtonGroup, Box, Container} from '@mui/material';

const Home: React.FC = () => {

  const {t} = useTranslation();

  return (
    <>
      {/* Full-size background section */}
      <div
        className="home-background"
        style={{backgroundImage: `url('./images/home_background.jpg')`}}
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

      {/*/!* Buttons at the bottom *!/*/}
      {/*<div className="button-container">*/}
      {/*  <Link to="/attractions" className="custom-button">{t('homepage.what_to_do_around')}</Link>*/}
      {/*  <Link to="/availability" className="custom-button">{t('homepage.book_now')}</Link>*/}
      {/*</div>*/}


      <div className="button-container">
        <Container
          sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}>
          <ToggleButton component={Link} to="/attractions" value="attractions" className="custom-button">
            {t('homepage.what_to_do_around')}
          </ToggleButton>
        </Container>

      </div>
      {/* Additional content can be added here */}
    </>
  );
};

export default Home;
