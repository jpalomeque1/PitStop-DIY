import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
          <a href="/frontend/src/pages/Home.js" className="logo">
            <img src="../Logo.png" alt="Logo" />
          </a>
          <a href="https://x.com/?mx=2"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="/frontend/src/pages/Home.js">Home</a></li>
            <li><a href="/frontend/src/pages/About.js">About</a></li>
            <li><a href="/frontend/src/pages/DIY.js">DIY</a></li>
            <li><a href="/frontend/src/pages/Maintenance.js">Maintenance</a></li>
            <li><a href="/frontend/src/pages/Account.js">Account</a></li>
            <li><a href="/frontend/src/pages/Login.js">Login</a></li>
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