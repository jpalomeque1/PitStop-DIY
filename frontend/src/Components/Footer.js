import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Style/Footer.css";

const Footer = () => {
  return (
      <footer>
        <div className="footerContainer">
          <div className="socialIcons">
            <a href="https://www.facebook.com/" className="social-icon">
              <img src="/Facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" className="social-icon">
              <img src="/Instagram.png" alt="Instagram" />
            </a>
            <Link to="/" className="logo">
              <img src="/Logo.png" alt="Logo" />
            </Link>
            <a href="https://x.com/?mx=2" className="social-icon">
              <img src="/X.png" alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/" className="social-icon">
              <img src="/Youtube.png" alt="YouTube" />
            </a>
          </div>

          <div className="footerNav">
            <ul>
              {/* Use Link for internal routing */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/diy">DIY</Link></li>
              <li><Link to="/tools">Tools</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p>
            Copyright &copy;2025; Designed by
            <span className="designer">PitStop-DIY</span>
          </p>
        </div>
      </footer>
  );
};

export default Footer;
