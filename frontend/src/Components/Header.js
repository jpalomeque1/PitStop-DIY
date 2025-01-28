//// JavaScript: Generate Header
//document.addEventListener("DOMContentLoaded", () => {
//  const header = document.createElement("header");
//  const navbar = document.createElement("nav");
//  navbar.className = "navbar";
//
//  // Logo
//  const logoDiv = document.createElement("div");
//  logoDiv.className = "logo";
//  logoDiv.textContent = "CarProject";
//
//  // Navigation Links
//  const navLinks = document.createElement("ul");
//  navLinks.className = "nav-links";
//
//  const links = [
//    { href: "#home", text: "Home" },
//    { href: "#diy", text: "DIY" },
//    { href: "#tools", text: "Tools" },
//  ];
//
//  links.forEach(link => {
//    const li = document.createElement("li");
//    const anchor = document.createElement("a");
//    anchor.href = link.href;
//    anchor.textContent = link.text;
//    li.appendChild(anchor);
//    navLinks.appendChild(li);
//  });
//
//  // Login Button
//  const loginButtonLi = document.createElement("li");
//  const loginButton = document.createElement("button");
//  loginButton.className = "login-button";
//  loginButton.textContent = "Login";
//  loginButtonLi.appendChild(loginButton);
//  navLinks.appendChild(loginButtonLi);
//
//  // Append elements to navbar
//  navbar.appendChild(logoDiv);
//  navbar.appendChild(navLinks);
//
//  // Append navbar to header
//  header.appendChild(navbar);
//
//  // Add header to body
//  document.body.prepend(header);
//});

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">CarProject</div>
        <ul className="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#diy">DIY</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><button className="loginButton">Login</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
