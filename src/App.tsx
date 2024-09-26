import ListGroup from './components/ListGroup';
import Alert from "./components/Alert.tsx";
import NavBar from "./components/NavBar.tsx";
// import BackgroundWrapper from './components/BackgroundWrapper'; // Import the Background Wrapper
import Home from "./pages/Home"; // Home component
import TheApartment from "./pages/TheApartment"; // Other page components
import AttractionsPage from "./pages/AttractionsPage.tsx"; // Other page components
import AttractionDetail from "./pages/AttractionDetail";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from './context/LanguageContext.tsx';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import './tailwind.css'; // Import Tailwind CSS globally
import './config/i18n'; // Import the i18n configuration

const basename = import.meta.env.BASE_URL;


function App() {

    let items = ['Appartamento Le Renne', 'Availability', 'Attractions']
    const handleSelectedItem = (item: string) => console.log({item})

    return (
      <LanguageProvider>
        <Router>
          {/*<BackgroundWrapper>*/}
            <NavBar basename={basename}/>
            <Routes>
              {/* Home page as the default */}
              <Route path="/" element={<Home/>}/>

              {/* Other Routes */}
              <Route path="/apartment" element={<TheApartment/>}/>

              <Route path="/attractions" element={<AttractionsPage />} />

              <Route path="/attractions/:attractionId" element={<AttractionDetail />} /> {/* Dynamic route for specific attraction */}

              {/*Prove mie */}
              <Route path={"/prova"} element={
                  <div><ListGroup items={items} heading='List' onSelectItem={handleSelectedItem}/></div>
              }/>
              <Route path={"/"} element={
                  <div className={'alert alert-primary'}>
                      <Alert>
                          Prova con <span color={'red'}>HTML</span>
                      </Alert>
                  </div>}
              />

              {/* Catch-all for undefined routes (404) */}
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          {/*</BackgroundWrapper>*/}
        </Router>
      </LanguageProvider>
    );
}


export default App;