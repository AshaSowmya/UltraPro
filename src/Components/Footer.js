import React from "react";
import "../Styles/main.css";
import Logo from "../Images/Logo.png";
import Gallery from "./Gallery";
function Footer() {
  return (
    <div>
      <Gallery />
      <div className="footer-steps-container">
        <div>
          <img src={Logo} alt="Ultra Pro" />
          <p>
            The Ultrapro Blockchain is a <br />
            global, decentralized network
            <br /> with developers
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <li>UPRO Explorer</li>
          <li>Exchange</li>
          <li>Wallet</li>
          <li>DeFi</li>
          <li>Payments</li>
          <li>NFT</li>
        </div>
        <div>
          <h3>Expo</h3>
          <li>Whitepaper</li>
          <li>Services</li>
          <li>Token</li>
          <li>Staking</li>
          <li>Events</li>
        </div>
        <div>
          <h3>Community</h3>
          <li>Save Crypto</li>
          <li>Telegram</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>X</li>
          <li>Medium</li>
        </div>
        <div>
          <h3>About</h3>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </div>
      </div>
    </div>
  );
}
export default Footer;
