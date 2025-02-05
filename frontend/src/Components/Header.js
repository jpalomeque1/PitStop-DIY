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
