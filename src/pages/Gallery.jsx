import React from "react";
import "./Gallery.css"; // Import the CSS file

const images = [
  "", "", "", "", "", "" // Placeholder for now
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GLIMPSES OF PARC 2020 & 2022</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <div className="placeholder">Image {index + 1}</div>
          </div>
        ))}
      </div>
      <button className="view-more-btn">View More</button>
      
    </div>
  );
};

export default Gallery;