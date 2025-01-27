// JavaScript: Generate Header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  const navbar = document.createElement("nav");
  navbar.className = "navbar";

  // Logo
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  logoDiv.textContent = "CarProject";

  // Navigation Links
  const navLinks = document.createElement("ul");
  navLinks.className = "nav-links";

  const links = [
    { href: "#home", text: "Home" },
    { href: "#diy", text: "DIY" },
    { href: "#tools", text: "Tools" },
  ];

  links.forEach(link => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.text;
    li.appendChild(anchor);
    navLinks.appendChild(li);
  });

  // Login Button
  const loginButtonLi = document.createElement("li");
  const loginButton = document.createElement("button");
  loginButton.className = "login-button";
  loginButton.textContent = "Login";
  loginButtonLi.appendChild(loginButton);
  navLinks.appendChild(loginButtonLi);

  // Append elements to navbar
  navbar.appendChild(logoDiv);
  navbar.appendChild(navLinks);

  // Append navbar to header
  header.appendChild(navbar);

  // Add header to body
  document.body.prepend(header);
});
