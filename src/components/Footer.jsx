import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/glauniv/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/gla_mathura?lang=en" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/glauniv/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://in.linkedin.com/school/gla-university/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="copyright">Copyright © PARC 2026. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
