
import { useRoutes } from "react-router-dom";

import TheApartment from "../pages/TheApartment";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { handleClickBooking } from './HandleClick.tsx';
// import Aboutus from "pages/Aboutus";
// import Reservation from "pages/Reservation";
// import Contact from "pages/Contact";
// import Homepage from "pages/Homepage";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home handleBookingClick={handleClickBooking} /> },
        { path: "*", element: <NotFound /> },
        {path: "apartment", element: <TheApartment />,},
        // {path: "aboutus", element: <Aboutus />,},
        // {path: "reservation", element: <Reservation />,},
        // {path: "contact", element: <Contact />,},
        // {path: "homepage", element: <Homepage />,},
    ]);
    return element;
};

export default ProjectRoutes;
