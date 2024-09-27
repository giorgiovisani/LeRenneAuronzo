import {useTranslation} from 'react-i18next';
import {useLanguage} from '../context/LanguageContext';

interface NavBarProps {
  basename: string;
}

export const NavBar: React.FC<NavBarProps> = ({basename}) => {

  const {t, i18n} = useTranslation();
  const {language, changeLanguage} = useLanguage();

  const handleLanguageChange = (lng: string) => {
    changeLanguage(lng);
    i18n.changeLanguage(lng);
  };

  // Estrai i campi della navbar dal file JSON
  const navbarItems = Object.keys(t('navbar', { returnObjects: true })).filter(key => key !== 'title');


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Navbar brand */}
        <a className="navbar-brand" href={`${basename}`}>
          {t('navbar.title')}
        </a>

        {/* Navbar toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbarItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`${basename}#/${item}`}>
                  {t(`navbar.${item}`)}
                </a>
              </li>
            ))}
          </ul>

        {/*/!* Navbar links *!/*/}
        {/*<div className="navbar-collapse" id="navbarNav">*/}
        {/*  <ul className="navbar-nav">*/}
        {/*    <li className="nav-item">*/}
        {/*      <a className="nav-link" href={`${basename}#/apartment`}>*/}
        {/*        {t('navbar.apartment')}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li className="nav-item">*/}
        {/*      <a className="nav-link" href={`${basename}#/availability`}>*/}
        {/*        {t('navbar.availability')}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li className="nav-item">*/}
        {/*      <a className="nav-link"*/}
        {/*         href={`${basename}#/attractions`}>{*/}
        {/*        t('navbar.attractions')}*/}
        {/*      </a> /!* Link to Attractions Page *!/*/}
        {/*    </li>*/}

        {/*  </ul>*/}

        {/*  /!* Language switcher button *!/*/}
          <div className="ms-auto">
            <button onClick={() => handleLanguageChange('it')} className="btn btn-outline-light me-2">IT</button>
            <button onClick={() => handleLanguageChange('en')} className="btn btn-outline-light">EN</button>
            <p className="text-gray-300">Current Language: {language}</p>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar