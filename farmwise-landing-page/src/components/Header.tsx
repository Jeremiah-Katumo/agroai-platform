import { Link } from "react-router-dom";
import AgroAI from '../assets/img/agroailogo.png'

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center position-fixed top-0 start-0 w-100 bg-white shadow"
        style={{ zIndex: 1030, height: '80px' }}
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="/" className="logo d-flex align-items-center">
            <img
              src={AgroAI}
              alt="AgriCulture"
              className="img-fluid rounded-5 me-2"
              style={{ height: '60px', width: '60px' }}
            />
            {/* <h1 className="sitename mb-0 fs-5 fw-bold text-dark">AgriCulture</h1> */}
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