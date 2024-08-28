import React from "react";
import "./Footer.css";
import logo from '../../Assets/Voxizo-Logo.png'
import { assets } from "../../Assets/R_Assets/Assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-logo">
            <img src={logo} alt="Agency Logo" />
            <p>
              Your premier choice for cutting-edge advertising solutions.
              We excel in creating impactful campaigns and delivering results.
            </p>
          </div>
          <div className="footer-address">
            <h4 className="footer-heading">Address</h4>
            <p>
              123 Ad Street, Creative City, Media State, AD-12345, USA.
            </p>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contacts</h3>
            <div className="email">
              <img src={assets.Email} alt="Email Icon" />
              <div>contact@Voxizo.com</div>
            </div>

            <div className="phone">
              <img src={assets.Phone} alt="Phone Icon" />
              <div>+1 234 567 8901</div>
            </div>
          </div>
        </div>
        <div className="footer-center">
          {/* <div className="footer-center-content"> */}
          <h3 className="footer-heading">Menu</h3>
          <ul className="footer-list-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Work</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          {/* </div> */}
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-icons">
            <div className="footer-social-icon-container">
              <img src={assets.Twitter} alt="Twitter Icon" />
            </div>

            <div className="footer-social-icon-container">
              <img src={assets.Facebook} alt="Facebook Icon" />
            </div>

            <div className="footer-social-icon-container">
              <img src={assets.Youtube} alt="YouTube Icon" />
            </div>

            

            <div className="footer-social-icon-container">
              <img src={assets.Whatsapp} alt="WhatsApp Icon" />
            </div>

          </div>
        </div>
      </div>
      <div className="copyright">© 2024 Voxizo. All rights reserved.</div>
    </div>
  );
};

export default Footer
