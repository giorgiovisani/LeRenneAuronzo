import { useTranslation } from 'react-i18next';

export const NavBar = () => {

  const {i18n} = useTranslation();
  // const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // setCurrentLang(lng);
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Navbar brand */}
                <a className="navbar-brand" href="/">Appartamento A un passo dal Lago</a>

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
                        <li className="nav-item">
                            <a className="nav-link" href="/apartment">The Apartment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/availability">Availability</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/attractions">Attractions</a> {/* Link to Attractions Page */}
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a*/}
                        {/*        className="nav-link dropdown-toggle"*/}
                        {/*        href="#"*/}
                        {/*        id="navbarDropdown"*/}
                        {/*        role="button"*/}
                        {/*       data-bs-toggle="dropdown"*/}
                        {/*        aria-expanded="false"*/}
                        {/*    >*/}
                        {/*        Attractions*/}
                        {/*    </a>*/}
                        {/*      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*        <li><a className="dropdown-item" href="#">Attraction1</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Attraction2</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Attraction3</a></li>*/}
                        {/*      </ul>*/}
                        {/*</li>*/}
                    </ul>

                    {/* Language switcher button */}
                    <div className="ms-auto">
                        <button onClick={() => changeLanguage('it')} className="btn btn-outline-light me-2">IT</button>
                        <button onClick={() => changeLanguage('en')} className="btn btn-outline-light">EN</button>
                    </div>

                    {/*/!* Language Dropdown with Flag and Name on Hover *!/*/}
                    {/*<Dropdown align="end" className="d-inline-block">*/}
                    {/*    <Dropdown.Toggle id="language-switch" variant="outline-light" className="d-flex align-items-center">*/}
                    {/*      <img*/}
                    {/*        src={currentLang === 'it' ? '/flags/italy.png' : '/flags/uk.png'}*/}
                    {/*        alt={currentLang === 'it' ? 'Italian' : 'English'}*/}
                    {/*        width="30"*/}
                    {/*        height="20"*/}
                    {/*        className="me-2"*/}
                    {/*      />*/}
                    {/*      <span className="visually-hidden">{currentLang === 'it' ? 'Italian' : 'English'}</span>*/}
                    {/*    </Dropdown.Toggle>*/}

                    {/*    <Dropdown.Menu>*/}
                    {/*      <Dropdown.Item onClick={() => changeLanguage('en')}>*/}
                    {/*        <img*/}
                    {/*          src="/flags/uk-flag.png"*/}
                    {/*          alt="English"*/}
                    {/*          width="20"*/}
                    {/*          height="15"*/}
                    {/*          className="me-2"*/}
                    {/*        />*/}
                    {/*        English*/}
                    {/*      </Dropdown.Item>*/}
                    {/*      <Dropdown.Item onClick={() => changeLanguage('it')}>*/}
                    {/*        <img*/}
                    {/*          src="/flags/italy-flag.png"*/}
                    {/*          alt="Italian"*/}
                    {/*          width="20"*/}
                    {/*          height="15"*/}
                    {/*          className="me-2"*/}
                    {/*        />*/}
                    {/*        Italiano*/}
                    {/*      </Dropdown.Item>*/}
                    {/*    </Dropdown.Menu>*/}
                    {/*</Dropdown>*/}
                </div>
            </div>
        </nav>
    );
};

export default NavBar