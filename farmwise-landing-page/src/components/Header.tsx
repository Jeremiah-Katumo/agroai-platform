import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center position-relative pt-0 mt-0">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="assets/img/logo.png" alt="AgriCulture"></img>
            {/* <h1 className="sitename">AgriCulture</h1> */}
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              {/* <li><Link to="#about">About Us</Link></li>
              <li><Link to="#services">Our Services</Link></li>
              <li><Link to="/upload">Uploads</Link></li> */}
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li className="dropdown">
                <Link to="#">
                  <span>Yields</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li><Link to="/yields-dashboard">Yield Dashboard</Link></li>
                  <li><Link to="/yield-prediction">Yield Prediction</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Pests</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li><Link to="/pests-dashboard">Pest Dashboard</Link></li>
                  <li><Link to="/pest-prediction">Pest Prediction</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Diseases</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li><Link to="/diseases-dashboard">Disease Dashboard</Link></li>
                  <li><Link to="/disease-prediction">Disease Prediction</Link></li>
                </ul>
              </li>
              <li><Link to="/bot">Ask AI</Link></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

        </div>
      </header>
    </>
  );
};

export default Header;