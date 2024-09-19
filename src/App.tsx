import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert from "./components/Alert.tsx";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home"; // Home component
import TheApartment from "./pages/TheApartment"; // Other page components
import NotFound from "./pages/NotFound";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './tailwind.css'; // Import Tailwind CSS globally

function App() {

    let items = ['Appartamento Le Renne', 'Availability', 'Attractions']
    const handleSelectedItem = (item: string) => console.log({item})
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* Home page as the default */}
                <Route path="/" element={<Home/>}/>

                {/* Other Routes */}
                <Route path="/apartment" element={<TheApartment/>}/>

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
        </Router>
    );
};


export default App;