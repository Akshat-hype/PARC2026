import React, { useState } from "react";
import "./Gallery.css";

// Importing images
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
import g17 from "../assets/g17.webp";
import g18 from "../assets/g18.webp";
import g19 from "../assets/g19.webp";
import g20 from "../assets/g20.webp";
import g21 from "../assets/g21.webp";
import g22 from "../assets/g22.webp";
import g23 from "../assets/g23.webp";
import g24 from "../assets/g24.webp";
import g25 from "../assets/g25.webp";
import g26 from "../assets/g26.webp";
import g27 from "../assets/g27.webp";
import g28 from "../assets/g28.webp";
import g29 from "../assets/g29.webp";
import g30 from "../assets/g30.webp";
import g31 from "../assets/g31.webp";

// Dividing images into two categories
const glimpsesImages = [g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, g31]; // PARC 2020-2022
const electricalImages = [g1, g2, g3, g4, g5, g6, g7, g8,g9, g10, g11, g12, g13, g14, g15, g16]; // Electrical Engineering

const GallerySection = ({ title, images }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-grid">
        {images.slice(0, viewMore ? images.length : 4).map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
      <button className="view-more-btn" onClick={() => setViewMore(!viewMore)}>
        {viewMore ? "View Less" : "View More"}
      </button>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="gallery-container">
      <GallerySection title="Glimpses of PARC 2024" images={glimpsesImages} />
      <GallerySection title="Glimpses of PARC 2020-2022" images={electricalImages} />
    </div>
  );
};

export default Gallery;
