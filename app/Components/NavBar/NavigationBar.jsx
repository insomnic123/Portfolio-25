"use client";

import "./NavBar.css"; // Adjusted import for CSS
import QAZI from "../QAZI"; // Import the QAZI component

const menus = ["Home", "Projects", "Skills"];

const images = [
  { src: "/Logos/icons8-github.svg", alt: "GitHub", link: "https://github.com/insomnic123" },
  { src: "/Logos/icons8-linkedin.svg", alt: "LinkedIn", link: "https://www.linkedin.com/in/qaziayan/" },
  { src: "/Logos/email-svgrepo-com.svg", alt: "Email", link: "mailto:qaziayn@gmail.com" }
];

const NavigationBar = () => {
  return (
    <header className="navBar">
      <nav className="navContainer">
        {/* Left Section: QAZI Component */}
        <div className="qaziContainer">
          <a href="/#home"><QAZI/></a>
        </div>

        {/* Center Section: Menu Items */}
        <div className="navCenter">
          {menus.map((menu, i) => (
            <a key={i} href={`#${menu.toLowerCase()}`} className="text uppercase font-semibold">
              {menu}
            </a>
          ))}
        </div>

        {/* Right Section: Social Links */}
        <div className="socialLinks">
          {images.map((image, i) => (
            <a key={i} href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt} className="iconImage" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
