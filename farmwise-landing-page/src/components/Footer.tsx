import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            {/* Footer About */}
            <div className="col-lg-4 col-md-6 footer-about">
              <Link to="/" className="logo d-flex align-items-center">
                <span className="sitename">AgriCulture</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/terms">Terms of service</Link></li>
                <li><Link to="/privacy">Privacy policy</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services/web-design">Web Design</Link></li>
                <li><Link to="/services/web-development">Web Development</Link></li>
                <li><Link to="/services/product-management">Product Management</Link></li>
                <li><Link to="/services/marketing">Marketing</Link></li>
                <li><Link to="/services/graphic-design">Graphic Design</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Hic solutasetp</h4>
              <ul>
                <li><Link to="#">Molestiae accusamus iure</Link></li>
                <li><Link to="#">Excepturi dignissimos</Link></li>
                <li><Link to="#">Suscipit distinctio</Link></li>
                <li><Link to="#">Dilecta</Link></li>
                <li><Link to="#">Sit quas consectetur</Link></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Nobis illum</h4>
              <ul>
                <li><Link to="#">Ipsam</Link></li>
                <li><Link to="#">Laudantium dolorum</Link></li>
                <li><Link to="#">Dinera</Link></li>
                <li><Link to="#">Trodelas</Link></li>
                <li><Link to="#">Flexo</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div>
              © Copyright <strong><span>MyWebsite</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://jeremiahkatumo.vercel.app/" target="_blank" rel="noopener noreferrer">Jeremy</a> 
              {/* {" "}Distributed by <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a> */}
            </div>
          </div>

          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
