import React from "react";
import "./Gallery.css"; // Import the CSS file
import g1 from "../assets/g1.webp";
import g2 from "../assets/g2.webp";
import g3 from "../assets/g3.webp";
import g4 from "../assets/g4.webp";
import g5 from "../assets/g5.webp";
import g6 from "../assets/g6.webp";
import g7 from "../assets/g7.webp";
import g8 from "../assets/g8.webp";
import g9 from "../assets/g9.webp";
import g10 from "../assets/g10.webp";
import g11 from "../assets/g11.webp";
import g12 from "../assets/g12.webp";
import g13 from "../assets/g13.webp";
import g14 from "../assets/g14.webp";
import g15 from "../assets/g15.webp";
import g16 from "../assets/g16.webp";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GLIMPSES OF PARC 2020 & 2022</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery Image ${index + 1}`} className="gallery-img" />
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More</button>
    </div>
  );
};

export default Gallery;
