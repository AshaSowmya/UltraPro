import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Images/Logo.png";
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav ref={navRef}>
      <a id="home"href="#home">Home</a>
        <a href="#ecosystem">Ecosystem</a>
        <a href="#about-us">About</a>
        <a href="#blog">Blog</a>
        <a href="#token">Token</a>
        <a href="#expo">Expo</a>
        <a href="#enterprises">Enhanced-Enterprises</a>
        <button className="whitepaper-btn">Whitepaper</button>
        <button className="contact-btn">Contact Us</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
