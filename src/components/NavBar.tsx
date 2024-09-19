export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Navbar brand */}
                <a className="navbar-brand" href="/">Appartamento Le Renne</a>

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
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/apartment">The Apartment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/availability">Availability</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                               data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Attractions
                            </a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Attraction1</a></li>
                                <li><a className="dropdown-item" href="#">Attraction2</a></li>
                                <li><a className="dropdown-item" href="#">Attraction3</a></li>
                              </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar