//import React from "react";
//import "./Header.css";
//
//const Header = () => {
//  return (
//    <header className="header">
//      <nav className="navbar">
//        <div className="logo">CarProject</div>
//        <ul className="navLinks">
//          <li><a href="#home">Home</a></li>
//          <li><a href="#diy">DIY</a></li>
//          <li><a href="#tools">Tools</a></li>
//          <li><button className="loginButton">Login</button></li>
//        </ul>
//      </nav>
//    </header>
//  );
//};
//
//export default Header;

import React from "react";
import "./Header.css";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "DIY", href: "#diy" },
    { name: "Tools", href: "#tools" },
  ];

  return (
    <header className="header">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="logo">CarProject</div>
        <ul className="navLinks" role="navigation">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <button className="loginButton" aria-label="Login">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
