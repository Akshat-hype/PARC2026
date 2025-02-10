import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import logo from "../assets/logo.webp"; // Update path if needed

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/committee" onClick={() => setMenuOpen(false)}>Committee</Link></li>
        <li><Link to="/registration" onClick={() => setMenuOpen(false)}>Registration</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}

export default Navbar;
